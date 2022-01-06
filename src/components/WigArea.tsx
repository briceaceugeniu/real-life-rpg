import React from "react";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import { Button } from "@mui/material";
const WigArea = () => {
  return (
    <div>
      <CoronavirusIcon color="primary" sx={{ fontSize: 50 }} />
      <Button variant="contained">Hello World</Button>
    </div>
  );
};

export default WigArea;
