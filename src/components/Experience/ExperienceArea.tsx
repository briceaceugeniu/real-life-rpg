import React, { useState } from "react";
import ExperienceNav from "./ExperienceNav";
import ExperienceTypes from "./ExperienceTypes";
import { Divider } from "@mui/material";

const ExperienceArea = () => {
  const [expNav, setExpNav] = useState(true);

  return (
    <div className={`minH-60vh`}>
      <ExperienceNav selectedNav={(e: any) => setExpNav(e)} />
      <Divider />
      {expNav ? <ExperienceTypes /> : <div>History stuff</div>}
    </div>
  );
};

export default ExperienceArea;
