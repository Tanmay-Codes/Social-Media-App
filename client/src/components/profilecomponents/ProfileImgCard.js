import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Breadcrumbs, Link, Rating } from "@mui/material";

export default function ProfileImgCard() {
  return (
    <Card
      sx={{
        maxWidth: 400,
        maxHeight: 600,
        borderRadius: "10px",
        marginBottom: "18px",
      }}
    >
      <CardMedia
        component="img"
        height="280px"
        image="https://img.freepik.com/free-photo/male-dj-taking-care-music-entertainment-party_23-2149658401.jpg?w=360&t=st=1669807626~exp=1669808226~hmac=3080c79a29f5982993947e224d2541f7fc134443fad097e2f63780d04a9a4732"
        alt="Musician Image"
        sx={{ borderRadius: "10px" }}
      />
      <CardContent>
        <Stack justifyContent="center" alignItems="center" width="100%">
          <Stack alignItems="center" justifyContent="center">
            <Typography variant="h5" sx={{ margin: 0.5 }}>
              Musicians Name
            </Typography>
            <Typography
              variant="span"
              color="text.primary"
              sx={{ display: "flex", alignItems: "center", margin: 0.5 }}
            >
              Guitarist and Song Writer
            </Typography>
            <Typography
              variant="span"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center", margin: 0.5 }}
            >
              <Breadcrumbs separator="|">
                <Typography variant="body2">Age: 29</Typography>
                <Typography variant="body2">Origin: India</Typography>
              </Breadcrumbs>
            </Typography>
          </Stack>
          <Rating value={4.5} readOnly />
          <Breadcrumbs separator="|" mt={1}>
            <Link underline="none" href="#" color="inherit">
              100K Followers
            </Link>
            <Link underline="none" href="#" color="inherit">
              50 Following
            </Link>
          </Breadcrumbs>
        </Stack>
      </CardContent>
    </Card>
  );
}
