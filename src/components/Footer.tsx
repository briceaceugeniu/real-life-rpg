import React from "react";
import { Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`d-flex center-div version-area`}>
      <small>v 0.01 Alfa</small>
      <Tooltip title={`Visit the project on Github`}>
        <GitHubIcon
          sx={{ marginLeft: "10px" }}
          color={`action`}
          className={`github-icon`}
          onClick={() =>
            openInNewTab("https://github.com/briceaceugeniu/real-life-rpg-UI")
          }
        />
      </Tooltip>
    </div>
  );
};

export default Footer;
