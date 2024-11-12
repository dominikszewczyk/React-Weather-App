import PropTypes from 'prop-types'
import { useState } from 'react'

import Box from '../Box/Box'

import { convertCelsiusToFahrenhite } from '../../utils/convertTemperatures'

import './Current.style.scss'

export default function Current({ currentWeatherData }) {
    const [isFahrenhite, setIsFahrenhite] = useState(false);

    const temperatureUnit = isFahrenhite ? "F" : "C";
    const currentDate = `${currentWeatherData?.dt.getHours().toString().padStart(2, '0')}:${currentWeatherData?.dt.getMinutes().toString().padStart(2, '0')}`;
    const currentTemp = isFahrenhite ? convertCelsiusToFahrenhite(currentWeatherData?.main.temp) : currentWeatherData?.main.temp;
    const currentTempMin = isFahrenhite ? convertCelsiusToFahrenhite(currentWeatherData?.main.temp_min) : currentWeatherData?.main.temp_min;
    const currentTempMax = isFahrenhite ? convertCelsiusToFahrenhite(currentWeatherData?.main.temp_max) : currentWeatherData?.main.temp_max;
    const currentTempFeelsLike = isFahrenhite ? convertCelsiusToFahrenhite(currentWeatherData?.main.feels_like) : currentWeatherData?.main.feels_like;

    const toggleTemperatureUnit = () => {
        setIsFahrenhite(!isFahrenhite);
    };

    return (
        <Box className="weather__current">
            <div className="current__header">
                <div className="header__title">Current Weather</div>
                <div className="header__toggle" onClick={toggleTemperatureUnit}>
                    { isFahrenhite ? "Celsius" : "Fahrenheit" }
                </div>
            </div>
            <div className="current__time">{ currentDate }</div>
            <div className="current__content">
                <div className="content__icon">
                    <img src={`https://openweathermap.org/img/wn/${currentWeatherData?.weather[0].icon}@2x.png`} alt="Weather Icon" className="icon__img"/>
                    <span className="icon__temperature">
                        { currentTemp }°
                    </span>
                    <span className="icon__unit">{ temperatureUnit }</span>
                </div>
                <div className="current__details">
                    <div className="details__description">{ currentWeatherData?.weather[0].main }</div>
                    <div className="details__feels-like">{ currentWeatherData?.weather[0].description }</div>
                </div>
            </div>
            <div className="current__summary">
                There will be {currentWeatherData?.weather[0].description}. 
                The temperature will be between { currentTempMin }°{ temperatureUnit } and { currentTempMax }°{ temperatureUnit }.
                The feels temperature will be { currentTempFeelsLike }°{ temperatureUnit }.
            </div>
        </Box>
    )
}

Current.propTypes = {
    currentWeatherData: PropTypes.object
}