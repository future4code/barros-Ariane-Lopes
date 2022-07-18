import React from "react";
import { Login } from "../style";

function Etapa2 (){
    return(
        <Login>
            <h1> Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <form>
                <label> 5.Qual curso?</label>
                <input type="text"></input>
                <label> 6.Qual a unidade de ensino?</label>
                <input type="text"></input>
            </form>
        </Login>
    )
}

export default Etapa2;