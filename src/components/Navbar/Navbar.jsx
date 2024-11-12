import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { convertKelvinToCelsius } from '../../utils/convertTemperatures'

import useFetchData from '../../hooks/useFetchData'

import Box from '../Box/Box'
import ImageIcon from '../ImageIcon/ImageIcon'

import './Navbar.style.scss'

import iconLocationLight from '../../assets/icon-location-dark.png'
import iconLocationDark from '../../assets/icon-location-light.png'
import iconThemeSun from '../../assets/icon-theme-sun-light.png'
import iconThemeMoon from '../../assets/icon-theme-moon-dark.png'
import iconSettingLight from '../../assets/icon-settings-dark.png'
import iconSettingDark from '../../assets/icon-settings-light.png'
import iconGeolocationLight from '../../assets/icon-geolocation-dark.png'
import iconGeolocationDark from '../../assets/icon-geolocation-light.png'

import currentWeatherDataAPI from '/public/data.json'

export default function Navbar({ onThemeToggle, currentTheme, location, requestGeolocation, setCurrentWeatherData}) {
    const [locationName, setLocationName] = useState({country: '', city: ''});
    
    const locationURL = `https://nominatim.openstreetmap.org/reverse?lat=${location.latitude}&lon=${location.longitude}&format=json`;
    const [locationData, errorLocationData, isLoadingLocationData ] = useFetchData(locationURL);
    
    useEffect(() => {
        if (locationData && !isLoadingLocationData && !errorLocationData) {
            setLocationName({
                country: locationData.address?.country, 
                city: locationData.address?.village || locationData.address?.city
            });
        }
    }, [locationData, isLoadingLocationData, errorLocationData]);
    
    useEffect(() => {
        // const weatherDataURL = `${import.meta.env.VITE_OPEN_WEATHER_BASE_URL}/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`;
        // console.log(weatherDataURL);
        
        const convertedData = {
            ...currentWeatherDataAPI,
            dt: new Date(currentWeatherDataAPI.dt * 1000),
            sys: {
                ...currentWeatherDataAPI.sys,
                sunrise: new Date(currentWeatherDataAPI.sys.sunrise * 1000),
                sunset: new Date(currentWeatherDataAPI.sys.sunset * 1000),
            },
            main: {
                ...currentWeatherDataAPI.main,
                temp: convertKelvinToCelsius(currentWeatherDataAPI.main.temp),
                feels_like: convertKelvinToCelsius(currentWeatherDataAPI.main.feels_like, 1),
                temp_min: convertKelvinToCelsius(currentWeatherDataAPI.main.temp_min, 1),
                temp_max: convertKelvinToCelsius(currentWeatherDataAPI.main.temp_max, 1),

            }
        }

        setCurrentWeatherData(convertedData);
    }, [setCurrentWeatherData]);

    return (
        <Box className="navbar">
            <div className="navbar__logo">
                <p>WeatherApp</p>
            </div>
            <div className="navbar__place">
                <ImageIcon 
                    className="place__icon icon" 
                    src={{"dark": iconLocationDark, "light": iconLocationLight}} 
                    alt="Icon Location Dark" 
                    theme={currentTheme}
                />
                {locationName.country && locationName.city && (
                    <>
                        <b>{locationName?.country}</b>, {locationName?.city}
                    </>
                )}
            </div>
            <div className="navbar__search">
                <input type="text" className="search__input input" placeholder="Search Location"></input>
                <ImageIcon 
                    className="search__icon icon icon--hover" 
                    src={{"dark": iconGeolocationDark, "light": iconGeolocationLight}} 
                    alt="Icon Geolocation"
                    theme={currentTheme}
                    />
            </div>
            <div className="navbar__controls">
                <div className="navbar__theme">
                    <button className="theme__button button" onClick={onThemeToggle}>
                        <ImageIcon 
                            className="button__icon icon" 
                            src={{dark: iconThemeMoon, light: iconThemeSun}} 
                            alt="Icon Theme" 
                            theme={currentTheme}
                            />
                        {currentTheme} Mode
                    </button>
                </div>
                <div className="navbar__settings" onClick={requestGeolocation}>
                    <ImageIcon 
                        className="settings__icon icon icon--hover" 
                        src={{"dark": iconSettingDark, "light": iconSettingLight}} 
                        alt="Icon Settings" 
                        theme={currentTheme}
                    />
                </div>
            </div>
        </Box>
    )
}

Navbar.propTypes = {
    onThemeToggle: PropTypes.func.isRequired,
    currentTheme: PropTypes.string.isRequired,
    location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number
    }),
    requestGeolocation: PropTypes.func.isRequired,
    setCurrentWeatherData: PropTypes.func.isRequired
}; 
