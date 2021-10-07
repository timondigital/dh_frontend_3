import { createContext } from "react";
import ES from "./language/spanish.json";
import EN from "./language/english.json";

export const languages = {
  spanish: {
    id: "ES",
    texto: ES,
  },
  english: {
    id: "EN",
    texto: EN,
  },
};
const LanguageContext = createContext(languages.spanish);
export default LanguageContext;
