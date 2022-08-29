import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import CriarViagem from "./CreateTripPage";
import LoginAdm from "./LoginPage";
import DetalhesViagens from "./TripDetailsPage";
import ListaViagens from "./ListTripsPage/ListTripsPage";
import InscricaoViagens from "./ApplicationFormPage";
import Home from "./HomePage";
import axios from 'axios';
import useVeriFyAuth from "./hook/useVerifyAuth";
import { BASE_URL } from "../constants/constants";
import { TripCardsContainer, TripClick, TripListHeader, TripsCardRender, TripsDesc } from "./ListTripsPage/style";
import { ApplyButton } from "../styles";

export default function AdmListaViagens () {
    useVeriFyAuth()

    const navigate = useNavigate()
    const [trips, setTrips] = useState([])
    const [update, setUpdate] = useState (true)

    useEffect(() => {
        axios
            .get(`${BASE_URL}trips`)
            .then((res) => {
                setTrips(res.data.trips)
                
                setUpdate(false)
            })
            .catch((e) => {

            })
    }, [update])

    const handleUpdate = () => {
        setUpdate(true)
    }
    const goBackHome = () => {
        navigate('/')
    }
    const goToCreateTripPage = () => {
        navigate('/admlistaviagens')
    }
    const goToTripDetailsPage = (e) => {
        const tripId = e.target.value

        navigate(`/admlistaviagens/${tripId}`)
    }
    const useLogout = () => {
        window.localStorage.removeItem('token')
        navigate('/')
    }
    const deleteTrip = (e) =>{
        const tripId = e.target.value
        const token = window.localStorage.getItem('token')

        const header = {
            headers: {
                auth: token
            }
        }

        axios
            .delete(`${BASE_URL}trips/${tripId}`, header)
            .then((res) => {
                handleUpdate()
            })
            .catch((err) => {
            })
    }
    const renderTripsButton = trips
        .map((trip) => {
            return <TripCardsContainer key={trip.id}>
                <h3>{trip.name}</h3>
                <TripsDesc>Descrição: {trip.description}</TripsDesc>
                <p>Data: {trip.date}</p>
                <p>Duração: {TripCardsContainer.durarionInDays} dias</p>
                <p>Planeta: {trip.planet}</p>
                <ApplyButton value={trip.id} onClick={goToTripDetailsPage}>Selecionar</ApplyButton>
                <ApplyButton onClick={deleteTrip} value={trip.id}>Remover</ApplyButton>
            </TripCardsContainer>
        }) 
    
    return (
        <div>
            <TripListHeader>
                <TripClick onClick={goBackHome}>Voltar</TripClick>
                <TripClick onClick={goToCreateTripPage}>CriarViagem</TripClick>
                <TripClick onClick={useLogout}>Logout</TripClick>
            </TripListHeader>
            <TripsCardRender>
                {renderTripsButton}
            </TripsCardRender>
        </div>
    )
}
