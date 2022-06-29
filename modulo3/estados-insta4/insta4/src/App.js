import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

          <Post
            nomeUsuario={'Luiz Rafhael'}
            fotoUsuario={'https://picsum.photos/51/52'}
            fotoPost={'https://picsum.photos/250/180'}
          />

          <Post
            nomeUsuario={'Ariane'}
            fotoUsuario={'https://picsum.photos/70/50'}
            fotoPost={'https://picsum.photos/100/150'}
          />

          <Post
            nomeUsuario={'Benedito'}
            fotoUsuario={'https://picsum.photos/100/50'}
            fotoPost={'https://picsum.photos/300/150'}
          />
  </div>

  
)

}


export default App;
