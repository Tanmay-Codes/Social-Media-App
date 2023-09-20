import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import ReactPlayer from "react-player";
function ProfileMediaCard() {
  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader
        title="Featured Videos"
        action={
          <Tooltip title="Add Videos" arrow>
            <IconButton color="primary">
              <AddToPhotosIcon />
            </IconButton>
          </Tooltip>
        }
      />
      <CardContent>
        <Stack sx={{ width: "100%", height: "400px" }} spacing={1}>
          <ReactPlayer
            controls
            height="400px"
            width="100%"
            url="https://youtu.be/tAGnKpE4NCI"
          />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProfileMediaCard;
