import { useEffect } from 'react'

import Navbar from '../Navbar/Navbar'
import Current from '../Current/Current'
import Details from '../Details/Details'
import Summary from '../Summary/Summary'
import Forecast from '../Forecast/Forecast'

import useThemeDetector from '../../hooks/useThemeDetector'

import './Weather.style.scss'

export default function Weather() {
    const theme = useThemeDetector();
    return (
        <>
            <div className={`weather ${theme}`}>
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