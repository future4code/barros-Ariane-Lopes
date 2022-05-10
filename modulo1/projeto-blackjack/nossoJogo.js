/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//============================================================
    console.log("Boas vindas ao jogo de Blackjack!")
    let jogo = confirm("Quer iniciar uma nova rodada?")

    if (jogo){
       let usuarioCarta1 = comprarCarta()
       let usuarioCarta2 = comprarCarta()
       let pcCarta1 = comprarCarta()
       let pcCarta2 = comprarCarta()

       let usuarioPontuacao = usuarioCarta1.valor + usuarioCarta2.valor
       let pcPontuacao = pcCarta1.valor + pcCarta2.valor
       
       console.log(`Usuario - cartas: ${usuarioCarta1.texto} ${usuarioCarta2.texto} - ${usuarioPontuacao}`)
       console.log(`Computador - cartas: ${pcCarta1.texto} ${pcCarta2.texto} - ${pcPontuacao}`)

       if( usuarioPontuacao > pcPontuacao) {
          console.log("O usuario ganhou!")
       } else if (pcPontuacao > usuarioPontuacao) {
          console.log("O computador ganhou!")

       } else if ( usuarioPontuacao === pcPontuacao){
          console.log("Empate!!")

       }

    }else{
       console.log("O jogo acabou")

    }


    