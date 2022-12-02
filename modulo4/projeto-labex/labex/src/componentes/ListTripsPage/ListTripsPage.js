import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import CriarViagem from "../CreateTripPage";
import LoginAdm from "../LoginPage";
import DetalhesViagens from "../TripDetailsPage";
import AdmListaViagens from "../AdminHomePage";
import InscricaoViagens from "../ApplicationFormPage";
import Home from "../HomePage";
import axios from 'axios';
import styled from "styled-components";
import useGetTrips from "../hook/UseGetTrips";
import { BASE_URL } from "../../constants/constants";
import Loading from "../../loading/loading";
import { TripCardsContainer, TripClick, TripListHeader, TripsCardRender, TripsDesc } from "./style";



export default function ListaViagens() {
    const navigate = useNavigate()

    const goToApplyPage = () => {
        navigate = ('/inscricaoviagens')
    }
    const trips = useGetTrips()

    const renderTrips = trips.map((trip) =>{
        return <TripCardsContainer key={trip.id}>
            <h3>{trip.name}</h3>
           <p>Descrição:{trip.description}</p>
            <p>Data:{trip.date}</p>
            <p>Duração: {trip.durationInDays} dias</p>
            <p>Planeta: {trip.planet}</p>
        </TripCardsContainer>
    })

    return (
        <div>

            <TripsCardRender>
                {renderTrips}
            </TripsCardRender>
            <TripListHeader>
                <TripClick onClick={goToApplyPage}>Escolher Viagem</TripClick>
            </TripListHeader>
        </div>
    )
}