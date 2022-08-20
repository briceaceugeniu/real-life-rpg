import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from "@mui/icons-material/History";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

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
          label={
            <span
              style={{ fontWeight: "bold", fontSize: "1.15em" }}
              className={`font-mono`}
            >
              Add&nbsp;experience
            </span>
          }
          icon={<AddCircleOutlineOutlinedIcon sx={{ fontSize: 30 }} />}
          onClick={() => props.selectedNav(true)}
        />
        <Divider orientation="vertical" flexItem />
        <BottomNavigationAction
          label={
            <span
              style={{ fontWeight: "bold", fontSize: "1.15em" }}
              className={`font-mono`}
            >
              Past experiences
            </span>
          }
          onClick={() => props.selectedNav(false)}
          icon={<HistoryIcon sx={{ fontSize: 30 }} />}
        />
      </BottomNavigation>
    </div>
  );
};

export default ExperienceNav;
