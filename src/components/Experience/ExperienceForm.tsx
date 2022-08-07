import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const numberInputProps = {
  min: 1,
  max: 9999,
};

const ExperienceForm = (props: any) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    source: "",
    count: "",
    private: false,
    learned: "",
  });
  const [nameError, setNameError] = useState({
    isError: false,
    msg: "* - required",
  });
  const [bubbleLightning, setBubbleColor] = useState("inherit");

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

  const handleSaveBtnClicked = () => {
    if (!inputValues.name) {
      setNameError({
        isError: true,
        msg: "Name is required",
      });
      return;
    }
    console.log(inputValues);
  };

  return (
    <div className={`prof-forms`}>
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
              checked={props.private}
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
