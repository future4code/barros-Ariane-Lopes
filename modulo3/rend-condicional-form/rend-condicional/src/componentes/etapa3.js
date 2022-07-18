import React from "react";
import { Login } from "../style";

function Etapa3 (){
    return(
        <Login>
            <h1> Etapa 3 - INFORMAÇÕES GERAIS DO ENSINO </h1>
            <form>
                <label> 5.Por qe você não terminou um curso de graduacão?</label>
                <input type="text"></input>
                <label> 6.Você fez algum curso complementar?</label>
                <select name="curso">
                    <option value="">Nenhum</option>
                    <option value="1">Sim</option>
                </select>
            </form>
        </Login>
    )
}