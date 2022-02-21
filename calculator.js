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
