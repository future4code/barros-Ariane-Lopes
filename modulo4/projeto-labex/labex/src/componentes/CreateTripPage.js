import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AdmListaViagens from "./AdminHomePage";
import LoginAdm from "./LoginPage";
import DetalhesViagens from "./TripDetailsPage";
import ListaViagens from "./ListTripsPage/ListTripsPage";
import InscricaoViagens from "./ApplicationFormPage";
import Home from "./HomePage";
import axios from 'axios';
import useVeriFyAuth from "./hook/useVerifyAuth";
import { useForm } from "./hook/useForm";
import { BASE_URL } from "../constants/constants";
import useGetDate from "./hook/useGetDate";
import { ApplyButton, ApplyFormContainer, ApplyInput, ApplyText } from "../styles";
import RenderPlanetsList from "../renderPlanetList/renderPlanetList";

export default function CriarViagem () {
    useVeriFyAuth()

    const [form, handleUserInput] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const navigate = useNavigate()

    const createTrip = (e) => {
        e.preventDefault()

        const token = window.localStorage.getItem('token')

        const heander = {
            headers: {
                auth: token
            }
        }
        const body = {
            "name": form.name,
            "planet": form.planet,
            "date": form.date,
            "description": form.description,
            "durationInDays": form.durationInDays
        }

        axios
            .post (`${BASE_URL}trips`, body, heander)
            .then((res) => {
                navigate('/criarviagens')
            })
            .catch((err) => {

            })
    }
    const dateToday =useGetDate()

    return (
        <div>
            <ApplyText>Criar Viagem</ApplyText>
            <ApplyFormContainer onSubmit={createTrip}>
                <ApplyInput
                    name='name'
                    placeholder="Digite o nome"
                    title='5 caracteres ou mais'
                    onChange={handleUserInput}
                    value={form.name}
                    pattern=".{5,}"
                    required
                    />
                    <RenderPlanetsList
                        value={form.planet}
                        handleUserInput={handleUserInput}
                    />
                    <ApplyInput 
                        name='date'
                        placeholder="Data"
                        type='date'
                        min={dateToday}
                        onChange={handleUserInput}
                        value={form.date}
                        required
                    />
                    <ApplyInput
                    name='description'
                    placeholder="Descrição"
                    title="30 caracteres ou mais"
                    pattern=".{30,}"
                    onChange={handleUserInput}
                    value={form.description}
                    required
                />
                <ApplyInput
                    name='durationInDays'
                    type='number'
                    placeholder="Duração (em dias)"
                    min='50'
                    onChange={handleUserInput}
                    value={form.durationInDays}
                    required
                />
                <ApplyButton>Salvar</ApplyButton>
             </ApplyFormContainer>

        </div>
    )

}