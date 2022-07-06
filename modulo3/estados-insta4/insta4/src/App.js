import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
  const listaPost = [
    {nomeUsuario:'paulinha', fotoUsuario:'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/150'},
    {nomeUsuario:'Luiz Rafhael', fotoUsuario:'https://picsum.photos/51/52', fotoPost:'https://picsum.photos/250/180'},
    {nomeUsuario:'Ariane', fotoUsuario:'https://picsum.photos/70/50', fotoPost:'https://picsum.photos/100/150'},
    {nomeUsuario:'Benedito', fotoUsuario:'https://picsum.photos/100/50', fotoPost:'https://picsum.photos/300/150'},
  ]

  const listaInformcoes = listaPost.map((elemento, index)=>{
    return <Post nomeUsuario={elemento.nomeUsuario}
    fotoUsuario={elemento.fotoUsuario}
    fotoPost={elemento.fotoPost}
    key={index} />
  })

  return(
    <div className='MaiContainer'>
      {listaInformcoes}
      {console.log(listaPost)}
    </div>
  )}
export default App;
