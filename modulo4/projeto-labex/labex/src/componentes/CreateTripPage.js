import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginAdm from "./LoginPage";
import AdmListaViagens from "./AdminHomePage";
import DetalhesViagens from "./TripDetailsPage";
import ListaViagens from "./ListTripsPage";
import InscricaoViagens from "./ApplicationFormPage";
import Home from "./HomePage";


function CriarViagem () {
    return (
        <h1>CriarViagem</h1>
    )
}

export default CriarViagem;