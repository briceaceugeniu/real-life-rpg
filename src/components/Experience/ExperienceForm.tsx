import React, { useContext, useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Snackbar,
  TextField,
} from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import axios from "axios";
import { API_BASE_URL } from "../../helper-functions";
import Cookies from "universal-cookie";
import { ChangedExpContext } from "../MainPage";

const numberInputProps = {
  min: 1,
  max: 9999,
};

interface PropsInterface {
  label: string;
  count?: "Minutes" | "Pages" | "Km";
  exp_type: number;
  exp_subtype: number;
}

interface InputValuesInterface {
  name: string;
  source: string;
  count: number;
  private: boolean;
  learned: string;
  count_type: "Minutes" | "Pages" | "Km" | null;
  exp_type: number;
  exp_subtype: number;
}

const ExperienceForm = (props: PropsInterface) => {
  const formInitValues = {
    name: "",
    source: "",
    count: 1,
    private: false,
    learned: "",
    count_type: props.count ?? null,
    exp_type: props.exp_type,
    exp_subtype: props.exp_subtype,
  };

  const [inputValues, setInputValues] = useState<InputValuesInterface>(
    formInitValues
  );

  const [nameError, setNameError] = useState({
    isError: false,
    msg: "* - required",
  });

  const [bubbleLightning, setBubbleColor] = useState("inherit");
  const [alertOpen, setAlertOpen] = useState({ open: false, exp: 0 });

  const label = props.label ? props.label : "Item";

  const handleFieldChanged = ({ target }: any, key: string) => {
    if (target.id === "name-field" && nameError.isError) {
      setNameError({ isError: false, msg: "* - required" });
    }

    if (target.id === "learned-field") {
      setBubbleColor(target.value.trim().length > 0 ? "gold" : "inherit");
    }

    setInputValues((obj) => ({
      ...obj,
      [key]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };

  const handleLearnedFocusIn = () => {
    if (inputValues.learned.length === 0) {
      setInputValues((obj) => ({ ...obj, learned: "\r" }));
    }
  };
  const handleLearnedFocusOut = () => {
    setInputValues((obj) => ({ ...obj, learned: inputValues.learned.trim() }));
  };

  const ExperienceCalculator = (obj: InputValuesInterface) => {
    let exp = 0;
    let count_type: any = [];
    count_type["Minutes"] = 0.75;
    count_type["Pages"] = 1;
    count_type["Km"] = 2;

    if (obj.name) exp += 50;
    if (obj.source) exp += 30;
    if (obj.count > 0 && obj.count_type !== null)
      exp += obj.count * count_type[obj.count_type];
    if (obj.learned) exp += obj.learned.length;

    return Math.ceil(exp);
  };

  const { render, setRender } = useContext(ChangedExpContext);

  const handleSaveBtnClicked = () => {
    if (!inputValues.name) {
      setNameError({
        isError: true,
        msg: "Name is required",
      });
      return;
    }

    const cookies = new Cookies();
    const auth_token = cookies.get("auth_token");

    const completeData = { ...inputValues, auth_token: auth_token };

    const gainedExp = ExperienceCalculator(inputValues);
    console.log(completeData);

    axios
      .post(API_BASE_URL + "/rlrpg_save_exp.php", completeData)
      .then(function (response) {
        console.log(response);
        if (response.data.status === "success") {
          setInputValues(formInitValues);
          setAlertOpen({ open: true, exp: response.data.exp_pt });
          setRender(render + 1);
        } else if (response.data.status === "error") {
          console.error(response.data.msg);
        } else {
          console.error("Unknown error");
        }
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  function handleClose() {
    setAlertOpen({ ...alertOpen, open: false });
  }

  return (
    <div className={`prof-forms`}>
      <Snackbar
        open={alertOpen.open}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        onClose={() => handleClose()}
      >
        <Alert
          onClose={() => handleClose()}
          severity="success"
          sx={{ width: "100%" }}
        >
          <span style={{ fontWeight: "bold" }}> + {alertOpen.exp} EXP</span>
        </Alert>
      </Snackbar>

      <TextField
        error={nameError.isError}
        helperText={nameError.msg}
        size="small"
        required
        onChange={(e) => handleFieldChanged(e, "name")}
        fullWidth
        id="name-field"
        sx={{ m: 1 }}
        inputProps={{ maxLength: 256, autoComplete: "off" }}
        label={`${label} name`}
        value={inputValues.name}
        variant="outlined"
      />
      <TextField
        size="small"
        fullWidth
        onChange={(e) => handleFieldChanged(e, "source")}
        sx={{ m: 1 }}
        value={inputValues.source}
        label="Source"
        variant="outlined"
        inputProps={{ maxLength: 1024 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <InsertLinkIcon />
            </InputAdornment>
          ),
        }}
      />
      <div className={`d-flex`}>
        {props.count && (
          <TextField
            size="small"
            sx={{ m: 1 }}
            onChange={(e) => handleFieldChanged(e, "count")}
            label={props.count}
            variant="outlined"
            type="number"
            value={inputValues.count}
            inputProps={numberInputProps}
          />
        )}

        <FormControlLabel
          sx={{ paddingLeft: "1rem" }}
          control={
            <Checkbox
              size={`small`}
              onChange={(e) => handleFieldChanged(e, "private")}
              icon={<VisibilityOutlinedIcon />}
              checkedIcon={<VisibilityOffOutlinedIcon />}
            />
          }
          label="Private"
        />
      </div>

      <TextField
        label="Learned things"
        sx={{ m: 1, height: 100 }}
        fullWidth
        multiline
        id="learned-field"
        onChange={(e) => handleFieldChanged(e, "learned")}
        size="small"
        maxRows={4}
        value={inputValues.learned}
        inputProps={{ maxLength: 60000 }}
        onFocus={() => handleLearnedFocusIn()}
        onBlur={() => handleLearnedFocusOut()}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TipsAndUpdatesTwoToneIcon sx={{ color: bubbleLightning }} />
            </InputAdornment>
          ),
        }}
      />
      <Button
        sx={{ margin: 1, minWidth: 120 }}
        onClick={() => handleSaveBtnClicked()}
        variant="contained"
      >
        Save
      </Button>
    </div>
  );
};

export default ExperienceForm;
