import WeatherInfoComponent from "./weatherInfo";
import React from "react";
import { application, useAppDispatch, useAppSelector } from "../../../../redux/store";
import Button from "../../../components/customButton";
import { delSessionStorage } from "../../../../functions/sessionStorage";
import { useNavigate } from "react-router-dom";
import { LogoutType } from "../../login/store/actions";

const WeatherComponent = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const weather = useAppSelector((state) => state.weatherSlice.weather)
    const logout = () => {
        dispatch({ type: LogoutType().type })
        delSessionStorage("apikey")
        navigate("/")
    }
    return (
        <div className='weatherComponent w-72 sm:w-full' role="card">

            {weather ?
                <>
                    <div className='weatherCondition'>
                        <span className='condition' ><span className="flex flex-wrap">
                            {weather?.main?.feels_like} °C
                        </span> {weather?.weather[0].description.toUpperCase()} </span>
                        <img
                            className='mx-auto weatherLogo '
                            src={`${application.img}/img/wn/${weather?.weather?.[0]?.icon}@2x.png`} />
                    </div>
                    <span className='location'>{weather?.name}</span>
                    <span className='weatherInfoLabel'>Hava Durumu</span>
                    <div className='weatherInfoContainer'>
                        <WeatherInfoComponent name='humidity' value={weather?.main.humidity} />
                        <WeatherInfoComponent name='wind' value={weather?.wind.speed} />
                        <WeatherInfoComponent name='pressure' value={weather?.main.humidity} />
                    </div>

                </>
                : ""}
            <div className='text-right mt-2'>
                <Button
                    className='bg-red-500 text-white'
                    text='Çıkış'
                    onClick={() => logout()}
                />
            </div>
        </div>
    );
}
export default WeatherComponent

