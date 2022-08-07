import React from "react";
import Rank from "./Rank";
import Avatar from "./Avatar";
import ProgressBar from "./ProgressBar";

const AvatarArea = () => {
  return (
    <div className={`minH-60vh`}>
        <Rank />
        <Avatar />
        <ProgressBar />
    </div>
  );
};

export default AvatarArea;
