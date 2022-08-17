import React from "react";
import { lennyFaces } from "../LennyFaces";

interface PropsInterface {
  name: string;
  rank_name: string;
}

const Avatar = (props: PropsInterface) => {
  const face = lennyFaces[Math.floor(Math.random() * lennyFaces.length)];

  return (
    <div className={`d-flex f-d-col center-div`}>
      <div className={`header-txt`}>
        <span>{props.rank_name}</span> {props.name}
      </div>
      {/* prettier-ignore */}
      <pre className={`font-xxl`}>{`
${face}
        `}</pre>
    </div>
  );
};

export default Avatar;
