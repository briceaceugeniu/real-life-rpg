import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IsValidEmail } from "../helper-functions";
import Cookies from "universal-cookie";

const Login = () => {
  const [error, setError] = useState({ isError: false, msg: " " });
  const [credential, setCredential] = useState({ email: "", psswd: "" });

  const handleLogInClicked = () => {
    if (
      credential.email.length === 0 ||
      credential.psswd.length === 0 ||
      !IsValidEmail(credential.email)
    ) {
      setError({ isError: true, msg: "Invalid email or/and password." });
      return;
    }
    //
    axios
      .post("https://api.rubicon101.com/rlrpg_auth_user.php", {
        email: credential.email,
        password: credential.psswd,
      })
      .then(function (response) {
        console.log(response);

        if (response.data.status === "success") {
          // TODO save token, redirect to main page
          const cookies = new Cookies();
          cookies.set("myCat", "Pacman", { path: "/" });
        } else if (response.data.status === "error") {
          // display error
        } else {
          // display general error
        }
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  const handleEmailInputChange = (value: string) => {
    setCredential((obj) => ({ ...obj, email: value }));
  };

  function handlePasswordInputChange(value: string) {
    setCredential((obj) => ({ ...obj, psswd: value }));
  }

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
          onChange={(e) => handleEmailInputChange(e.target.value)}
          value={credential.email}
          type="email"
        />
        <TextField
          error={error.isError}
          id="password-input"
          label="Password"
          type="password"
          onChange={(e) => handlePasswordInputChange(e.target.value)}
          value={credential.psswd}
          variant="standard"
          helperText={error.msg}
        />
        <Button
          variant="contained"
          className={`m8`}
          onClick={() => handleLogInClicked()}
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
