import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CriarViagem from "./CreateTripPage";
import LoginAdm from "./LoginPage";
import DetalhesViagens from "./TripDetailsPage";
import ListaViagens from "./ListTripsPage";
import InscricaoViagens from "./ApplicationFormPage";
import Home from "./HomePage";


function AdmListaViagens () {
    return (
        <h1>AdmListaViagens</h1>
    )
}

export default AdmListaViagens;