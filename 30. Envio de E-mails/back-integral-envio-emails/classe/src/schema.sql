--CREATE DATABASE newsletter;

CREATE TABLE destinatarios (
	id SERIAL PRIMARY KEY,
	nome TEXT NOT NULL,
  	email TEXT NOT NULL
);
