import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
function ProfileHeaderCard() {
  return (
    <Card>
      <CardContent>
        <Stack
          sx={{ width: "100%" }}
          direction={{ sm: "row" }}
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack sx={{ width: "150px" }}>
            <Typography color="primary" variant="h6">
              <CountUp end={5} />+ years of Exp
            </Typography>
          </Stack>
          <Stack sx={{ width: "150px" }}>
            <Typography color="primary" variant="h6">
              <CountUp end={100} />+ Gigs{" "}
            </Typography>
          </Stack>
          <Stack sx={{ width: "150px" }}>
            <Typography color="primary" variant="h6">
              <CountUp end={50} />+ Songs
            </Typography>
          </Stack>
          <Button variant="contained">Follow Me</Button>
          <Button variant="contained">Send Message</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProfileHeaderCard;
