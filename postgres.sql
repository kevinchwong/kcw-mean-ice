postgres.sql

DROP TABLE stocks;

CREATE TABLE stocks (
	id SERIAL PRIMARY KEY,
    symbol varchar(8) NOT NULL,
    quantity bigint
);

INSERT INTO stocks(symbol,quantity) VALUES ('IBM',1000);

UPDATE stocks SET quantity=9876543210987654321 WHERE symbol='IBM';

DELETE FROM stocks WHERE symbol='IBM';