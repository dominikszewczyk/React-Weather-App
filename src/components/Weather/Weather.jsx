import Navbar from '../Navbar/Navbar'
import Current from '../Current/Current'
import Details from '../Details/Details'
import Summary from '../Summary/Summary'
import Forecast from '../Forecast/Forecast'

import useGeolocation from '../../hooks/useGeolocation'
import useThemeDetector from '../../hooks/useThemeDetector'
// import useBrowserLanguage from '../../hooks/useBrowserLanguage'
// import useFetchData from '../../hooks/useFetchData'

import './Weather.style.scss'

export default function Weather() {
    const [location, errorGeolocation] = useGeolocation();
    const [theme, toggleTheme] = useThemeDetector(null);

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
                />

                <div className="weather__main">
                    <Current />
                    <Details />
                    <Summary />
                </div>

                <Forecast />
            </div>
        </>
    )
}