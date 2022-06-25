import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import nome from './imgg/ari.jpg'
import labenu from './imgg/labeu.png'
import unip from './imgg/unip1-logo.png'
import githube from './imgg/git2.png'
import instagram from './imgg/insta.png'
import logo from './imgg/logo.png'
import email from './imgg/email.png'
import endereco from './imgg/locali.png'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={nome} 
          nome="Ariane Lopes de Camargo" 
          descricao="Olá, eu sou Ariane, formada em Arquitetura e Urbanismo, e atuo na área de Arte e Design. Sou estudante de Web Full Stack, e sou apaixonada por pets."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação</h2>
        <CardGrande 
          imagem={labenu}
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
          
        />
        
        <CardGrande 
          imagem={unip}
          nome="Unip" 
          descricao="Arquitetura e Urbanismo." 
        />

      </div>

      <div className="page-section-container">
        <h2>Experiência</h2>
        <CardGrande 
          imagem={logo} 
          nome="Manicure, Pedicure e Maquiadora." 
          descricao="Ariane Lopes | ARTE E DESIGN." 
        />

        <CardGrande 
          imagem={logo}
          nome="Desenhos e Pinturas em Aquarela." 
          descricao="Ariane Lopes | ARTE E DESIGN." 
        />

      </div>

      <div className="page-section-container">
        <h2> Contatos</h2>
        <CardPequeno
        imagem={email}
        nome="Email"
        descricao="arianee.lopees@hotmail.com"
        />
      </div>

      <div className="page-section-container">
        <h2> Contatos</h2>
        <CardPequeno
        imagem={endereco}
        nome="Endereço"
        descricao="Assis/SP"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem={githube}
          texto="GitHube" 
        />        
        <ImagemButton className="insta-botao"
          imagem={instagram}
          texto="Instagram" 
        />   


        
      </div>
    </div>
  );
}

export default App;
