import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import CriarViagem from "./CreateTripPage";
import LoginAdm from "./LoginPage";
import DetalhesViagens from "./TripDetailsPage";
import ListaViagens from "./ListTripsPage/ListTripsPage";
import AdmListaViagens from "./AdminHomePage";
import Home from "./HomePage";
import axios from 'axios';
import useGetTrips from "./hook/UseGetTrips";
import { useForm } from "./hook/useForm";
import { BASE_URL } from "../constants/constants";
import RenderCountriesList from "../renderCountriesList/renderCountriesList";
import styled from "styled-components";

export function InscricaoViagens() {
    const [ body, onChange, clear] =  useForm({name:"", age:"", applicationText:"", profession:"",country:"", trip:""})

    const inscricao = (event) => {
        event.preventDefaut()
        axios.post(`${BASE_URL}trips/:id/apply` , body).
        then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log("deu erro")
        })
        clear();
    }

    return (
        <div>
            <h1>Faça a sua inscrição</h1>
            <form onSubmit={inscricao}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Name"
                    value={body.name}
                    required
                    onChange={onChange}
                    pattern=""
                    />

                <label htmlFor="age">Age:</label>
                <input
                    id="age"
                    name="age"
                    type="age"
                    placeholder="age"
                    value={body.age}
                    required
                    onChange={onChange}
                    pattern=""
                    />

                <label htmlFor="applicationText">ApplicationText:</label>
                <input
                    id="applicationText"
                    name="applicationText"
                    type="applicationText"
                    placeholder="applicationText"
                    value={body.applicationText}
                    required
                    onChange={onChange}
                    pattern=""
                    />

                <label htmlFor="profession">Profession:</label>
                <input
                    id="profession"
                    name="profession"
                    type="profession"
                    placeholder="profession"
                    value={body.profession}
                    required
                    onChange={onChange}
                    pattern=""
                    />

                <label htmlFor="country">Country:</label>
                <input
                    id="country"
                    name="country"
                    type="country"
                    placeholder="country"
                    value={body.country}
                    required
                    onChange={onChange}
                    pattern=""
                    />

                <label htmlFor="trip">Trip:</label>
                <input
                    id="trip"
                    name="trip"
                    type="trip"
                    placeholder="trip"
                    value={body.trip}
                    required
                    onChange={onChange}
                    pattern=""
                    />
                    <button> Concluido</button>
                

            </form>
        </div>
    )
}

export default InscricaoViagens;