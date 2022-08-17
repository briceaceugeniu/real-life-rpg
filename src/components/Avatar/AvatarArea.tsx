import React, { useEffect } from "react";
import Rank from "./Rank";
import Avatar from "./Avatar";
import ProgressBar from "./ProgressBar";
import axios from "axios";
import { API_BASE_URL } from "../../helper-functions";

interface PropsInterface {
  token: string;
}

const AvatarArea = (props: PropsInterface) => {
  useEffect(() => {
    axios
      .get(API_BASE_URL + "/rlrpg_fetch_user_data.php", {
        params: {
          auth_token: props.token,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  });

  return (
    <div className={`minH-60vh`}>
      <Rank />
      <Avatar />
      <ProgressBar />
    </div>
  );
};

export default AvatarArea;
