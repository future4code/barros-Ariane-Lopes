//------EXERCICIO DE INTERPRETAÇÃO DE CODIGO------

//1.
/*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)*/
//RESP. AQUI VAI SER IMPRESSO ATÉ CHEGAR NO 5(UM POR UM), APOS ISSO, ELE PARA DE IMPRMIR AUTOMATICAMENTO
//----------------------------------------------------------------------------------
//2.
/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}*/
//RESP.ELE VAI IMPRIMIR NO CONSOLE TODOS OS NUMEROS ACIMA DE 18.
//B) ======
//-----------------------------------------------------------------------------------

//3.
/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}*/
//RESP. CADA LINHA VAI AUMENTANDO OS '*'.

//-------EXERCICIO DE ESCRITA DE CODIGO -------
/*1.Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
/a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, 
e guarde esses nomes em um array*/



/*let bichinhosDeEstimacao = Number(prompt("Quantos bichinhos vc tem?"))
let nomebichinhos = []
    if(bichinhosDeEstimacao === 0){
        console.log("Que pena! Você pode adotar um pet!")
    } else{
        for(let i=0 ; i < bichinhosDeEstimacao ; i++){
            let nome = prompt("Qual o nome dos seus bichinhos")
            nomebichinhos.push(nome)

        }
        console.log(nomebichinhos)


    }

    ===========================================================================
 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números.
 Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

    
/*let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
--------------------------------------------------------------------------

/*a) Escreva um programa que **imprime** cada um dos valores do array original.

for (valor of arrayOriginal){
    console.log(valor)

}
------------------------------------------------------------------------------------------
//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
for (valor of arrayOriginal){
    let divisao = valor / 10
    console.log(divisao)

}
---------------------------------------------------------------------------------------------
//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array


for (valor of arrayOriginal){
    if ((valor % 2)==0){
        novoArray = [... arrayOriginal]

    }
} 
console.log(novoArray)
--------------------------------------------------------------------------------------------------
//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.


for (let i = 0; i < arrayOriginal.length; i++){
    console.log(`O elemento do index ${i} é: ${arrayOriginal[i]}`
    )
}
----------------------------------------------------------------------------------
//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

let maior = 0
let menor = arrayOriginal[0]

for(numero of arrayOriginal){
    if(numero > maior){
        maior = numero
    }else if (numero < menor)
    menor = numero 

}
console.log(maior)
console.log(menor)*/

