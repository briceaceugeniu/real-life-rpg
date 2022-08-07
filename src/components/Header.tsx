import React from "react";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <Container>
      <div className={`header-txt d-flex space-btwn`}>
        <div>Real Life RPG Game (Portfolio) </div>
        <small>v 0.001 PreAlfa</small>
      </div>
    </Container>
  );
};

export default Header;
