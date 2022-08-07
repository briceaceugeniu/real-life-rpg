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
        <TextField
          error={error.isError}
          required
          id="email-input"
          label="Email"
          variant="standard"
        />
        <TextField
          error={error.isError}
          id="password-input"
          label="Password"
          type="password"
          variant="standard"
          required
          helperText={error.msg}
        />
        <Button variant="contained" size="small">
          Log in
        </Button>
        <p style={{ fontFamily: "monospace" }}>
          New here? <Link to="/register">Register!</Link>
        </p>
      </Box>
    </Grid>
  );
};

export default Login;
