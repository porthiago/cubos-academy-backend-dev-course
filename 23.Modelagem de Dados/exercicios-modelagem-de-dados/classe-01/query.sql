-- CREATE DATABASE ecommerce;

DROP TABLE IF EXISTS categorias;

CREATE TABLE categorias (
	id serial primary key,
  	nome varchar(50) NOT NULL
);

DROP TABLE IF EXISTS produtos;

CREATE TABLE produtos (
	id serial primary key,
  	nome varchar(100) NOT NULL,
  	descricao text,
  	preco integer,
  	quantidade_em_estoque integer,
  	categoria_id integer NOT NULL REFERENCES categorias(id)
);

DROP TABLE IF EXISTS clientes;

CREATE TABLE clientes (
	cpf char(11) NOT NULL UNIQUE,
  	nome varchar(150) NOT NULL
);


DROP TABLE IF EXISTS vendedores;

CREATE TABLE vendedores (
	cpf char(11) NOT NULL UNIQUE,
  	nome varchar(150) NOT NULL
);

DROP TABLE IF EXISTS pedidos;

CREATE TABLE pedidos (
	id serial primary key,
	valor integer,
  	cliente_cpf char(11) NOT NULL REFERENCES clientes(cpf),
  	vendedor_cpf char(11) NOT NULL REFERENCES vendedores(cpf)
);

DROP TABLE IF EXISTS itens_do_pedido;

CREATE TABLE itens_do_pedido (
	id serial primary key,
	pedido_id integer NOT NULL REFERENCES pedidos(id),
  	quantidade integer,
  	produto_id integer NOT NULL REFERENCES produtos(id)
);

INSERT INTO categorias (nome)
VALUES
('frutas'),
('verduras'),
('massas'),
('bebidas'),
('utilidades');

INSERT INTO produtos
(nome, descricao, preco, quantidade_em_estoque, categoria_id)
VALUES
('Mamão', 'Rico em vitamina A potássio e vitamina C', 300, 123, 1),
('Maça', 'Fonte de potássio e fibras', 90, 34, 1),
('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C', 50, 76, 2),
('Abacate', 'NÃO CONTÉM GLÚTEN', 150, 64, 1),
('Tomate', 'Rico em vitaminas A, B e C', 125, 88, 2),
('Acelga', 'NÃO CONTÉM GLÚTEN', 235, 13, 2),
('Macarrão parafuso', 'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais',	690, 5,	3),
('Massa para lasanha', 'Uma reunião de família precisa ter comida boa e muita alegria.', 875, 19, 3),
('Refrigerante coca cola lata', 'Sabor original', 350, 189, 4),
('Refrigerante Pepsi 2l', 'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO',	700, 12, 4),
('Cerveja Heineken 600ml', 'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado', 1200, 500, 4),
('Agua mineral sem gás', 'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.', 130, 478, 4),
('Vassoura', 'Pigmento, matéria sintética e metal.', 2350, 30, 5),
('Saco para lixo', 'Reforçado para garantir mais segurança', 1340, 90, 5),
('Escova dental', 'Faça uma limpeza profunda com a tecnologia inovadora', 1000, 44, 5),
('Balde para lixo 50l',	'Possui tampa e fabricado com material reciclado', 2290, 55, 5),
('Manga', 'Rico em Vitamina A, potássio e vitamina C', 198, 176, 1),
('Uva', 'NÃO CONTÉM GLÚTEN', 420, 90, 1);

INSERT INTO clientes (cpf, nome)
VALUES
('80371350042', 'José Augusto Silva'),
('67642869061', 'Antonio Oliveira'),
('63193310034', 'Ana Rodrigues'),
('75670505018', 'Maria da Conceição');

INSERT INTO vendedores (cpf, nome)
VALUES
('82539841031', 'Rodrigo Sampaio'),
('23262546003', 'Beatriz Souza Santos'),
('28007155023', 'Carlos Eduardo');

--José Algusto comprou os seguintes itens com o vendedor Carlos Eduardo
--1 Mamão, 1 Pepsi de 2l, 6 Heinekens de 600ml, 1 Escova dental e 5 Maçãs.

SELECT id, nome, preco 
FROM produtos 
WHERE nome ILIKE '%Mam%o%' OR nome ILIKE '%Pepsi%' 
OR nome ILIKE '%Heineken%' OR nome ILIKE '%Escova dental%' OR nome ILIKE 'Ma%';

SELECT * FROM clientes;
SELECT * FROM vendedores;

INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
(300 + 700 + 6*1200 + 1000 + 5*90, 80371350042, 28007155023);

