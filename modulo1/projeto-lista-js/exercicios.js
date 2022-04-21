// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Digite uma altura")
  const largura = prompt("Digite uma largura")

  const area = altura * largura 
  console.log(area)

}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Digite o ano atua")
  const anoNascimento = prompt("Digite o ano de nascimento")
  const idade = anoAtual - anoNascimento

  console.log(idade)

}
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite um nome")
  const idade = prompt("Digite uma idade")
  const email = prompt("Digite um email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite uma cor")
  const cor2 = prompt("Digite uma cor")
  const cor3 = prompt("Digite uma cor")

  let armazenamento = [cor1, cor2, cor3]
  console.log(armazenamento)
  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressos = custo / valorIngresso
  return ingressos


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  string1 = string1.length
  string2 = string2.length
  const comparacao = string1 === string2
  return comparacao

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const retorno = array[0]
  
  return retorno
  
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const retorno1 = array.length-1

  return retorno1

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.length
  string2 = string2.length
  const comparacao = string1 === string2
  return comparacao.toLowerCase()




}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}