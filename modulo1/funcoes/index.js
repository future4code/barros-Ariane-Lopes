    
    
    
  
  
 //1) 
  //a.
function imprimeInformacoesSobreMim () {

    console.log("Eu sou Ariane, tenho 26 anos, moro em Assis e sou estudante.")

  
}

imprimeInformacoesSobreMim()
//--------------------------------------
//b.

function dadosPessoais (nome, idade, cidade, profissão) {

    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`

    

}
dadosPessoais("Lais", 23, "Sao Paulo", "Instrutora")
console.log(dadosPessoais("Lais", 23, "Sao Paulo", "Instrutora"))

//=================================================================

/*2)a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/

function soma (primeiroNum, segundoNum) {
    return primeiroNum + segundoNum

}
console.log(soma(8, +9))
//------------------------------------------------------------------

/*b) Faça uma função que recebe 2 números e retorne um booleano que informa 
se o primeiro número é maior ou igual ao segundo.*/


function maiorOuIgual (num1, num2) {
    const comparaçao = num1 >= num2
    return comparaçao

}
maiorOuIgual (9, 8)
console.log(maiorOuIgual(9, 8))

//---------------------------------------------------------
/*c)c) Escreva uma função que receba um número e
 devolva um booleano indicando se ele é par ou não*/
 
 function numeroPar(numero1) {
     
 }


 //-----------------------------------------------------
 /*d)d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o
  tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.*/

 function mensagem ( string1){
    

 }
 
//=================================================================

//3.
//SOMA

function soma (primValor, segValor) {
    return primValor + segValor
    
}
console.log(soma(30,3))
//--------------------------------
//SUBTRAÇAO
function diferenca (valor1, valor2) {
    return valor1 - valor2
}
 console.log(diferenca(30,3))
 //--------------------------------
 //MULTIPLICACAO
 function multiplicacao (primeironumero, segundoNumero) {
     return primeironumero *segundoNumero
 }
console.log(multiplicacao(30, 3))
//--------------------------------------
//DIVISAO
function divisao (number1, number2) {
    return number1 / number2
}
console.log(divisao(30, 3))
//-------------------------------------------------

/*OBS: ESSA PARTE DE FUNÇAO, ME PEGOU UM POUCO, NAO CONSEGUI APRENDER DIREITO, MESMO COM OS COLEGAS
ME AJUDANDO, POR ISSO TEM ALGUMAS SEM FAZER. ESTOU REVENDO OS CONTEUDOS, PRA VER SE CONSIGO APRENDER MAIS*?


