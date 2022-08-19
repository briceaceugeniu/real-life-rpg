import React, { useEffect, useState } from "react";
import Rank from "./Rank";
import Avatar from "./Avatar";
import ProgressBar from "./ProgressBar";
import axios from "axios";
import { API_BASE_URL } from "../../helper-functions";
import { useNavigate } from "react-router-dom";

interface PropsInterface {
  token: string;
  render: number;
}

interface UserParamInterface {
  name: string;
  rank: number;
  exp: number;
  rank_name: string;
  next_level: number;
}

let userParam: UserParamInterface = {
  name: "_Lenny",
  rank: 1,
  exp: 0,
  next_level: 500,
  rank_name: "_Rekrut",
};

const AvatarArea = (props: PropsInterface) => {
  const [userData, setUserData] = useState(userParam);

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
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      })
      .then(function (response) {
        const data = response.data;

        if (data.status === "error") {
          console.error(data.msg);
          KillTokenGoToLoginPage();
        } else if (data.status === "success") {
          const {
            next_level,
            rank_name,
            user_exp,
            user_name,
            user_rank,
          } = data.data;

          setUserData({
            next_level: next_level,
            rank_name: rank_name,
            exp: user_exp,
            name: user_name,
            rank: user_rank,
          });
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
  }, [props.render]);

  return (
    <div className={`minH-60vh`}>
      <Rank level={userData.rank} rank_name={userData.rank_name} />
      <Avatar name={userData.name} rank_name={userData.rank_name} />
      <ProgressBar exp={userData.exp} next_level={userData.next_level} />
    </div>
  );
};

export default AvatarArea;
