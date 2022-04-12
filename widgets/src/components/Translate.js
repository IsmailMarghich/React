import React, { useRef, useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>
            <h2>Enter text</h2>
          </label>
          <input
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
      </div>

      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label={"Language"}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};
export default Translate;
