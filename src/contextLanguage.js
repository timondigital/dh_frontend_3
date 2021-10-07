import { createContext } from "react";
import ES from "./language/spanish.json";
import EN from "./language/english.json";

export const languages = {
  spanish: {
    id: "ES",
    text: ES,
  },
  english: {
    id: "EN",
    text: EN,
  },
};
const LanguageContext = createContext(languages.spanish);
export default LanguageContext;
