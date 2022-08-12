import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CriarViagem from "./CreateTripPage";
import Home from "./HomePage";

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={ <Home/>} />
            <Route path="/criarviagens" element={ <CriarViagem/>} />
        </Routes> 
        </BrowserRouter>
    );
}

export default Router;