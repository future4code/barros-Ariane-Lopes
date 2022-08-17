import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CriarViagem from "./CreateTripPage";
import LoginAdm from "./LoginPage";
import AdmListaViagens from "./AdminHomePage";
import ListaViagens from "./ListTripsPage";
import InscricaoViagens from "./ApplicationFormPage";
import Home from "./HomePage";


function DetalhesViagens () {
    return (
        <h1>DetalhesViagens</h1>
    )
}

export default DetalhesViagens;