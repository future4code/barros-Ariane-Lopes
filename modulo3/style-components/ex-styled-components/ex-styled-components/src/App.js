import React, { useState } from "react";
import styled from "styled-components";
import labenu from "./img-styled/picture.png"

const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
font-size: 40px;
font-weight: 700;
img{
  width: 75px;
}
`


const SpanVazio = styled.div`
   background-color: orange;
   width: 80px;
   height: 100%;
   margin-right: 50px;
`
const Container = styled.div`
 background-color: white;
 display:flex;
 justify-content:space-between;
 width:99vw;
 height: 85vh;
 border: 1px solid black;
 margin: 0 auto;

`
const SpanLaranja = styled.div`
  background-color: orange;
  width: 80px;
  height: 100%;

`
const Dados = styled.div`
display: flex;
justify-content: flex-end;
margin-top:500px ;
width: 530px;


`
const InputNome = styled.input`
display: flex;
color: black;
height: 15px;
margin-right: 10px;
margin-left: 5px;
`
const InputMensagem = styled.input`
display: flex;
color: black;
height: 15px;
margin-right: 10px;
margin-left: 5px;
`
const Botao = styled.button`
background: #D3D3D3;
border-radius: 5px;
align-items: center;
height: 21px;

`
const Footer = styled.footer`
  text-align: center;
  background-color: gray;
`


function App() {
  return (
    <div>
      <Header>
      <img src={labenu} alt="logo-labenu"/>
      <span>LabZap</span>
      </Header>
      <Container>
        <SpanVazio></SpanVazio>

        <Dados>
          <label for="Remetente">Remetente:</label>
          <InputNome placehold =''></InputNome>
          <label for="Mensagem">Mensagem:</label>
          <InputMensagem placehold =''></InputMensagem>
          <Botao>Enviar Mensagem</Botao>
        </Dados>

        <SpanLaranja></SpanLaranja>

      </Container>


      <footer>
        <Footer>Copyringht 2022 Labenu All rights reservd. R Pais Leme, 215, Conjunto 820 Pinheiros Cep 05424-150</Footer>
      </footer>


      </div>
  )
  }

    
 
export default App;
