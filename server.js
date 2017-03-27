var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var pg = require('pg');
pg.defaults.ssl=true;

var ObjectID = mongodb.ObjectID;

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the MONGODB database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

app.get("/api/stocks", function(req, res) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT id, symbol, quantity FROM stocks;', function(err, result) {
      done();
      if (err) {
        console.error(err);
        res.status(404).send("Error " + err);
      } else {
        res.status(200).json(result.rows);
      }
    });
  });
});

app.get("/api/stocks/:id", function(req, res) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT id, symbol, quantity FROM stocks WHERE id=($1);', [req.params.id], function(err, result) {
      done();
      if (err) {
        console.error(err);
        res.status(500).send("Error " + err);
      } else if (result.rows.length==0) {
        console.error(err);
        res.status(500).send("Failed to get stock"); 
      } else {
        res.status(200).json(result.rows[0]);
      }
    });
  });
});

app.post("/api/stocks", function(req, res) {
  var newStock = req.body;
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('INSERT INTO stocks (symbol,quantity) VALUES ($1,$2) RETURNING id;', [newStock.symbol, newStock.quantity], function(err, result) {
      done();
      if (err) {
        console.error(err);
        res.status(500).send("Error " + err);
      } else {
        newStock.id=result.rows[0].id;
        res.status(201).json(newStock);
      }
    });
  });
});

app.put("/api/stocks/:id", function(req, res) {
  var newStock = req.body;
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {

    var upsertSql = 'INSERT INTO stocks (symbol,quantity,id) VALUES ($1,$2,$3) ' +
                    'ON CONFLICT (id) DO UPDATE SET symbol = ($1), quantity = ($2); ';
    client.query(upsertSql, [newStock.symbol, newStock.quantity, req.params.id], function(err, result) {
      done();
      if (err) {
        console.error(err);
        res.status(500).send("Error " + err);
      } else {
        newStock.id=req.params.id;
        res.status(200).json(newStock);
      }
    });
  });
});

app.delete("/api/stocks/:id", function(req, res) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('DELETE FROM stocks WHERE id = ($1);', [req.params.id], function(err, result) {
      done();
      if (err) {
        console.error(err);
        res.status(500).send("Error " + err);
      } else {
        res.status(200).json(req.params.id);
      }
    });
  });
});

