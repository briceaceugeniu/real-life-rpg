import React from "react";
import { Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Container>
      <div className={`header-txt d-flex space-btwn`}>
        <div>Real Life RPG Game</div>
        <div className={`d-flex center-div`}>
          <small>v 0.01 Alfa</small>
          <GitHubIcon
            sx={{ marginLeft: "10px" }}
            color={`action`}
            className={`github-icon`}
            onClick={() =>
              openInNewTab("https://github.com/briceaceugeniu/real-life-rpg-UI")
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Header;
