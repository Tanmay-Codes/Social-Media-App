import { Card, Typography } from "@mui/material";
import React from "react";
import { Stack } from "@mui/system";
import HeadphonesIcon from "@mui/icons-material/Headphones";
function ProfileSampleTrack() {
  return (
    <Card>
      <Stack direction="row" alignItems="center" spacing={1} padding={1}>
        <HeadphonesIcon sx={{ color: "primary.main" }} />
        <Typography variant="h6" color="primary">
          Play Me
        </Typography>
        <Stack>
          <audio controls>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></source>
          </audio>
        </Stack>
      </Stack>
    </Card>
  );
}

export default ProfileSampleTrack;
