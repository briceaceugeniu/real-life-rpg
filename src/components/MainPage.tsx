import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import AvatarArea from "./Avatar/AvatarArea";
import ExperienceArea from "./Experience/ExperienceArea";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  let navigate = useNavigate();
  const [logSuccess, setLogSuccess] = useState(false);

  useEffect(() => {
    if (!logSuccess) navigate("/login");
  });

  return (
    <Container maxWidth={false}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={5}>
          <AvatarArea />
        </Grid>
        <Grid item xs={12} md={7}>
          <ExperienceArea />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
