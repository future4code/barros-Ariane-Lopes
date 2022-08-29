import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

const useGetTrips=()=>{
    const [trips, setTrips] = useState([])
    const [Loading, setLoading] = useState(false)
    


    useEffect(() => {
        axios.get(`${BASE_URL}trips`).then(response =>{
            setTrips(response.data.trips)
            setLoading(true)
        }).catch((e)=>{
            
        })
    }, [])
    return {
        trips
    }

};
export default useGetTrips;
