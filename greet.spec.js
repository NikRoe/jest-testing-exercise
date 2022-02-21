import { greet } from "./greet.js";

describe("greet", () => {
  it("returns 'Hello Coach!', to greet coaches", () => {
    expect(greet("Lara")).toBe("Hello Coach!");
  });
  it("returns 'Hello Coach!', to greet coaches", () => {
    expect(greet("CJ")).toBe("Hello Coach!");
  });
  it("returns 'Hello Coach!', to greet coaches", () => {
    expect(greet("Jan")).toBe("Hello Coach!");
  });
  it("returns 'Hello Dennis!', to greet students", () => {
    expect(greet("Dennis")).toBe("Hello Dennis!");
  });
  it("returns 'Hello stranger!', to greet strangers", () => {
    expect(greet()).toBe("Hello stranger!");
  });
});
