import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

/*we can set default values for props if they are not specified by parent component*/
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
