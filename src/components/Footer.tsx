import React from "react";
import { Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Footer = () => {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`d-flex version-area`}
      style={{ alignItems: "center", position: "relative" }}
    >
      <small className={`d-flex center-div`}>
        Alpha&nbsp;
        <Tooltip
          title="Alpha: This is a pre-release version of the application to show in general what the application will do. Some functions may be buggy or not present."
          arrow
          disableFocusListener
        >
          <InfoOutlinedIcon sx={{ fontSize: 15 }} />
        </Tooltip>
        &nbsp; v 0.01
      </small>
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
