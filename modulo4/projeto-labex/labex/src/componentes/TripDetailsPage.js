import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate, useParams } from "react-router-dom";
import CriarViagem from "./CreateTripPage";
import LoginAdm from "./LoginPage";
import AdmListaViagens from "./AdminHomePage";
import ListaViagens from "./ListTripsPage/ListTripsPage";
import InscricaoViagens from "./ApplicationFormPage";
import Home from "./HomePage";
import axios from 'axios';
import useVeriFyAuth from "./hook/useVerifyAuth";
import { BASE_URL } from "../constants/constants";
import { TripCardsContainer, TripClick, TripsCardRender, TripsDesc } from "./ListTripsPage/style";
import { ApplyButton } from "../styles";

const DetalhesViagens = () => {
    useVeriFyAuth()
    const tripId = useParams().id

    const navigate = useNavigate()
    const goBackPage = () => {
        navigate = (-1)
    }
    const token = window.localStorage.getItem('token')

    const header = {
        headers: {
            auth: token

        }
    }

    const [tripDetails, setTripDetails] = useState ({})
    const [candidateDetails, setCandidateDetails] = useState([])
    const [approvedDetails, setApprovedDetails] = useState([])
    const [update, setUpdate] = useState(true)

    useEffect(() => {
        axios
            .get(`${BASE_URL}trip/` , header)
            .then(res => {
                setTripDetails (res.data.trip)
                setCandidateDetails (res.data.trip.candidates)
                setApprovedDetails(res.data.trip.approved)

                setUpdate(false)
            })
            .catch(err =>{

            })
    }, [update])

    const handleUpdate = () => {
        setUpdate(true)
    }
    const approveCandidate = (e) => {
        const candidateId = e.target.name
        handleUpdate()

        decideCandidate(true, candidateId)
    }
    const refuseCandidate = (e) => {
        const candidateId = e.target.name
        handleUpdate()

        decideCandidate(false, candidateId)
    }

    const decideCandidate = (approve, id) => {
        const body = {
            'approve':approve
        }
        axios
            .put(`${BASE_URL}trips/${tripId}/candidates/${id}/decide` , body, header)
            .then((res) => {

            })
            .catch((err) => {

            })
    }
    return (
        <div>
            <TripClick onClick={goBackPage}>Voltar</TripClick>
            <TripsCardRender>
                <TripCardsContainer>
                    <h2>Viagem</h2>
                    <p>Nome: {tripDetails.name}</p>
                    <TripsDesc>Descrição: {tripDetails.description}</TripsDesc>
                    <p>Data: {tripDetails.date}</p>
                    <p>Duração: {tripDetails.durationInDays}</p>
                    <p>Id: {tripDetails.id}</p>
                    <p>Planeta: {tripDetails.planet}</p>
                </TripCardsContainer>
                {candidateDetails.map((candidate) => {
                    return <TripCardsContainer key={candidate.id}>
                        <h2>Candidato</h2>
                        <h4>Nome: {candidate.name}</h4>
                        <p>Idade: {candidate.age}</p>
                        <TripsDesc>Descrição: {candidate.applicationText}</TripsDesc>
                        <p>Profissão: {candidate.profession}</p>
                        <p>Id: {candidate.id}</p>
                        <ApplyButton value={true}
                            name={candidate.id}
                            onClick={approveCandidate}
                        >Aprovar</ApplyButton>
                        <ApplyButton
                            value={false}
                            name={candidate.id}
                            onClick={refuseCandidate}
                        >Rejeitar</ApplyButton>
                    </TripCardsContainer>
                })}
                <TripCardsContainer><h2>Aprovados</h2>
                    {approvedDetails.map((approved) => {
                        return <div key={approved.id}>
                            <p>{approved.name}</p>
                        </div>
                    })}</TripCardsContainer>
            </TripsCardRender>


        </div>
    )
}

export default DetalhesViagens;