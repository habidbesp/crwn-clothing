export const capitalizeString = (str: string) =>
  str
    .split("")
    .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter.toLowerCase()))
    .join("");
