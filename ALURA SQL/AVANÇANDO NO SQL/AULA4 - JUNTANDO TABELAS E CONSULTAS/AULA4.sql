USE SUCOS_VENDAS;

/*USANDO JOINS [INNER JOIN] [LEFT JOIN] [RIGHT JOIN] [FULL JOIN] [CROSS JOIN]*/
SELECT * FROM tabela_de_vendedores;
SELECT * FROM notas_fiscais;

SELECT * FROM tabela_de_vendedores A 
INNER JOIN notas_fiscais B
ON A.MATRICULA = B.MATRICULA;

SELECT A.MATRICULA, A.NOME, COUNT(*) AS QTD_NOTAS FROM tabela_de_vendedores A 
INNER JOIN notas_fiscais B
ON A.MATRICULA = B.MATRICULA
GROUP BY A.MATRICULA, A.NOME;

/*EXERCICIO1*/
SELECT YEAR(DATA_VENDA) AS ANO, SUM(QUANTIDADE * PRECO) AS FATURAMENTO
FROM notas_fiscais NF INNER JOIN itens_notas_fiscais INF
ON NF.NUMERO = INF.NUMERO
GROUP BY YEAR(DATA_VENDA);

/*EXEMPLOS LEFT E RIGHT JOIN*/
SELECT COUNT(*) FROM tabela_de_clientes;

SELECT CPF, COUNT(*) FROM notas_fiscais GROUP BY CPF;

SELECT DISTINCT A.CPF, A.NOME, B.CPF FROM tabela_de_clientes A 
LEFT JOIN notas_fiscais B
ON A.CPF = B.CPF;

SELECT DISTINCT A.CPF, A.NOME, B.CPF FROM tabela_de_clientes A 
LEFT JOIN notas_fiscais B
ON A.CPF = B.CPF
WHERE B.CPF IS NULL;

SELECT DISTINCT A.CPF, A.NOME, B.CPF FROM tabela_de_clientes A 
LEFT JOIN notas_fiscais B
ON A.CPF = B.CPF
WHERE B.CPF IS NULL;

SELECT DISTINCT A.CPF, A.NOME, B.CPF, B.DATA_VENDA FROM tabela_de_clientes A 
LEFT JOIN notas_fiscais B ON A.CPF = B.CPF
WHERE YEAR(DATA_VENDA = 2015) IS NULL
GROUP BY A.CPF;

/*EXEMPLOS DE FULL E CROSS JOIN*/
SELECT * FROM tabela_de_vendedores;

SELECT * FROM tabela_de_clientes;

SELECT * FROM tabela_de_vendedores INNER JOIN tabela_de_clientes
ON tabela_de_vendedores.BAIRRO = tabela_de_clientes.BAIRRO;

SELECT tabela_de_vendedores.BAIRRO, tabela_de_vendedores.NOME,
DE_FERIAS, tabela_de_vendedores.BAIRRO, 
tabela_de_clientes.NOME FROM tabela_de_vendedores 
INNER JOIN tabela_de_clientes
ON tabela_de_vendedores.BAIRRO = tabela_de_clientes.BAIRRO;

SELECT tabela_de_vendedores.BAIRRO, tabela_de_vendedores.NOME,
DE_FERIAS, tabela_de_CLIENTES.BAIRRO, 
tabela_de_clientes.NOME FROM tabela_de_vendedores 
LEFT JOIN tabela_de_clientes
ON tabela_de_vendedores.BAIRRO = tabela_de_clientes.BAIRRO;

SELECT tabela_de_vendedores.BAIRRO, tabela_de_vendedores.NOME,
DE_FERIAS, tabela_de_CLIENTES.BAIRRO, 
tabela_de_clientes.NOME FROM tabela_de_vendedores 
RIGHT JOIN tabela_de_clientes
ON tabela_de_vendedores.BAIRRO = tabela_de_clientes.BAIRRO;

SELECT tabela_de_vendedores.BAIRRO, tabela_de_vendedores.NOME,
DE_FERIAS, tabela_de_CLIENTES.BAIRRO, 
tabela_de_clientes.NOME FROM tabela_de_vendedores 
FULL JOIN tabela_de_clientes
ON tabela_de_vendedores.BAIRRO = tabela_de_clientes.BAIRRO; /*EEROOOOO*/

