import React, { useContext } from "react";
import LanguangeContext from "../contextLanguage";

const Body = () => {
  const { language } = useContext(LanguangeContext);
  const { text } = language;
  return (
    <div>
      <h1>{text.title}</h1>
      <p>{text.description}</p>
    </div>
  );
};
export default Body;
