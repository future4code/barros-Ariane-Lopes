import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CriarViagem from "./CreateTripPage";
import LoginAdm from "./LoginPage";
import AdmListaViagens from "./AdminHomePage";
import DetalhesViagens from "./TripDetailsPage";
import InscricaoViagens from "./ApplicationFormPage";
import Home from "./HomePage";

function ListaViagens () {
    return (
        <h1>ListaViagens</h1>
    )
}

export default ListaViagens;