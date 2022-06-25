-- CREATE DATABASE teste;

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
	ID SERIAL PRIMARY KEY,
  	nome TEXT NOT NULL,
  	email TEXT NOT NULL UNIQUE,
  	senha TEXT NOT NULL
);

DROP TABLE IF EXISTS categorias;

CREATE TABLE categorias (
	ID SERIAL PRIMARY KEY,
  	descricao TEXT NOT NULL
);

DROP TABLE IF EXISTS transacoes;

CREATE TABLE transacoes (
	ID SERIAL PRIMARY KEY,
  	descricao TEXT NOT NULL,
  	valor INTEGER NOT NULL,
  	data TIMESTAMPTZ(3) NOT NULL DEFAULT NOW(),
  	categoria_id INTEGER NOT NULL,
  	usuario_id INTEGER NOT NULL,
  	tipo TEXT NOT NULL,
  	FOREIGN KEY (categoria_id) REFERENCES categorias (id),
  	FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

INSERT INTO categorias
(descricao)
VALUES
('Alimentação'),
('Assinaturas e Serviços'),
('Casa'),
('Mercado'),
('Cuidados Pessoais'),
('Educação'),
('Família'),
('Lazer'),
('Pets'),
('Presentes'),
('Roupas'),
('Saúde'),
('Transporte'),
('Salário'),
('Vendas'),
('Outras receitas'),
('Outras despesas');
