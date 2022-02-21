export function greet(name) {
  if (name === "Jan" || name === "Lara" || name === "CJ") {
    return "Hello Coach!";
  } else if (name) {
    return `Hello ${name}!`;
  } else {
    return "Hello stranger!";
  }
}
