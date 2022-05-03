//----EXERCICIOS DE ESCRITA DE CODIGO-----

//1.

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

RESP. Vai pedir para o usuario digitar um numero p ele testar, saber o resto d divisao de 2. Caso de nº par, vai dar 'ok', caso nº par "off".

================================================================================================================
2.let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) 


a) RESP. O codigo serve p/ separar por categoria oq o cliente esta escolhendo.
b) maçã 2,25
c) ele iria imprimir 5, por nao estar correto

=======================================================================================

3.const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


/*a)RESP. Pedindo para o usuario um numero.
b)Iria passar no teste por ser maior que 0. caso fosse -10 daria indefinido.
c) ----------------


//----EXERCICIOS DE ESCRITA DE CODIGO-----

/*1.1. Faça um programa que pergunta ao usuário qual a idade dele e 
imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.*/

/*c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."


let idade = Number(prompt("Qual a sua idade?"))
if (idade > 18){
    console.log("Voce pode dirigir")
}else {
    console.log("Voce não pode dirigir")

}
=========================================================================

2.*/
/*
let horarioDoEstudo = prompt("Digite M(matutino), V(vespentino, N(noturno)")
if (horarioDoEstudo === "M") {
    console.log("Bom dia")
}else if (horarioDoEstudo === "V") {
    console.log("Boa tarde")
}else if (horarioDoEstudo === "N") {
    console.log("Boa noite")
}else{

}

==========================================================================

3. */

/*let novoHorarioEstudo = prompt("Digite M(matutino), V(vespentino, N(noturno)")
switch (novoHorarioEstudo) {
   case "M" :
       console.log("Bom dia")
       break;
       case "V" :
           console.log("Boa tarde")
           break;
           case "N" :
               console.log("Boa noite")
               break;
               default:
                   console.log("Não estuda nunca")

}

====================================================================================

4.
Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá 
a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais.
 Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do 
 ingresso, então verifique se seu amigo ou amiga vai topar assistir o 
filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(" */

/*let filme1 = prompt("Qual é o genero do filme?")
let valor = prompt("Qual o valor do ingresso?")

if (filme1 === "fantasia" && valor < 15) {
    console.log("Bom filme")
}else{
    console.log("Escolha outro filme")

} */  