import React from "react";
import { lennyFaces } from "../LennyFaces";

const Avatar = () => {
  const face = lennyFaces[Math.floor(Math.random() * lennyFaces.length)];

  return (
    <div className={`d-flex f-d-col center-div`}>
      <div className={`header-txt`}>
        <span>Rekrut</span> Lenny
      </div>
      {/* prettier-ignore */}
      <pre className={`font-xxl`}>{`
${face}
        `}</pre>
    </div>
  );
};

export default Avatar;
