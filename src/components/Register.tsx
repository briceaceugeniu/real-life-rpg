import React, { useEffect, useState } from "react";
import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import axios from "axios";
import { AlertColor } from "@mui/material/Alert/Alert";
import { IsValidEmail } from "../helper-functions";

interface InputProps {
  status: boolean;
  value: string;
}

interface AlertProps {
  visible: boolean;
  text: string;
  type: AlertColor;
}

const defaultInput: InputProps = {
  status: false,
  value: "",
};

const NAME_MIN_LENGTH = 5;
const PASSWORD_MIN_LENGTH = 12;

const Register = () => {
  const [error, setError] = useState({
    isError: { email: false, name: false, psswd1: false, psswd2: false },
    msg: " ",
  });
  const [alert, setAlert] = useState<AlertProps>({
    visible: false,
    text: "",
    type: "success",
  });
  const [emailValue, setEmailValue] = useState("");
  const [nameSuccess, setNameSuccess] = useState<InputProps>(defaultInput);
  const [passwordSuccess, setPasswordSuccess] = useState<InputProps>(
    defaultInput
  );
  const [
    passwordConfirmSuccess,
    setPasswordConfirmSuccess,
  ] = useState<InputProps>(defaultInput);

  let navigate = useNavigate();

  const handleNameChange = (value: string) => {
    const letterNumber = /^[0-9a-zA-Z]+$/;
    const correctFormat = value.match(letterNumber) !== null;

    setNameSuccess({
      status: value.length >= NAME_MIN_LENGTH && correctFormat,
      value: value,
    });
  };

  const handlePasswordChange = (value: string) => {
    const strongRegex = new RegExp(
      `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{${PASSWORD_MIN_LENGTH},})`
    );
    const correctFormat =
      value.length >= PASSWORD_MIN_LENGTH && value.match(strongRegex) !== null;

    setPasswordSuccess({ status: correctFormat, value: value });
  };

  const handlePasswordConfirmChange = (value: string) => {
    setPasswordConfirmSuccess({
      status: value === passwordSuccess.value,
      value: value,
    });
  };

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
  };

  const handleRegisterClicked = () => {
    const correctEmailFormat = IsValidEmail(emailValue);

    if (
      !correctEmailFormat ||
      !nameSuccess.status ||
      !passwordSuccess.status ||
      !passwordConfirmSuccess.status
    ) {
      setError({
        isError: {
          email: !correctEmailFormat,
          name: !nameSuccess.status,
          psswd1: !passwordSuccess.status,
          psswd2: !passwordConfirmSuccess.status,
        },
        msg: "Invalid input format",
      });
      return;
    }

    setEmailValue("");
    setNameSuccess(defaultInput);
    setPasswordSuccess(defaultInput);
    setPasswordConfirmSuccess(defaultInput);

    axios
      .post("https://api.rubicon101.com/rlrpg_register_user.php", {
        email: emailValue,
        name: nameSuccess.value,
        password1: passwordSuccess.value,
        password2: passwordConfirmSuccess.value,
      })
      .then(function (response) {
        console.log(response);
        setError({
          isError: { email: false, name: false, psswd1: false, psswd2: false },
          msg: " ",
        });

        if (response.data.status === "success") {
          setAlert({ visible: true, type: "success", text: response.data.msg });
        } else if (response.data.status === "error") {
          setAlert({ visible: true, type: "error", text: response.data.msg });
        } else {
          setAlert({
            visible: true,
            type: "error",
            text: "Error: Some mysterious sh*t happened.",
          });
        }
      })
      .catch(function (err) {
        setAlert({
          visible: true,
          type: "error",
          text: "An unknown error occurred, please try later.",
        });
        console.error(err);
      });
  };

  const GetErrorMsg = (obj: any) => {
    if (obj.count === 0) return "";
    for (const [key, value] of Object.entries(obj)) {
      if (value) {
        return "Invalid input format";
      }
    }
    return "";
  };

  useEffect(() => {
    if (passwordConfirmSuccess.value.length === 0) return;
    setPasswordConfirmSuccess({
      status: passwordConfirmSuccess.value === passwordSuccess.value,
      value: passwordConfirmSuccess.value,
    });
  }, [passwordSuccess.value]);

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
        {alert.visible && (
          <Alert severity={alert.type} className={`fit-content`}>
            <div className={`font-mono`}>{alert.text}</div>
          </Alert>
        )}

        <h3 className={`font-mono`} style={{ margin: 8 }}>
          Register
        </h3>
        <small
          className={`d-flex m8 font-mono fit-content`}
          style={{ alignItems: "center" }}
        >
          {nameSuccess.status ? (
            <CheckCircleIcon sx={{ fontSize: "1.2rem", color: "#218530" }} />
          ) : (
            <CancelIcon sx={{ fontSize: "1.2rem", color: "#701010" }} />
          )}
          <div> - &nbsp; </div> The name must be at least {NAME_MIN_LENGTH}{" "}
          characters (letters / digits) long
        </small>
        <small
          className={`d-flex m8 font-mono fit-content`}
          style={{ alignItems: "center" }}
        >
          {passwordSuccess.status ? (
            <CheckCircleIcon sx={{ fontSize: "1.2rem", color: "#218530" }} />
          ) : (
            <CancelIcon sx={{ fontSize: "1.2rem", color: "#701010" }} />
          )}
          <div> - &nbsp; </div>
          Passwords must be at least {PASSWORD_MIN_LENGTH} characters and
          contain upper and lower case letters + digits + special characters
        </small>
        <small
          className={`d-flex m8 font-mono`}
          style={{ alignItems: "center" }}
        >
          {passwordConfirmSuccess.status ? (
            <CheckCircleIcon sx={{ fontSize: "1.2rem", color: "#218530" }} />
          ) : (
            <CancelIcon sx={{ fontSize: "1.2rem", color: "#701010" }} />
          )}{" "}
          - Passwords must be identical
        </small>

        <TextField
          error={error.isError.email}
          label="Email"
          variant="standard"
          required
          inputProps={{ maxLength: 127 }}
          onChange={(e) => handleEmailChange(e.target.value)}
          value={emailValue}
          type="email"
        />
        <TextField
          error={error.isError.name}
          label="Displayed name"
          variant="standard"
          type="email"
          inputProps={{ maxLength: 63 }}
          value={nameSuccess.value}
          onChange={(e) => handleNameChange(e.target.value)}
          required
        />
        <TextField
          error={error.isError.psswd1}
          label="Password"
          type="password"
          required
          inputProps={{ maxLength: 254 }}
          value={passwordSuccess.value}
          variant="standard"
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        <TextField
          error={error.isError.psswd2}
          label="Password Confirm"
          type="password"
          variant="standard"
          inputProps={{ maxLength: 254 }}
          required
          value={passwordConfirmSuccess.value}
          onChange={(e) => handlePasswordConfirmChange(e.target.value)}
        />
        <small
          className={`font-mono m8 fit-content`}
          style={{ color: "darkred", fontWeight: "bold" }}
        >
          {error.msg}
        </small>
        <Button
          variant="contained"
          style={{ marginBottom: 6 }}
          onClick={() => handleRegisterClicked()}
        >
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
