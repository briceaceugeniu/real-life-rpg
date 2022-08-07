import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ExperienceForm from "./ExperienceForm";
import TabPanel from "./TabPanel";
import { a11yProps } from "../../helper-functions";

const SoftSkillExperience = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 320,
        width: "auto",
        backgroundColor: "inherit",
        margin: 1,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: 120,
        }}
      >
        <Tab icon={<MenuBookOutlinedIcon />} label="Book" {...a11yProps(0)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ExperienceForm label={`Book`} count={`Pages`} />
      </TabPanel>
    </Box>
  );
};

export default SoftSkillExperience;
