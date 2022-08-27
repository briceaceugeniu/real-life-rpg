import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  styled,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import { API_BASE_URL } from "../../helper-functions";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import MicIcon from "@mui/icons-material/Mic";
import ArticleIcon from "@mui/icons-material/Article";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import DirectionsBikeTwoToneIcon from "@mui/icons-material/DirectionsBikeTwoTone";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";

interface PropsInterface {
  token: string;
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: "inherit",
  margin: "5px 10px",
}));

const EXP_TYPES_ICONS = (type: string) => {
  switch (type.toLowerCase()) {
    case "book":
      return <MenuBookOutlinedIcon />;
    case "podcast":
      return <MicIcon />;
    case "article":
      return <ArticleIcon />;
    case "tutorial":
      return <YouTubeIcon />;
    case "presentation":
      return <RecordVoiceOverIcon />;
    case "ride":
      return <DirectionsBikeTwoToneIcon />;
    default:
      return <ExploreOutlinedIcon />;
  }
};

const PastExperiences = (props: PropsInterface) => {
  const [modal, setModal] = useState({
    isOpen: false,
    data: {
      name: "",
      type: "",
      subtype: "",
      created: "",
      source: "",
      count: null,
      count_type: "",
      private: "",
      learned: "",
    },
  });
  const [list, setList] = useState([]);
  const matches = useMediaQuery("(min-width:600px)");

  const modal_style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: matches ? "50%" : "90%",
    maxHeight: "70%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/rlrpg_user_exp.php", {
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
        } else if (data.status === "success") {
          if (data.data.length !== 0) {
            setList(data.data);
          }
        } else {
          console.error("Invalid fetched data format.");
        }
      })
      .catch(function (error) {
        console.error(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const handleExpItemClicked = (id: number) => {
    const sel_exp: any = list.find((exp: any) => exp.id === id);
    console.log(sel_exp);
    setModal({
      isOpen: true,
      data: {
        name: sel_exp.name,
        type: sel_exp.exp_type,
        subtype: sel_exp.exp_subtype,
        created: sel_exp.create_at,
        count: sel_exp.count,
        count_type: sel_exp.count_type,
        private: sel_exp.private === 0 ? "Is public" : "Is Private",
        source:
          sel_exp.source.length > 30
            ? sel_exp.source.substring(0, 30) + "..."
            : sel_exp.source,
        learned: sel_exp.learned,
      },
    });
  };

  const exp_list =
    list.length === 0 ? (
      <div>Empty so far</div>
    ) : (
      list.map((exp: any) => {
        const icon = EXP_TYPES_ICONS(exp.exp_subtype);
        return (
          <ListItemButton
            divider
            dense
            onClick={() => handleExpItemClicked(exp.id)}
            key={exp.id}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText
              primary={
                <Box
                  component="div"
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    maxWidth: "100%",
                  }}
                >
                  {exp.name}
                </Box>
              }
              secondary={`Learned: ${exp.learned}`}
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <div
              style={{
                marginLeft: "2em",
                color: "darkolivegreen",
                fontWeight: "bold",
              }}
            >
              +&nbsp;{exp.total_exp}&nbsp;Exp
            </div>
          </ListItemButton>
        );
      })
    );

  function isValidHttpUrl(val: string) {
    let url;

    try {
      url = new URL(val);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  return (
    <Grid item xs={12} md={12} sx={{ overflow: "auto", height: "83%" }}>
      <Demo>
        <List dense>{exp_list}</List>
      </Demo>
      <Modal
        open={modal.isOpen}
        sx={{ margin: 3 }}
        onClose={() => setModal({ ...modal, isOpen: false })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={modal_style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modal.data.name}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <span className={`font-bold`}>Created:</span> {modal.data.created}
          </Typography>
          <Typography>
            {modal.data.type ? (
              <>
                <span className={`font-bold`}>Type: </span>
                {modal.data.type}
              </>
            ) : (
              ""
            )}
          </Typography>
          <Typography>
            {modal.data.subtype ? (
              <>
                <span className={`font-bold`}>Subtype: </span>
                {modal.data.subtype}
              </>
            ) : (
              ""
            )}
          </Typography>
          <Typography>
            <span className={`font-bold`}>Privacy:</span> {modal.data.private}
          </Typography>
          <Typography>
            {modal.data.count ? (
              <>
                <span className={`font-bold`}>Count: </span>
                {modal.data.count} {modal.data.count_type}
              </>
            ) : (
              ""
            )}
          </Typography>
          <Typography>
            {modal.data.source ? (
              <>
                <span className={`font-bold`}>Source: </span>
                {isValidHttpUrl(modal.data.source) ? (
                  <a href={modal.data.source}>{modal.data.source}</a>
                ) : (
                  <>{modal.data.source}</>
                )}
              </>
            ) : (
              ""
            )}
          </Typography>
          <Typography>
            {modal.data.learned ? (
              <>
                <span className={`font-bold`}>Learned: </span>
                {modal.data.learned}
              </>
            ) : (
              ""
            )}
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};

export default PastExperiences;
