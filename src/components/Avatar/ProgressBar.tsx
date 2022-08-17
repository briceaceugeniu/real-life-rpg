import React from "react";

const ProgressBar = () => {
  return (
    <div className={`d-flex center-div f-d-col`}>
      <div style={{ marginTop: "4rem" }}>
        <small>Exp: 0 / 280</small>
      </div>
      <progress className={`p-bar`} max={280} value={0}>
        12
      </progress>
    </div>
  );
};

export default ProgressBar;
