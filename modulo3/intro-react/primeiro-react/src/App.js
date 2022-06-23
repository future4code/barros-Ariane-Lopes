import imagem from './ari.png.jpg';
import './App.css';

function App() {
  function mensagem(){
    alert("Boa noite!!!!")
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem vindo!! Meu nome é Ariane!!</h1>
        <img src={imagem} className="Ari" alt="ari.imagem" />
        <p>
          Este é o meu primeiro REACT!
        </p>
        <button onClick={mensagem}>Clique aqui</button>
      
      
      </header>
    </div>
  );
}

export default App;
