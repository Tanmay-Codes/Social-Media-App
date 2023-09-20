import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProfileImgCard from "../../components/profilecomponents/ProfileImgCard";
import ProfileBioCard from "../../components/profilecomponents/ProfileBioCard";
import ProfileHeaderCard from "../../components/profilecomponents/ProfileHeaderCard";
import TopSkillsCard from "../../components/profilecomponents/TopSkillsCard";
import { Card, CardMedia, Typography } from "@mui/material";
import ImageGalleryCard from "../../components/profilecomponents/ImageGalleryCard";
import ProfileMediaCard from "../../components/profilecomponents/ProfileMediaCard";
import ProfileReviews from "../../components/profilecomponents/ProfileReviews";
import ProfileSkillProgress from "../../components/profilecomponents/ProfileSkillProgress";
import ProfileSampleTrack from "../../components/profilecomponents/ProfileSampleTrack";

function Profile({ mode, setMode }) {
  const StyledStack = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "430px",
    },
    transform: "translate(0, -13%)",
    borderRadius: "10px",
  }));

  return (
    <>
      <Navbar mode={mode} setMode={setMode} />
      <Stack>
        <Card>
          <CardMedia
            component="img"
            height="333px"
            width="100%"
            image="https://img.freepik.com/premium-photo/guitarist-stage-background-soft-blur-concept_34200-251.jpg"
            alt="Cover Photo"
          />
        </Card>
      </Stack>
      <StyledStack>
        <Stack direction={{ md: "row" }} width={{ sm: "100%" }} spacing={1}>
          <Stack flex={1} alignItems={{ sm: "center" }}>
            <ProfileImgCard />
          </Stack>
          <Stack flex={3} spacing={2}>
            <ProfileHeaderCard />
            <ProfileBioCard />
            <TopSkillsCard />

            <Typography
              sx={{ color: "primary.main", maxWidth: "900px" }}
              variant="h6"
            >
              "A long tagline something interesting written by musician here"
            </Typography>
            <Stack md={{ maxWidth: "430px" }}>
              <ProfileSampleTrack />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={{ md: "row" }} spacing={1}>
          <Stack flex={1} sx={{ maxHeight: "500px" }}>
            <ImageGalleryCard />
          </Stack>
          <Stack flex={1} sx={{ height: "500px" }}>
            <ProfileMediaCard />
          </Stack>
        </Stack>
        <Stack direction={{ md: "row" }} spacing={2} mt={2}>
          <Stack flex={1} sx={{ maxHeight: "400px" }}>
            <ProfileReviews />
          </Stack>
          <Stack flex={1} sx={{ height: "400px" }}>
            <ProfileSkillProgress />
          </Stack>
        </Stack>
      </StyledStack>
    </>
  );
}

export default Profile;
