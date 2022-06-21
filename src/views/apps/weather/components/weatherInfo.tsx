import React from "react";
const WeatherInfoComponent = (props) => {
    const { name, value } = props;


    const WeatherInfoIcons = {
        sunset: <img src="https://img.icons8.com/fluency/48/000000/sunset.png" />,
        sunrise: <img src="https://img.icons8.com/fluency/48/000000/sunrise.png" />,
        humidity: <img src="https://img.icons8.com/fluency/48/000000/hygrometer.png" />,
        wind: <img src="https://img.icons8.com/fluency/48/000000/wind.png" />,
        pressure: <img src="https://img.icons8.com/fluency/48/000000/atmospheric-pressure.png" />
    }


    return (
        <div className='infoContainer'>
            <div className='infoIcon' role={"icon"}>
                {WeatherInfoIcons[name]}
            </div>
            <span className='infoLabel'>
                {value}
                <span>{name}</span>
            </span>
        </div>
    );
}
export default WeatherInfoComponent