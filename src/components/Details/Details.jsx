

import Box from '../Box/Box'

import './Details.style.scss'

export default function Details() {
    const detailsItems = [
        { id: "rainfall", name: "Rainfall" },
        { id: "pressure", name: "Pressure" },
        { id: "humidity", name: "Humidity" },
        { id: "uv", name: "UV Index" },
        { id: "wind", name: "Wind" },
        { id: "visibility", name: "Visibility" }
    ]
    return (
        <div className="weather__details">
            {
                detailsItems.map(item =>
                    <Box
                        key={item.id}
                        className={`weather__details-item weather__details-item--${item.id}`}>
                        {item.name}
                    </Box>
                )
            }
        </div>
    )
}