INSERT INTO itens_do_pedido
(pedido_id, quantidade, produto_id)
VALUES
(1, 1, 1),
(1, 1, 10),
(1, 6, 11),
(1, 1, 15),
(1, 5, 2);

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 1
WHERE id = 1
OR id = 10
OR id = 15;

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 6
WHERE id = 11;

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 5
WHERE id = 2;

-- Ana Rodrigues comprou os seguintes itens com a vendedora Beatriz Souza Santos
-- 10 Mangas, 3 Uvas, 5 Mamões, 10 tomates e 2 Acelgas.

INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
(
(SELECT preco FROM produtos WHERE nome ILIKE 'manga') * 10 +
(SELECT preco FROM produtos WHERE nome ILIKE 'uva') * 3 +
(SELECT preco FROM produtos WHERE nome ILIKE '%mam%') * 5 +
(SELECT preco FROM produtos WHERE nome ILIKE 'tomate') * 10 +
(SELECT preco FROM produtos WHERE nome ILIKE 'acelga') * 2, 
(SELECT cpf FROM clientes WHERE nome ILIKE 'Ana Rodrigues'), 
(SELECT cpf FROM vendedores WHERE nome ILIKE 'Beatriz Souza Santos') 
);

INSERT INTO itens_do_pedido
(pedido_id, quantidade, produto_id)
VALUES
(2, 10, (SELECT id FROM produtos WHERE nome ILIKE 'manga')),
(2, 3, (SELECT id FROM produtos WHERE nome ILIKE 'uva')),
(2, 5, (SELECT id FROM produtos WHERE nome ILIKE '%mam%')),
(2, 10, (SELECT id FROM produtos WHERE nome ILIKE 'tomate')),
(2, 2, (SELECT id FROM produtos WHERE nome ILIKE 'acelga'));

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 10
WHERE nome ILIKE 'manga';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 3
WHERE nome ILIKE 'uva';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 5
WHERE nome ILIKE '%mam%';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 10
WHERE nome ILIKE 'tomate';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 2
WHERE nome ILIKE 'acelga';

-- Maria da Conceição comprou os seguintes itens com a vendedora Beatriz Souza Santos
-- 1 Vassoura, 6 Águas sem gás e 5 Mangas.

INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
(
(SELECT preco FROM produtos WHERE nome ILIKE '%vassoura%') * 1 +
(SELECT preco FROM produtos WHERE nome ILIKE '%agua%sem%gas%') * 6 +
(SELECT preco FROM produtos WHERE nome ILIKE '%manga%') * 5, 
(SELECT cpf FROM clientes WHERE nome ILIKE 'Maria da Conceição'), 
(SELECT cpf FROM vendedores WHERE nome ILIKE 'Beatriz Souza Santos') 
);

UPDATE pedidos
SET valor = (
(SELECT preco FROM produtos WHERE nome ILIKE '%vassoura%') * 1 +
(SELECT preco FROM produtos WHERE nome ILIKE '%Agua mineral sem gás%') * 6 +
(SELECT preco FROM produtos WHERE nome ILIKE '%manga%') * 5
)
WHERE id = 3;

INSERT INTO itens_do_pedido
(pedido_id, quantidade, produto_id)
VALUES
(3, 1, (SELECT id FROM produtos WHERE nome ILIKE '%vassoura%')),
(3, 6, (SELECT id FROM produtos WHERE nome ILIKE '%Agua mineral sem gás%')),
(3, 5, (SELECT id FROM produtos WHERE nome ILIKE '%manga%'));

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 1
WHERE nome ILIKE '%vassoura%';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 6
WHERE nome ILIKE '%Agua mineral sem gás%';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 5
WHERE nome ILIKE '%manga%';

-- Maria da Conceição comprou os seguintes itens com o vendedor Rodrigo Sampaio
-- 1 Balde para lixo, 6 Uvas, 1 Macarrão parafuso, 3 Mamões, 20 tomates e 2 Acelgas.

INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
(
(SELECT preco FROM produtos WHERE nome ILIKE '%balde%para%lixo%') * 1 +
(SELECT preco FROM produtos WHERE nome ILIKE '%uva%') * 6 +
(SELECT preco FROM produtos WHERE nome ILIKE '%macarr%o%parafuso') * 1 +
(SELECT preco FROM produtos WHERE nome ILIKE '%mam%o') * 3 +
(SELECT preco FROM produtos WHERE nome ILIKE '%tomate%') * 20 +
(SELECT preco FROM produtos WHERE nome ILIKE '%acelga%') * 2, 
(SELECT cpf FROM clientes WHERE nome ILIKE 'Maria da Conceição'), 
(SELECT cpf FROM vendedores WHERE nome ILIKE 'Rodrigo Sampaio') 
);

