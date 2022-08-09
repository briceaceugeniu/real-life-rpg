import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState({ isError: false, msg: " " });

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
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
      >
        <h3 className={`font-mono`} style={{ margin: 8 }}>
          Login
        </h3>
        <TextField
          error={error.isError}
          id="email-input"
          label="Email"
          variant="standard"
          type="email"
        />
        <TextField
          error={error.isError}
          id="password-input"
          label="Password"
          type="password"
          variant="standard"
          helperText={error.msg}
        />
        <Button
          variant="contained"
          className={`m8`}
          onClick={() => alert("Work in progress...")}
        >
          Log in
        </Button>
        <div
          className={`d-flex space-btwn`}
          style={{ fontFamily: "monospace" }}
        >
          <p>
            New here? <Link to="/register">Register!</Link>
          </p>
          <p>
            <Link to="/forgot-pass">Forgot Password?</Link>
          </p>
        </div>
      </Box>
    </Grid>
  );
};

export default Login;
