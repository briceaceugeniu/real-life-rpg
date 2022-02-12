import React, { useState } from "react";
import CelebrationIcon from "@mui/icons-material/Celebration";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const WigArea = () => {
  const [msgVisible, setMsgVisible] = useState(false);

  return (
    <div style={{ marginTop: "50px" }}>
      <Button variant="contained" onClick={() => setMsgVisible(!msgVisible)}>
        Click here!
      </Button>
      {msgVisible && (
        <div className="cardCenter">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://media1.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif?cid=790b7611fb061b8b1c04bc26e91c23b15773d23be97ab9f5&rid=giphy.gif&ct=g"
                alt="g"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  La multi ani!!!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <CelebrationIcon sx={{ color: "green" }} />
                  <CelebrationIcon sx={{ color: "red" }} />
                  <CelebrationIcon sx={{ color: "blue" }} />
                  <CelebrationIcon sx={{ color: "orange" }} />
                  <CelebrationIcon sx={{ color: "yellow" }} />
                  <h1>35</h1>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WigArea;
