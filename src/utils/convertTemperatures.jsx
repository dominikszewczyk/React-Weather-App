export const convertKelvinToCelsius = (kelvin, decimal = 0) => {
    return (kelvin - 273.15).toFixed(decimal);
};

export const convertCelsiusToFahrenhite = (celsius, decimal = 0) => {
    return ((celsius * 9/5) + 32).toFixed(decimal);
};
