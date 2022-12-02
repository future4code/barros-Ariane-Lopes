import React from "react";
import { useNavigate } from "react-router-dom";
import CriarViagem from "./CreateTripPage";
import LoginAdm from "./LoginPage";
import DetalhesViagens from "./TripDetailsPage";
import ListaViagens from "./ListTripsPage/ListTripsPage";
import InscricaoViagens from "./ApplicationFormPage";
import AdmListaViagens from "./AdminHomePage";
import axios from 'axios';
import { HomeText, MainHomeButtonContainer, MainHomeButtons, MainHomeContainer } from "../styles";

function Home() {
    const navigate = useNavigate();


    const listaViagens = () => {
        navigate("/lista-viagens")
       
    }

    const administrativo = ()=> {
        navigate("/loginadm")
    }
    
    return(
        <MainHomeContainer>
        <HomeText>Seja Bem vindo(a) LABEX!</HomeText> 
        <MainHomeButtonContainer>
            <MainHomeButtons onClick={administrativo}>ADMINISTRATIVO</MainHomeButtons>
        <MainHomeButtons onClick={listaViagens}>LISTA DE VIAGENS</MainHomeButtons>
        </MainHomeButtonContainer>
        </MainHomeContainer>

       
    )
}

export default Home;