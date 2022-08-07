import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArticleIcon from "@mui/icons-material/Article";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import ExperienceForm from "./ExperienceForm";
import TabPanel from "./TabPanel";
import { a11yProps } from "../../helper-functions";

const ProfessionalExperience = () => {
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
        width: "100%",
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
        <Tab icon={<YouTubeIcon />} label="Tutorial" {...a11yProps(1)} />
        <Tab icon={<ArticleIcon />} label="Article" {...a11yProps(2)} />
        <Tab
          icon={<RecordVoiceOverIcon />}
          label="Presentation"
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ExperienceForm label={`Book`} count={`Pages`} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExperienceForm label={`Tutorial`} count={`Minutes`} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ExperienceForm label={`Article`} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ExperienceForm label={`Presentation`} />
      </TabPanel>
    </Box>
  );
};

export default ProfessionalExperience;
