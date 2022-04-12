import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translation, setTranslation] = useState("");

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        /*send a request to the Google Translate API to translate text*/
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslation(
        data.data.translations[0].translatedText
      ); /*set our state with the response from api*/
    };
    doTranslation();
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{translation}</h1>
    </div>
  );
};

export default Convert;
