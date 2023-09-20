import { Avatar, Card, IconButton, TextField, Tooltip } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MicIcon from "@mui/icons-material/Mic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ArticleIcon from "@mui/icons-material/Article";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { Stack } from "@mui/system";
import { currentUser } from "../../utils/currentUser";

function UserPostBox() {
  return (
    <Card sx={{ padding: "18px", marginBottom: "10px", borderRadius: "10px" }}>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: "100%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            sx={{
              height: "70px",
              width: "70px",
            }}
            src={
              currentUser.userImage ||
              "https://randomuser.me/api/portraits/lego/5.jpg"
            }
          ></Avatar>
          <TextField
            variant="outlined"
            sx={{ width: "100%" }}
            placeholder="Start a post"
          />
          <IconButton color="primary">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack spacing={2} direction="row">
          <Tooltip title="Insert Photo" arrow>
            <IconButton color="primary">
              <InsertPhotoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Insert Audio" arrow>
            <IconButton color="primary">
              <MicIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Capture Image" arrow>
            <IconButton color="primary">
              <CameraAltIcon />
            </IconButton>
          </Tooltip>
          {console.log(currentUser)}
          <Tooltip title="Write an article" arrow>
            <IconButton color="primary">
              <ArticleIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Card>
  );
}

export default UserPostBox;
