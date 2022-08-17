import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();


    const listaViagens = () => {
        navigate("/lista-viagens")
       
    }

    const administrativo = ()=> {
        navigate("/loginadm")
    }
    
    return(
        <section>
        <h1>Seja Bem vindo(a) LABEX!</h1>
        <button onClick={administrativo}>ADMINISTRATIVO</button>
        <button onClick={listaViagens}>LISTA DE VIAGENS</button>

       </section>
    )
}

export default Home;