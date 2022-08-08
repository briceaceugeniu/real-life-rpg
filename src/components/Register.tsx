import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState({ isError: false, msg: " " });
  let navigate = useNavigate();

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
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
      >
        <h3 className={`font-mono`} style={{ margin: 8 }}>
          Register
        </h3>
        <TextField
          error={error.isError}
          id="email-input"
          label="Email"
          variant="standard"
          required
          type="email"
        />
        <TextField
          error={error.isError}
          id="email-input"
          label="Displayed name"
          variant="standard"
          type="email"
          required
        />
        <TextField
          error={error.isError}
          id="password-input"
          label="Password"
          type="password"
          required
          variant="standard"
        />
        <TextField
          error={error.isError}
          id="password-input"
          label="Password Confirm"
          type="password"
          variant="standard"
          required
          helperText={error.msg}
        />
        <Button variant="contained" size="small" style={{ marginBottom: 6 }}>
          Register
        </Button>
        <Button
          variant="contained"
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

export default Register;
