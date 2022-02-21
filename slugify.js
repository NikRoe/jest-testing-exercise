export function slugify(someRandomString) {
  return someRandomString
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace("ü", "ue")
    .replace("ß", "ss")
    .replace("ä", "ae")
    .replace("ö", "oe");
}
