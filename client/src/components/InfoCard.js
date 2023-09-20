import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import { red } from "@mui/material/colors";

import { AvatarGroup, Button } from "@mui/material";
import { Stack } from "@mui/system";
import InputModal from "./InputModal";

export default function InfoCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <InputModal showrate="yes" button="Apply" open={open} setOpen={setOpen} />

      <Card
        elevation={1}
        sx={{ bgcolor: "secondary", marginBottom: "10px", width: "100%" }}
      >
        <CardHeader
          sx={{ paddingBottom: "0" }}
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="Musician Name"
              src={props.userImg}
            ></Avatar>
          }
          action={
            <Typography sx={{ padding: "2px" }} color="inherit" variant="body1">
              Rs.{props.rate}/Hour
            </Typography>
          }
          title={
            <>
              {props.userName} <br />
              <Typography
                sx={{ display: "inline" }}
                variant="body2"
                color="inherit"
              >
                {props.designation}, {props.from}
              </Typography>
            </>
          }
          subheader={props.datePosted}
        />
        <CardContent>
          <Stack spacing={4}>
            <Stack>
              <Typography variant="h6" color="inherit">
                {props.gigTitle}
              </Typography>
              <Typography variant="body1" color="inherit">
                {props.gigDesc}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center">
                <EventIcon />
                {props.dateEvent}
              </Stack>
              <Stack direction="row" alignItems="center">
                {" "}
                <ShareLocationIcon />
                {props.venu}
              </Stack>
              <Stack direction="row" alignItems="center">
                <AccessTimeIcon />
                {props.inTime} - {props.outTime}
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions disableSpacing>
          <Stack direction="row" width="100%" justifyContent="space-between">
            <Stack direction="row" spacing={1} alignItems="center">
              <AvatarGroup spacing="small">
                <Avatar
                  alt="Remy Sharp"
                  src="https://randomuser.me/api/portraits/men/60.jpg"
                />
                <Avatar
                  alt="Travis Howard"
                  src="https://randomuser.me/api/portraits/men/61.jpg"
                />
                <Avatar
                  alt="Travis Howard"
                  src="https://randomuser.me/api/portraits/men/62.jpg"
                />
              </AvatarGroup>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontSize: "12px" }}
              >
                15+ Musicians applied
              </Typography>
            </Stack>
            <Button variant="outlined" onClick={handleOpen}>
              Apply Now
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </>
  );
}
