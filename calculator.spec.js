import { calculatorFaToCe } from "./calculator.js";

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
