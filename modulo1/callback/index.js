//---------Exercícios de interpretação de código-------------
//1.
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })*/

//RESP. ELE VAI LER TODOS OS ITENS E CATEGORIAS(TUDO) DA MINHA ARRAY.

//==========================================================================

//2.
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)*/

  //RESP. VAI ME RETORNAR APENAS O NOME DA MINHA NOVA ARRAY.

  //=========================================================================

  //3.
  /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

  RESP. VAI ME RETORNAR, A TODOS OS APELIDOS, MENOS O CHIJO(!==(DIFERENTE))
  */

//----------Exercícios de escrita de código------------------

/*2.Dado o seguinte array de produtos, realize as operações 
pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//======================================================================================

 /*a) Crie um novo array que contenha apenas o nome de cada item

 const nomeDoProduto = produtos.map((produtos) => {
     console.log(produtos)
 }) 
//=======================================================================================

/*b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos 
eles

const nomeItem = produtos.map((produtos)=>{
    return {nome:produtos.nome, preco:(produtos.preco - (produtos.preco / 20)).toFixed(2)}
})
console.log(nomeItem)

//==========================================================================================


/*c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const filtrarProdutos = produtos.filter((produtos)=>{
    if(produtos.categoria === 'Bebidas'){
        console.log(produtos)

    }
})
//===========================================================================================

/*d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê

const produtosFiltradosYpe = produtos.filter((produtos)=>{
    return produtos.nome.includes("Ypê")
})
 
console.log(produtosFiltradosYpe)
//==============================================================================================

/*e) Crie um novo array onde cada item é uma frase "Compre [NOME]
 por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"


let ype = produtos.filter(produtos => produtos.nome.includes("Ypê")).map(produtos => `Compre ${produtos.nome} po ${produtos.preco}`)
console.log(ype)*/

