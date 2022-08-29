import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CriarViagem from "./CreateTripPage";
import LoginAdm from "./LoginPage";
import AdmListaViagens from "./AdminHomePage";
import DetalhesViagens from "./TripDetailsPage";
import ListaViagens from "./ListTripsPage/ListTripsPage";
import InscricaoViagens from "./ApplicationFormPage";
import Home from "./HomePage";
import axios from 'axios';

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={ <Home/>} />
            <Route path="/criarviagens" element={ <CriarViagem/>} /> 
            <Route path="/loginadm" element={ <LoginAdm/>}/>
            <Route path="/admlistaviagens" element={ <AdmListaViagens/>} />
            <Route path="/detalhes" element={ <DetalhesViagens/>} />
            <Route path="/lista-viagens" element={ <ListaViagens/>} />
            <Route path="/inscricaoviagens" element={ <InscricaoViagens/>} />
        </Routes> 
        </BrowserRouter>
    );
}

export default Router;