


//--- EXERCICIOS DE INTERPRETAÇÃO DE CODIGO
//A)
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*//


//a) O que vai ser impresso no console?
/*RESP: Vai aparecer no console
console1-primeiro elemento do elenco.
console2- retorna o ultimo elemento da array(elenco)
console3-terceiro elemento da array de transmissoesHoje.
================================================================
2.
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a) O que vai ser impresso no console?*/
/*RESP:
console1-vai ser o objeto como esta acima.(cachorro)
console2-aqui vai ser os mesmo itens do cachorro, mudando apenas o nome.
console3-vai ser o mesmo item dos demais, mais o nome vai ser o do gato, trocando o 'a' pelo 'o'(jubo)
----------------------------------------------------------------*/

/*b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
RESP:Ela adiciona os demais item do objeto, ou pode troca-los.7
======================================================================*/

//3.
/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)


"tentei e nao consegui responder essa questao"



=================================================================================


//--- EXERCICIOS DE ESCRITA DE CODIGO
//1.A)
/* Crie um objeto. Ele deve conter duas propriedades: nome (string) e 
apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva
 uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:*/

/*const pessoa = {
    nome: "Ariane",
    apelido: ["Ari" , "Ari de Lopes" , "Ri"],
    
}
/*function receberObjeto() {
    let frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}`
    return frase

}
console.log(receberObjeto())*/


//-------------------------------------------------------------------------------------------
//b)
/* Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
mas com uma nova lista de três
 apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto:*/

 /*const novaPessoa = {
     ...pessoa,
     apelidosNovos:["lindinha", "fofinha", "Tia Ariane"],

 }
 console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidosNovos[0]}, ${novaPessoa.apelidosNovos[1]} ou ${novaPessoa.apelidosNovos[2]}`)
//====================================================================================




//2.a)a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.*/

/*const pessoa1 = {
    nome: "Ariane",
    idade: 27,
    profissao: "Manicure"

}
const pessoa2 = {
    nome: "Luiz Rafhael",
    idade: 34,
    profissao: "Promotor de vendas",

}
//--------------------------------------------------
//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

function meusObjetos(pessoa1, pessoa2){
    return [pessoa1, pessoa2]

}
console.log(pessoa1.nome)
console.log(pessoa1.nome.length)
console.log(pessoa1.idade)
console.log(pessoa1.profissao)
console.log(pessoa1.profissao.length)
console.log(pessoa2.nome)
console.log(pessoa2.nome.length)
console.log(pessoa2.idade)
console.log(pessoa2.profissao)
console.log(pessoa2.profissao.length)
//============================================================



//3.
//a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

const carrinho = []


/*b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
nome (string) e disponibilidade (boolean - devem começar como true)

let frutas1 = {
    nome: "banana",
    disponibilidade: true,


}
let frutas2 = {
    nome: "morango",
    disponibilidade: true,
}
let frutas3 = {
    nome: "abacate",
    disponibilidade: true,
}

/*c)Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. 
Invoque essa função passando os três objetos criados. 

function sacolão(fruta){
    carrinho.push(fruta)


}
sacolão(frutas1)
sacolão(frutas2)
sacolão(frutas3)
//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

console.log(carrinho)
