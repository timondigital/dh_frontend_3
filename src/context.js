import { createContext } from "react";

export const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "red",
  },
};
const ThemeContext = createContext(themes.light);
export default ThemeContext;
