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
    let triangulo
    if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        triangulo = "Escaleno"} 
    else if (ladoA === ladoB && ladoA !== ladoC && ladoB !== ladoC || ladoA === ladoC && ladoB !== 
        ladoC && ladoB !== ladoA || ladoB === ladoC && ladoA !== ladoC && ladoA !== ladoB ){
        triangulo  = "Isósceles"}
        else if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
            triangulo = "Equilátero"
        }
    return triangulo

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    function ordem(a, b){
        return(a-b)

    }
    array.sort(ordem)
    segundoMaior = array[array.length -2]
    segundoMenor = array[1]
    return[segundoMaior, segundoMenor]

  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const frase = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
    return frase
   
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaNova = {
        ...pessoa,
        nome: "ANÔNIMO",
    }   
    return pessoaNova
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const autorizadas = []
    for(let pessoa of pessoas) {
        if((pessoa.idade > 14 && pessoa.idade <60) && pessoa.altura >= 1.5){
            autorizadas.push(pessoa)
        }
    }
    return autorizadas
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizadas = []
    for( let pessoa of pessoas){
        if((pessoa.idade <= 14 || pessoa.idade >=60) || pessoa.altura <= 1.5){
            naoAutorizadas.push(pessoa)
        }
    }
    return naoAutorizadas
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
    for(let i = 0; i < contas.length; i++){
        let entradas =[];
        calculaSaldo(contas);
        function calculaSaldo(utilizador){
            utilizador[i].compras.forEach(nr => entradas.push(nr * -1));
            console.log(entradas);
        }
        function somaNumeros(numeros){
            return numeros.reduce((sum, nr) => sum + nr, 0);
        }
        contas[i].compras = []
        contas[i].saltoTotal += somaNumeros(entradas)
    }
    return contas
    

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => a.nome > b.nome ? 1 : a.nome < b.nome ? -1 :0)

  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   for(let i = 0; i < 3 ; i++){
       consultas.sort((a, b) => a.dataDaConsulta.split('/')[i] > b.dataDaConsulta.split('/')[i]? 1 : a.dataDaConsulta.split('/')[i]? -1 :0 )
   }
   return consultas
}
//(NAO CONSEGUI RODAR A 15B NO TEST)
//---------------------------------------------------

//---------------PROJETO FINAL-----------------------------