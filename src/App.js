import React, { useState } from "react";
import "./style/style.css";
import LanguagesContext, { languages } from "./contextLanguage";
import ThemeContext, { themes } from "./context";
import Layout from "./component/Layout";
import Navbar from "./component/Navbar";
import Body from "./component/Body";

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const [language, setLanguage] = useState(languages.spanish);

  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light);
    if (theme === themes.light) setTheme(themes.dark);
  };

  const handleChangeLanguage = () => {
    setLanguage(() =>
      language.id === languages.english.id
        ? languages.spanish
        : languages.english
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Layout>
        <LanguagesContext.Provider value={{ language, handleChangeLanguage }}>
          <Navbar />
          <Body />
        </LanguagesContext.Provider>
      </Layout>
    </ThemeContext.Provider>
  );
};
export default App;
