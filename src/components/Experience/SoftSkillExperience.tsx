import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import MicIcon from "@mui/icons-material/Mic";
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
        <Tab icon={<MicIcon />} label="Podcast" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ExperienceForm
          label={`Book`}
          count={`Pages`}
          exp_type={2}
          exp_subtype={5}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExperienceForm
          label={`Podcast`}
          count={`Minutes`}
          exp_type={2}
          exp_subtype={7}
        />
      </TabPanel>
    </Box>
  );
};

export default SoftSkillExperience;
