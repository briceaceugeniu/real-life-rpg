import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import DirectionsBikeTwoToneIcon from "@mui/icons-material/DirectionsBikeTwoTone";
import ExperienceForm from "./ExperienceForm";
import TabPanel from "./TabPanel";
import { a11yProps } from "../../helper-functions";

const FitnessExperience = () => {
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
        <Tab
          icon={<DirectionsBikeTwoToneIcon />}
          label="Ride"
          {...a11yProps(0)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ExperienceForm
          label={`Ride`}
          count={`Km`}
          exp_type={3}
          exp_subtype={6}
        />
      </TabPanel>
    </Box>
  );
};

export default FitnessExperience;
