import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import AvatarArea from "./Avatar/AvatarArea";
import ExperienceArea from "./Experience/ExperienceArea";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MainPage = () => {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <Header />
        </Grid>
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
