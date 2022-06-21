import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSessionStorage } from "../../../functions/sessionStorage";
import { useAppDispatch } from "../../../redux/store";
import { cities } from "../../../utils/cities";
import CustomSelect from "../../components/customSelect";
import { GetWeather } from "../weather/store/actions";
import Search from "./components/search";
import WeatherComponent from "./components/weather";

const Index = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const getWeatherHandler = (e: string | number) => {
        dispatch({ type: GetWeather().type, payload: e })
    }
    useEffect(() => {
        if (getSessionStorage("apikey") === null) {
            navigate("/")
        }
    }, [getSessionStorage("apikey")])
    return (
        <div className='container'>
            <Search />
            <WeatherComponent />
        </div>
    );
}
export default Index