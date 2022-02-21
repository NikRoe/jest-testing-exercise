import {
  calculatorFaToCe,
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
} from "./calculator.js";

describe("convertCelsiusToFahrenheit", () => {
  it("converts Celsius to Fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(0)).toBeCloseTo(32);
  });
  it("converts Celsius to Fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(100)).toBeCloseTo(212);
  });
});

describe("convertFahrenheitToCelsius", () => {
  it("convert Fahrenheit To Celsius", () => {
    expect(convertFahrenheitToCelsius(0)).toBeCloseTo(-17.78);
  });
  it("convert Fahrenheit ToC elsius", () => {
    expect(convertFahrenheitToCelsius(96)).toBeCloseTo(35.56);
  });
});

describe("calculatorFaToCe", () => {
  it("converts Fahrenheit to Celsius", () => {
    expect(calculatorFaToCe("0 °C")).toBe("32 °F");
  });
  it("converts Fahrenheit to Celsius", () => {
    expect(calculatorFaToCe("100 °C")).toBe("212 °F");
  });
  it("converts Fahrenheit to Celsius", () => {
    expect(calculatorFaToCe("0 °F")).toBe("-17.78 °C");
  });
  it("converts Fahrenheit to Celsius", () => {
    expect(calculatorFaToCe("96 °F")).toBe("35.56 °C");
  });
});
