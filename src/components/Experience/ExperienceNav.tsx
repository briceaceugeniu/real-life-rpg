import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from "@mui/icons-material/History";

const ExperienceNav = (props: any) => {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <BottomNavigation
        showLabels={true}
        className={`exp-nav`}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Add Experience"
          icon={<AddIcon />}
          onClick={() => props.selectedNav(true)}
        />
        <Divider orientation="vertical" flexItem />
        <BottomNavigationAction
          label="Past Experiences"
          onClick={() => props.selectedNav(false)}
          icon={<HistoryIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default ExperienceNav;
