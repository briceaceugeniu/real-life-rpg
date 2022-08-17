import React, { useEffect } from "react";
import Rank from "./Rank";
import Avatar from "./Avatar";
import ProgressBar from "./ProgressBar";
import axios from "axios";
import { API_BASE_URL } from "../../helper-functions";
import { useNavigate } from "react-router-dom";

interface PropsInterface {
  token: string;
}

interface UserParamInterface {
  name: string;
  rank: number;
  exp: number;
  rank_name: string;
  next_level: number;
}

let userParam: UserParamInterface = {
  name: "Lenny",
  rank: 1,
  exp: 0,
  next_level: 280,
  rank_name: "Rekrut",
};

const AvatarArea = (props: PropsInterface) => {
  let navigate = useNavigate();

  const KillTokenGoToLoginPage = () => {
    // TODO kill token session
    navigate("/login");
  };

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/rlrpg_fetch_user_data.php", {
        params: {
          auth_token: props.token,
        },
      })
      .then(function (response) {
        console.log(response);
        const data = response.data;

        if (data.status === "error") {
          console.error(data.msg);
          // KillTokenGoToLoginPage();
        } else if (data.status === "success") {
          const {
            next_level,
            rank_name,
            user_exp,
            user_name,
            user_rank,
          } = data.data;

          if (next_level && rank_name && user_exp && user_name && user_rank) {
            userParam.next_level = next_level;
            userParam.rank_name = rank_name;
            userParam.exp = user_exp;
            userParam.name = user_name;
            userParam.rank = user_rank;
          }
        } else {
          console.error("Invalid fetched data format.");
          KillTokenGoToLoginPage();
        }
      })
      .catch(function (error) {
        console.error(error);
        KillTokenGoToLoginPage();
      })
      .then(function () {
        // always executed
      });
  });

  return (
    <div className={`minH-60vh`}>
      <Rank level={userParam.rank} rank_name={userParam.rank_name} />
      <Avatar name={userParam.name} rank_name={userParam.rank_name} />
      <ProgressBar exp={userParam.exp} next_level={userParam.next_level} />
    </div>
  );
};

export default AvatarArea;
