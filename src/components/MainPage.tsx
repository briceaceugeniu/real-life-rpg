import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Container, Grid } from "@mui/material";
import AvatarArea from "./Avatar/AvatarArea";
import ExperienceArea from "./Experience/ExperienceArea";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Footer from "./Footer";
export const ChangedExpContext = createContext<any>({});
const MainPage = () => {
  let navigate = useNavigate();
  const [render, setRender] = useState(0);

  const cookies = new Cookies();
  const auth_token = cookies.get("auth_token");

  useEffect(() => {
    if (!auth_token) {
      navigate("/login");
    }
  });

  return (
    <ChangedExpContext.Provider value={{ render, setRender }}>
      <Container maxWidth={false}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <AvatarArea token={auth_token} render={render} />
          </Grid>
          <Grid item xs={12} md={7}>
            <ExperienceArea token={auth_token} />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </ChangedExpContext.Provider>
  );
};

export default MainPage;