SELECT tabela_de_vendedores.BAIRRO, tabela_de_vendedores.NOME,
DE_FERIAS, tabela_de_CLIENTES.BAIRRO, 
tabela_de_clientes.NOME FROM tabela_de_vendedores 
LEFT JOIN tabela_de_clientes
ON tabela_de_vendedores.BAIRRO = tabela_de_clientes.BAIRRO
UNION
SELECT tabela_de_vendedores.BAIRRO, tabela_de_vendedores.NOME,
DE_FERIAS, tabela_de_CLIENTES.BAIRRO, 
tabela_de_clientes.NOME FROM tabela_de_vendedores 
RIGHT JOIN tabela_de_clientes
ON tabela_de_vendedores.BAIRRO = tabela_de_clientes.BAIRRO;

/*DIFERENÇAS DE UNION E UNION ALL*/
SELECT DISTINCT BAIRRO FROM tabela_de_clientes;
SELECT DISTINCT BAIRRO FROM tabela_de_vendedores;
 
SELECT DISTINCT BAIRRO FROM tabela_de_clientes
UNION /*POSSUI O DISTINCT EMBUTIDO*/
SELECT DISTINCT BAIRRO FROM tabela_de_vendedores;

SELECT DISTINCT BAIRRO FROM tabela_de_clientes
UNION ALL
SELECT DISTINCT BAIRRO FROM tabela_de_vendedores;

SELECT DISTINCT BAIRRO, NOME, 'CLIENTE' AS TIPO FROM tabela_de_clientes
UNION
SELECT DISTINCT BAIRRO, NOME, 'VENDEDOR' AS TIPO FROM tabela_de_vendedores;

/*SUB CONSULTAS*/
SELECT DISTINCT BAIRRO FROM tabela_de_vendedores;

SELECT * FROM tabela_de_clientes WHERE 
BAIRRO IN('TIJUCA', 'JARDINS', 'COPACABANA', 'SANTO AMARO');

SELECT * FROM tabela_de_clientes WHERE 
BAIRRO IN(SELECT DISTINCT BAIRRO FROM tabela_de_vendedores);

SELECT X.EMBALAGEM, X.PRECO_MAXIMO FROM
(SELECT EMBALAGEM, MAX(PRECO_DE_LISTA) AS PRECO_MAXIMO FROM tabela_de_produtos
GROUP BY EMBALAGEM) X WHERE X.PRECO_MAXIMO >= 10;

/*EXERCICIO2*/
SELECT X.CPF, X.QTD FROM
(SELECT CPF, COUNT(*) AS QTD FROM notas_fiscais
WHERE YEAR(DATA_VENDA) = 2016 GROUP BY CPF) X WHERE X.QTD > 2000;

/*VISÃO / VIEW*/
SELECT X.EMBALAGEM, X.PRECO_MAXIMO FROM
(SELECT EMBALAGEM, MAX(PRECO_DE_LISTA) AS PRECO_MAXIMO FROM tabela_de_produtos
GROUP BY EMBALAGEM) X WHERE X.PRECO_MAXIMO >= 10;

CREATE VIEW `VW_MAIORES_EMBALAGENS` AS
SELECT EMBALAGEM, MAX(PRECO_DE_LISTA) AS PRECO_MAXIMO FROM tabela_de_produtos
GROUP BY EMBALAGEM;

SELECT X.EMBALAGEM, X.PRECO_MAXIMO FROM
VW_MAIORES_EMBALAGENS X WHERE X.PRECO_MAXIMO >= 10;

SELECT A.NOME_DO_PRODUTO,A.EMBALAGEM, A.PRECO_DE_LISTA, X.PRECO_MAXIMO
FROM tabela_de_produtos A INNER JOIN vw_maiores_embalagens X ON
A.EMBALAGEM = X.EMBALAGEM;

SELECT A.NOME_DO_PRODUTO,A.EMBALAGEM, A.PRECO_DE_LISTA, X.PRECO_MAXIMO,
((A.PRECO_DE_LISTA / X.PRECO_MAXIMO)-1) * 100 AS PERCENTUAL
FROM tabela_de_produtos A INNER JOIN vw_maiores_embalagens X ON
A.EMBALAGEM = X.EMBALAGEM;

