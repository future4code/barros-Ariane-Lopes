import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import CriarViagem from "./CreateTripPage";
import AdmListaViagens from "./AdminHomePage";
import DetalhesViagens from "./TripDetailsPage";
import ListaViagens from "./ListTripsPage/ListTripsPage";
import InscricaoViagens from "./ApplicationFormPage";
import Home from "./HomePage";
import axios from 'axios';
import { BASE_URL } from "../constants/constants";
import { useForm } from "./hook/useForm";
import { ApplyButton, ApplyFormContainer, ApplyInput, ApplyText } from "../styles";


const LoginAdm = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if(token !== null) {
            navigate("/admlistaviagens")
        }
    }, []) 

    const [form, handleUserInput] = useForm({
        email: '',
        password:'',
    })

    const goToadmHomePage = () => {
        navigate ("/admlistaviagens")
    }
    const login = (e) => {
        e.preventDefault()

        const body = {
            'email': form.email,
            'password':form.password,
        }
        axios
            .post(`${BASE_URL}/login`, body)
            .then(res =>{
                window.localStorage.setItem('token',res.data.token)
                goToadmHomePage()
            })
            .catch((err) => {

            })
    
    }
    return (
        <div>
            <ApplyText>Login</ApplyText>
            <ApplyFormContainer onSubmit={login}>
            <ApplyInput placeholder="E-mail"
                onChange={handleUserInput}
                name='email'
                type='email'
                value={form.email}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
            
            <ApplyInput placeholder="Senha"
            onChange={handleUserInput}
            name='password'
            type='password'
            value={form.password}
            required
            pattern="^.{6}"
            />

            <ApplyButton>Entrar</ApplyButton>
            </ApplyFormContainer>
        </div>
    )


}

export default LoginAdm;




