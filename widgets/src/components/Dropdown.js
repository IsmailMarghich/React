import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        /*if our dropdown is clicked, it will automatically close itself, so we return here*/
        return;
      }
      setOpen(
        false
      ); /*if we click outside of our dropdown, we want it to close*/
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      /*cleanup function to remove the event listener*/
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      /*hide the option to select the currently selected item again*/
      return null;
    }
    return (
      <div
        className="item"
        key={option.label}
        onClick={() => {
          onSelectedChange(
            option
          ); /*when a user selects a new item, update the state of App with onSelectedChange*/
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">
          <h2>Select a {label}</h2>
        </label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() =>
            setOpen(!open)
          } /*close the dropdown when an option is chosen*/
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
