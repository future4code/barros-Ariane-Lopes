## Exercicio 1
A query é:
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

## Exercicio 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"

);

INSERT INTO Actor (id, name, salary)    
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- O ERRO QUE ACONTECEU ACIMA, DEVIDO A CONTAGEM DE LINHAS NÃO CORRESPONDE COM AS COLUNAS

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

-- O ERRO QUE ACONTECEU ACIMA FOI QUE O CAMPO "NOME" NÃO TEM VALOR PADRÃO

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

-- ERRO ACIMA FOI, VALOR DE DATA INCORRETO
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

## Exercicio 3
 SELECT * FROM Actor;1

 SELECT * from Actor WHERE gender = "female";

 SELECT salary from Actor WHERE name = "Tony Ramos";

 SELECT * from Actor WHERE gender = "invalid";

 SELECT id, name, salary from Actor WHERE salary < 500000;

 SELECT id, name from Actor WHERE id = "002";
## Exercicio 4
 SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

## Exercicio 5
 CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

## Exercicio 6
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.
    Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2006-01-06",
    7
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Mulher maravilha",
    "Treinada desde cedo para ser uma guerreira imbatível, 
    Diana Prince nunca saiu da paradisíaca ilha em que é reconhecida como princesa das Amazonas.",
	"2017-09-06",
    5
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "A Cabana",
    "Um homem vive atormentado após perder a sua filha mais nova, 
    cujo corpo nunca foi encontrado, mas sinais de que ela teria sido violentada 
    e assassinada são encontrados em uma cabana nas montanhas. Anos depois da tragédia, 
    ele recebe um chamado misterioso para retornar a esse local, onde ele vai receber uma lição de vida.",
	"2017-05-10",
    8
);

SELECT * FROM Movie;

DELETE FROM Movie WHERE id=002;

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Doce de mãe",
    " Sinopse: Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
    A vida dela e dos seus quatro filhos sofre uma reviravolta depois 
    que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
	"2012-12-27",
    10
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"005",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

## Exercicio 7
SELECT id, title, rating FROM Movie WHERE id = "004";

SELECT * FROM Movie WHERE title = "Deus é Brasileiro";

SELECT id, title, synopsis FROM Movie WHERE rating > 7;

SELECT * FROM Movie
WHERE title LIKE "%vida%";

SELECT * FROM Movie
WHERE title LIKE "%AMOR%" OR
      synopsis LIKE "%AMOR%";
      