import React, { useContext } from "react";
import "../style/style.css";
import ThemeContext from "../context";
import LanguageContext from "../contextLanguage";

const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  const { language, handleChangeLanguage } = useContext(LanguageContext);
  const { text } = language;

  return (
    <div className="navbar">
      <p>{text.home}</p>
      <p> {`${text.current} ${language.id}`}</p>
      <button
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.font }}
      >
        {text.color}
      </button>
      <button onClick={handleChangeLanguage}>{text.button}</button>
    </div>
  );
};
export default Navbar;
