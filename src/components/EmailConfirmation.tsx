import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Alert, Button } from "@mui/material";

const EmailConfirmation = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const stat = params.get("stat");
  let navigate = useNavigate();
  let al;
  switch (stat) {
    case "done":
      al = (
        <Alert severity="success">
          Email successfully confirmed. You are ready to go!
        </Alert>
      );
      break;
    case "al-done":
      al = (
        <Alert severity="info">
          Email already successfully confirmed. You are ready to go!
        </Alert>
      );
      break;
    default:
      navigate("/login");
      break;
  }

  return (
    <div className={`d-flex f-d-col m8 center-div`}>
      {al}
      <Button
        style={{ width: "200px", marginTop: "10px" }}
        className={``}
        variant="contained"
        size="small"
        onClick={() => navigate("/login")}
      >
        Go to login
      </Button>
    </div>
  );
};

export default EmailConfirmation;
