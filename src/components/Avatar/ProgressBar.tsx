import React from "react";

const ProgressBar = () => {
  return (
    <div className={`d-flex center-div f-d-col`}>
      <div style={{ marginTop: "4rem" }}>
        <small>Exp: 0 / 100</small>
      </div>
      <progress className={`p-bar`} max={100} value={0}>
        0
      </progress>
    </div>
  );
};

export default ProgressBar;
