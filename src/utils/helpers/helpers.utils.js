export const capitalizeString = (str) =>
  str
    .split("")
    .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter.toLowerCase()))
    .join("");
