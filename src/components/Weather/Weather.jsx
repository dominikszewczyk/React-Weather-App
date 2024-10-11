import Navbar from '../Navbar/Navbar'
import Current from '../Current/Current'
import Details from '../Details/Details'
import Summary from '../Summary/Summary'
import Forecast from '../Forecast/Forecast'
import './Weather.style.scss'

export default function Weather() {
    return (
        <>
            <div className="weather">
            <Navbar />

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