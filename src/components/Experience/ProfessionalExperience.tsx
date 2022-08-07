import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArticleIcon from "@mui/icons-material/Article";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import ProfessionalBookForm from "./ProfessionalBookForm";
import ProfessionalTutorialForm from "./ProfessionalTutorialForm";
import ProfessionalForm from "./ProfessionalForm";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

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
        <Tab icon={<YouTubeIcon />} label="Tutorial" {...a11yProps(1)} />
        <Tab icon={<ArticleIcon />} label="Article" {...a11yProps(2)} />
        <Tab
          icon={<RecordVoiceOverIcon />}
          label="Presentation"
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProfessionalForm label={`Book`} count={`Page count`} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfessionalForm label={`Tutorial`} count={`Minutes`} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
};

export default ProfessionalExperience;
