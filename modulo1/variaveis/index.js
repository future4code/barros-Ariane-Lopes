//Exercicio de interpretacao de codigo

/* EX:1. Nesse caso vai aparecer somente no console o 'a' e o 'b' alterado. 
Pois essa variavel 'let', ela pode ter o seu valor alterado


let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
----------------------------------------------------------- */

/* EX:2. Nesse exercicio, todos os valores correspondem a 10, que vai ser impresso no console.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
------------------------------------------------------------- */

/* EX.3 Aqui o 'alert' ele "ajuda" da uma divisao do que eu estou querendo saber.

let p(PODEMOS USAR 'horasTrabalhadas') = prompt("Quantas horas você trabalha por dia?")
let t(PODEMOS USAR 'valorPorDiaria') = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
--------------------------------------------------------------*/

//EXERCICIO DE ESCRITA DE CODIGO

//1.

/*let primeiroNome
let idade

console.log( typeof primeiroNome ) */ //(COLOQUEI COMO COMENTARIO POR CONTA DO ERRO, ESTAVA APARECENDO IDADE SUBLINHADA DE VERMELHO)  

/* Está impresso no console "undefined" por que  não atribuiu um valor especifico. */

//------------------------------------------------

let nome = prompt(" Qual o seu nome?" )
let idade = prompt(" Qual é sua idade?" )

console.log(typeof nome, typeof idade )
// LOGO QUE ABRI O CONSOLE, APARECEU A CAIXINHA DE PERGUNTAS, 'NOME' E 'IDADE'

//----------------------------------------------------
/*O EXERCÍCIO 2, EU TIVE DIFICULDADE DE FAZER, TENTEI DE TODAS AS FORMAS, MAIS NAO CONSEGUI, MINHA EQUIPE ME EXPLICOU, MAIS MESMO ASSIM TIVE DIFICULDADE.*/
//-----------------------------------------------------

//3.

let a = 10
let b = 25

a = b
console.log ( a , b )

let c = 0

a = c
b = a
c = b

console.log ( a , b , c )

a = 25
b = 10
console.log ( a , b )


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


