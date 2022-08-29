import React from "react";
import Router from "./componentes/Router";
import axios from 'axios'
import { BASE_URL } from "./constants/constants";
import UseGetTrips from "./componentes/hook/UseGetTrips";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    document.title = "Labex"
  })
  return(
    <Router/>
  )

}

export default App;