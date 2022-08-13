--CREATE DATABASE pdv;

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

INSERT INTO categorias
(descricao)
VALUES
('Informática'),
('Celulares'),
('Beleza e Perfumaria'),
('Mercado'),
('Livros e Papelaria'),
('Brinquedos'),
('Moda'),
('Bebê'),
('Games'),
('Roupas');

DROP TABLE IF EXISTS produtos;

CREATE TABLE produtos (
	ID SERIAL PRIMARY KEY,
	  descricao TEXT NOT NULL,
  	quantidade_estoque INTEGER NOT NULL CHECK(quantidade_estoque >= 0),
  	valor INTEGER NOT NULL CHECK(valor >= 0),
  	categoria_id INTEGER NOT NULL,
  	FOREIGN KEY (categoria_id) REFERENCES categorias(id)
  );

DROP TABLE IF EXISTS clientes;

CREATE TABLE clientes (
  ID SERIAL PRIMARY KEY,
  	nome TEXT NOT NULL,
  	email TEXT CHECK(email LIKE '%@%') UNIQUE NOT NULL,
  	cpf CHAR(11) UNIQUE NOT NULL,
  	cep TEXT,
  	rua TEXT,
  	numero TEXT,
  	bairro TEXT,
  	cidade TEXT,
  	estado TEXT 
  );

DROP TABLE IF EXISTS pedidos;

CREATE TABLE pedidos (
  ID SERIAL PRIMARY KEY,
  cliente_id INTEGER NOT NULL,
  observacao TEXT,
  valor_total INTEGER NOT NULL CHECK(valor_total >= 0),
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
  );
  
DROP TABLE IF EXISTS pedido_produtos;
  
CREATE TABLE pedido_produtos (
  ID SERIAL PRIMARY KEY,
  pedido_id INTEGER NOT NULL,
  produto_id INTEGER NOT NULL,
  quantidade_produto INTEGER NOT NULL CHECK(quantidade_produto >= 0),
  valor_produto INTEGER NOT NULL CHECK(valor_produto >= 0),
  foreign key (pedido_id) REFERENCES pedidos(id),
  foreign key (produto_id) REFERENCES produtos(id)
  );

ALTER TABLE produtos
ADD COLUMN produto_imagem TEXT;
  