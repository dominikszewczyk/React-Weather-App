import Navbar from '../Navbar/Navbar'
import Current from '../Current/Current'
import Details from '../Details/Details'
import Summary from '../Summary/Summary'
import Forecast from '../Forecast/Forecast'

import { useState } from 'react'

import useGeolocation from '../../hooks/useGeolocation'
import useThemeDetector from '../../hooks/useThemeDetector'
// import useBrowserLanguage from '../../hooks/useBrowserLanguage'
// import useFetchData from '../../hooks/useFetchData'

import './Weather.style.scss'

export default function Weather() {
    const [location, errorGeolocation, requestGeolocation] = useGeolocation();
    const [theme, toggleTheme] = useThemeDetector(null);

    const [currentWeatherData, setCurrentWeatherData] = useState()

    return (
        <>  
            {errorGeolocation && (
                <div className="error">
                    <p>{errorGeolocation}</p>
                </div>
            )}
            <div className={`weather ${theme}`}>
                <Navbar 
                    onThemeToggle={toggleTheme} 
                    currentTheme={theme}
                    location={location}
                    requestGeolocation={requestGeolocation}
                    setCurrentWeatherData={setCurrentWeatherData}
                />

                <div className="weather__main">
                    <Current currentWeatherData={currentWeatherData}/>
                    <Details />
                    <Summary />
                </div>

                <Forecast />
            </div>
        </>
    )
}