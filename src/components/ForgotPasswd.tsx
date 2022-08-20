import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IsValidEmail } from "../helper-functions";

const ForgotPasswd = () => {
  const [error, setError] = useState({ isError: false, msg: " " });
  const [inputValue, setInputValue] = useState<string>("");
  let navigate = useNavigate();

  const handleSubmitClicked = () => {
    if (inputValue.length === 0 || !IsValidEmail(inputValue)) {
      setError({ isError: true, msg: "Invalid email" });
      return;
    }

    setError({ isError: false, msg: "" });
  };

  const handleEmailInputChanged = (value: string) => {
    setInputValue(value);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "80vh" }}
    >
      <Box
        component="form"
        className={`d-flex f-d-col`}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
        noValidate
      >
        <h3 className={`font-mono m8`}>Forgot password</h3>
        <small className={`font-mono m8 fit-content`}>
          Please enter your email address so we can send you an email to reset
          your password.
        </small>
        <TextField
          error={error.isError}
          label="Email"
          variant="standard"
          required
          type="email"
          onChange={(e) => handleEmailInputChanged(e.target.value)}
          value={inputValue}
          helperText={error.msg}
        />
        <Button
          variant="contained"
          className={`m8`}
          onClick={() => handleSubmitClicked()}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          className={`m8`}
          size="small"
          color="secondary"
          onClick={() => navigate("/login")}
        >
          Go back
        </Button>
      </Box>
    </Grid>
  );
};

export default ForgotPasswd;
