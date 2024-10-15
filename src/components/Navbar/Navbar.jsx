import Box from '../Box/Box'

import './Navbar.style.scss'

import iconLocationDark from '../../assets/icon-location-dark.png'
// import iconLocationLight from '../../assets/icon-location-light.png'
import iconThemeSun from '../../assets/icon-theme-sun-light.png'
// import iconThemeMoon from '../../assets/icon-theme-moon-dark.png'
import iconSettingDark from '../../assets/icon-settings-dark.png'
// import iconSettingLight from '../../assets/icon-settings-light.png'
import iconGeolocationDark from '../../assets/icon-geolocation-dark.png'
// import iconGeolocationLight from '../../assets/icon-geolocation-light.png'


export default function Navbar() {

    return (
        <Box className="navbar">
            <div className="navbar__logo">
                <p>WeatherApp</p>
            </div>
            <div className="navbar__place">
                <img className="place__icon icon" src={iconLocationDark} alt="Icon Location Dark" /> 
                <b>Polska</b>, Przebieczany
                </div>
            <div className="navbar__search">
                <input type="text" className="search__input input" placeholder="Search Location"></input>
                <img className="search__icon icon icon--hover" src={iconGeolocationDark} alt="Icon Geolocation" />
            </div>
            <div className="navbar__theme">
                <button className="theme__button button">
                    <img className="button__icon icon" src={iconThemeSun} alt="Icon Theme" />
                    Light Mode
                </button>
            </div>
            <div className="navbar__settings">
                <img className="settings__icon icon icon--hover" src={iconSettingDark} alt="Icon Settings" />
            </div>
        </Box>
    )
}
