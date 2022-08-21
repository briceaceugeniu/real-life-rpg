import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";

interface PropsInterface {
  exp: number;
  next_level: number;
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    placement="top"
    enterTouchDelay={500}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const ProgressBar = (props: PropsInterface) => {
  return (
    <div className={`d-flex center-div f-d-col`}>
      <div style={{ marginTop: "4rem" }}>
        <span className={`font-mono`} style={{ fontSize: "1.2em" }}>
          Exp
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Experience calculator</Typography>
                <ul>
                  <li>Name - 50 pt.</li>
                  <li>Source - 30 pt.</li>
                  <li>1 pt / Page</li>
                  <li>0.75 pt / Minute</li>
                  <li>2 pt / Km</li>
                  <li>Learned - 1 pt / character</li>
                </ul>
              </React.Fragment>
            }
          >
            <sup>
              <InfoOutlinedIcon sx={{ fontSize: 15, cursor: "help" }} />
            </sup>
          </HtmlTooltip>
          {props.exp} / {props.next_level}
        </span>
      </div>
      <progress className={`p-bar`} max={props.next_level} value={props.exp}>
        {props.exp}
      </progress>
    </div>
  );
};

export default ProgressBar;
