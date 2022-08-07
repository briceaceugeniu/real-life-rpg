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

  const label = props.label ? props.label : "Item";

  const handleFieldChanged = (data: any, key: string) => {
    if (nameError.isError) {
      setNameError({ isError: false, msg: "* - required" });
    }

    setInputValues((obj) => ({ ...obj, [key]: data.target.value }));
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
        sx={{ m: 1 }}
        id="outlined-basic"
        label={`${label} name`}
        value={inputValues.name}
        variant="outlined"
      />
      <TextField
        size="small"
        fullWidth
        onChange={(e) => handleFieldChanged(e, "source")}
        sx={{ m: 1 }}
        id="outlined-basic"
        value={inputValues.source}
        label="Source"
        variant="outlined"
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
            id="outlined-basic"
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
        onChange={(e) => handleFieldChanged(e, "learned")}
        size="small"
        maxRows={4}
        value={inputValues.learned}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TipsAndUpdatesTwoToneIcon />
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
