import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL, IsValidEmail } from "../helper-functions";
import Cookies from "universal-cookie";

const Login = () => {
  const [error, setError] = useState({ isError: false, msg: " " });
  const [credential, setCredential] = useState({ email: "", psswd: "" });
  let navigate = useNavigate();

  const cookies = new Cookies();

  useEffect(() => {
    //todo if cookie with auth_token exist - redirect to main page
  });

  const handleLogInClicked = () => {
    if (
      credential.email.length < 5 ||
      credential.psswd.length < 11 ||
      !IsValidEmail(credential.email)
    ) {
      setError({ isError: true, msg: "Invalid email or/and password." });
      return;
    }

    axios
      .post(API_BASE_URL + "/rlrpg_auth_user.php", {
        email: credential.email,
        password: credential.psswd,
      })
      .then(function (response) {
        if (response.data.status === "success") {
          const d = new Date(response.data.valid_until);

          cookies.set("auth_token", response.data.auth_token, {
            path: "/",
            expires: d,
            secure: true,
          });

          navigate("/");
        } else if (response.data.status === "error") {
          setError({ isError: true, msg: response.data.msg });
        } else {
          setError({ isError: false, msg: "Unknown error. Please try later." });
        }
      })
      .catch(function (err) {
        setError({ isError: false, msg: "Unknown error. Please try later." });
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
