import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";

const numberInputProps = {
  min: 1,
};

const ProfessionalForm = (props: any) => {
  const label = props.label ? props.label : "Item";

  return (
    <div className={`prof-forms`}>
      <TextField
        size="small"
        fullWidth
        sx={{ m: 1 }}
        id="outlined-basic"
        label={`${label} name`}
        variant="outlined"
      />
      <TextField
        size="small"
        fullWidth
        sx={{ m: 1 }}
        id="outlined-basic"
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
      {props.count && (
        <TextField
          size="small"
          sx={{ m: 1 }}
          id="outlined-basic"
          label={props.count}
          variant="outlined"
          type="number"
          inputProps={numberInputProps}
        />
      )}

      <TextField
        label="Learned things"
        sx={{ m: 1 }}
        fullWidth
        multiline
        size="small"
        maxRows={4}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TipsAndUpdatesTwoToneIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default ProfessionalForm;
