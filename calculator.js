export const convertCelsiusToFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

export const convertFahrenheitToCelsius = (fahrenheit) => {
  return Number.parseFloat((((fahrenheit - 32) * 5) / 9).toFixed(2));
};

export function calculatorFaToCe(temperature) {
  let splitted = temperature.split(" ");

  if (temperature.includes("°C")) {
    const conversionCetoFa = Number.parseFloat(splitted[0]) * 1.8 + 32;
    return `${conversionCetoFa} °F`;
  } else {
    const conversionFatoCe = ((Number.parseFloat(splitted[0]) - 32) * 5) / 9;
    return `${conversionFatoCe.toFixed(2)} °C`;
  }
}
