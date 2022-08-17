import React from "react";

interface PropsInterface {
  exp: number;
  next_level: number;
}

const ProgressBar = (props: PropsInterface) => {
  return (
    <div className={`d-flex center-div f-d-col`}>
      <div style={{ marginTop: "4rem" }}>
        <small>
          Exp: {props.exp} / {props.next_level}
        </small>
      </div>
      <progress className={`p-bar`} max={props.next_level} value={props.exp}>
        {props.exp}
      </progress>
    </div>
  );
};

export default ProgressBar;
