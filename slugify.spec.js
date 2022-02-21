import { slugify } from "./slugify.js";

describe("slugify", () => {
  it("returns 'i-love-javascript', to convert normal string", () => {
    expect(slugify("I love JavaScript")).toBe("i-love-javascript");
  });
  it("returns 'ich-uebe-barfuss-das-programmieren', to convert string with extra symbols", () => {
    expect(slugify("Ich übe barfuß das Programmieren")).toBe(
      "ich-uebe-barfuss-das-programmieren"
    );
  });
  it("returns 'ich-uebe-barfuss-das-programmieren', to convert string with extra symbols", () => {
    expect(slugify("Ich übe barfuß das Programmieren")).toBe(
      "ich-uebe-barfuss-das-programmieren"
    );
  });
  it("returns 'ich-aebe-barfuss-das-programmieren', to convert string with extra symbols", () => {
    expect(slugify("Ich äbe barfuß das Programmieren")).toBe(
      "ich-aebe-barfuss-das-programmieren"
    );
  });
  it("returns 'ich-oebe-barfuss-das-programmieren', to convert string with extra symbols", () => {
    expect(slugify("Ich öbe barfuß das Programmieren")).toBe(
      "ich-oebe-barfuss-das-programmieren"
    );
  });
});
