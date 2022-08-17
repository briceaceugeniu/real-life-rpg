import React, { useState } from "react";
import ExperienceNav from "./ExperienceNav";
import ExperienceTypes from "./ExperienceTypes";
import { Divider } from "@mui/material";
import PastExperiences from "./PastExperiences";

interface PropsInterface {
  token: string;
}

const ExperienceArea = (props: PropsInterface) => {
  const [expNav, setExpNav] = useState(true);

  return (
    <div className={`minH-60vh`}>
      <ExperienceNav selectedNav={(e: boolean) => setExpNav(e)} />
      <Divider />
      {expNav ? <ExperienceTypes /> : <PastExperiences token={props.token} />}
    </div>
  );
};

export default ExperienceArea;