INSERT INTO itens_do_pedido
(pedido_id, quantidade, produto_id)
VALUES
(4, 1, (SELECT id FROM produtos WHERE nome ILIKE '%balde%para%lixo%')),
(4, 6, (SELECT id FROM produtos WHERE nome ILIKE '%uva%')),
(4, 1, (SELECT id FROM produtos WHERE nome ILIKE '%macarr%o%parafuso')),
(4, 3, (SELECT id FROM produtos WHERE nome ILIKE '%mam%')),
(4, 20, (SELECT id FROM produtos WHERE nome ILIKE 'tomate')),
(4, 2, (SELECT id FROM produtos WHERE nome ILIKE 'acelga'));

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 1
WHERE nome ILIKE '%balde%para%lixo%';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 6
WHERE nome ILIKE 'uva';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 1
WHERE nome ILIKE '%macarr%o%parafuso';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 3
WHERE nome ILIKE '%mam%';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 20
WHERE nome ILIKE 'tomate';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 2
WHERE nome ILIKE 'acelga';

--Antonio Oliveira comprou os seguintes itens com o vendedor Rodrigo Sampaio
-- 8 Uvas, 1 Massa para lasanha, 3 Mangas, 8 tomates e 2 Heinekens 600ml.


INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
(
(SELECT preco FROM produtos WHERE nome ILIKE '%uva%') * 8 +
(SELECT preco FROM produtos WHERE nome ILIKE '%massa%o%para%lasanha') * 1 +
(SELECT preco FROM produtos WHERE nome ILIKE '%manga%') * 3 +
(SELECT preco FROM produtos WHERE nome ILIKE '%tomate%') * 8 +
(SELECT preco FROM produtos WHERE nome ILIKE '%Heineken%') * 2, 
(SELECT cpf FROM clientes WHERE nome ILIKE 'Antonio Oliveira'), 
(SELECT cpf FROM vendedores WHERE nome ILIKE 'Rodrigo Sampaio') 
);

UPDATE pedidos
SET valor = (
(SELECT preco FROM produtos WHERE nome ILIKE '%uva%') * 8 +
(SELECT preco FROM produtos WHERE nome ILIKE 'Massa para lasanha') * 1 +
(SELECT preco FROM produtos WHERE nome ILIKE '%manga%') * 3 +
(SELECT preco FROM produtos WHERE nome ILIKE '%tomate%') * 8 +
(SELECT preco FROM produtos WHERE nome ILIKE '%Cerveja Heineken 600ml%') * 2
)
WHERE id = 5;

INSERT INTO itens_do_pedido
(pedido_id, quantidade, produto_id)
VALUES
(5, 8, (SELECT id FROM produtos WHERE nome ILIKE '%uva%')),
(5, 1, (SELECT id FROM produtos WHERE nome ILIKE 'Massa para lasanha')),
(5, 3, (SELECT id FROM produtos WHERE nome ILIKE '%manga%')),
(5, 8, (SELECT id FROM produtos WHERE nome ILIKE 'tomate')),
(5, 2, (SELECT id FROM produtos WHERE nome ILIKE 'Cerveja Heineken 600ml%'));


UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 8
WHERE nome ILIKE 'uva';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 1
WHERE nome ILIKE 'Massa para lasanha';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 3
WHERE nome ILIKE '%manga%';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 8
WHERE nome ILIKE 'tomate';

UPDATE produtos
SET quantidade_em_estoque = quantidade_em_estoque - 2
WHERE nome ILIKE 'Cerveja Heineken 600ml%';

--Consultas

--Faça uma listagem de todos os produtos cadastrados com o nome da sua respectiva categoria.

SELECT produtos.nome, categorias.nome AS categoria 
FROM produtos
LEFT JOIN categorias ON produtos.id = categorias.id
ORDER BY produtos.nome;

--Faça uma listagem de todos os pedidos com o nome do vendedor 
--e o nome do cliente relacionado a venda.

SELECT id, vendedores.nome AS vendedor, clientes.nome AS cliente
FROM pedidos
LEFT JOIN vendedores ON pedidos.vendedor_cpf = vendedores.cpf
LEFT JOIN clientes ON pedidos.cliente_cpf = clientes.cpf;

-- Faça uma listagem de todas as categorias 
-- e a soma do estoque disponível de todos os produtos de cada categoria.

SELECT categorias.nome, 
SUM(produtos.quantidade_em_estoque) AS estoque_por_categoria
FROM categorias
LEFT JOIN produtos ON categorias.id = produtos.categoria_id
GROUP BY categorias.nome;

-- Faça uma listagem de todos os produtos e a quantidade vendida de cada produto.

SELECT produtos.nome, 
COALESCE(SUM(quantidade), 0) AS quantidade
FROM produtos
LEFT JOIN itens_do_pedido ON produtos.id = itens_do_pedido.produto_id
GROUP BY produtos.nome
ORDER BY quantidade DESC;
