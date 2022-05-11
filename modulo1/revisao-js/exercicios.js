// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const primeiro = array.length

    return primeiro

}

console.log(retornaTamanhoArray)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const inverter = array.reverse();
    return inverter
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const numeros = array
    return numeros.sort((a,b) => a-b)

  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numPares = array
    return numPares.filter((array)=>(array %2) ===0)


}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const novoArray = []
    const pares = array.filter((array) => (array % 2 ===0))
    for (numero of pares){
        const paresElevados = numero * numero
        
    novoArray.push(paresElevados)}
    return novoArray

 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array)

  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numero
    let diferenca
    let modulo 
    if (num1 > num2){
        numero = num1
        diferenca = num1 - num2
        modulo = num1 % num2 ===0
    
    }else{
        numero = num2
        diferenca = num2 - num1
        modulo = num2 % num1 ===0

    }
    doisNumeros = {
        maiorNumero: numero,
        maiorDivisivelPorMenor: modulo,
        diferenca: diferenca,
    }
return doisNumeros

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; numerosPares.length < n; i++){
        if (i % 2 ===0){
            numerosPares.push(i)
        }
    }
    return numerosPares
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}