import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
} from "@mui/material";

import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
export default function ImageGalleryCard() {
  return (
    <Card>
      <CardHeader
        title="Featured Images"
        action={
          <Tooltip title="Add Photos" arrow>
            <IconButton color="primary">
              <AddToPhotosIcon />
            </IconButton>
          </Tooltip>
        }
      />
      <CardContent>
        <Box sx={{ maxWidth: 700, height: 450, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </CardContent>
    </Card>
  );
}

const itemData = [
  {
    img: "https://img.freepik.com/free-vector/silhouette-excited-audience-colourful-music-notes-background_1048-14332.jpg?w=740&t=st=1669801052~exp=1669801652~hmac=022cb83eb645a3146cc0edaf7a8351d3e956f50d4d45b17a930c50d0f7bc5813",
    title: "Bed",
  },
  {
    img: "https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg?w=740&t=st=1669801469~exp=1669802069~hmac=e977ecb3052e71a0b116fc45b60109e41fd9e0611e3878014f35d3a3ebc475ef",
    title: "Books",
  },
  {
    img: "https://img.freepik.com/free-photo/male-dj-party-charge-music-entertainment_23-2149658399.jpg?w=996&t=st=1669801257~exp=1669801857~hmac=a7479271bb87e5eb70cb34efb2f34ed322772a8e4120a158d52eeab224de5065",
    title: "Sink",
  },
  {
    img: "https://img.freepik.com/free-photo/view-dj-equipment-electronics_23-2149658441.jpg?w=996&t=st=1669801274~exp=1669801874~hmac=75c6b97b05d6a5b4dc6cd1f137c1cfd8d2d4e3a7f2aa26e87c460aee0bc610cf",
    title: "Kitchen",
  },
  {
    img: "https://img.freepik.com/free-vector/world-music-day-gradient-background_23-2149397899.jpg?w=996&t=st=1669801326~exp=1669801926~hmac=ccc47dafebe0fe5748fab2ace5402443e9560bb4e4b78de953ecfafb5a83dcc5",
    title: "Blinds",
  },
  {
    img: "https://img.freepik.com/free-photo/caucasian-woman-s-portrait-isolated-blue-background-multicolored-neon-light_155003-32526.jpg?w=996&t=st=1669801341~exp=1669801941~hmac=2f76da59c3f6ecb8572326c6eb407187cb125269397919eed09aa99b04ae4d57",
    title: "Chairs",
  },
  {
    img: "https://img.freepik.com/free-vector/music-record-vinyl-with-audio-beats_1017-30116.jpg?w=740&t=st=1669801363~exp=1669801963~hmac=a33f88f588f8aa80c22aab713a56848a23747d0316e447a4f7f0382d588c0e65",
    title: "Laptop",
  },
  {
    img: "https://img.freepik.com/premium-vector/template-banner-poster-music-melody-note-dancing-flow-song-concert-theme_31949-1592.jpg",
    title: "Doors",
  },
  {
    img: "https://img.freepik.com/free-vector/colorful-equalizer-wave-background_52683-33072.jpg?w=996&t=st=1669801487~exp=1669802087~hmac=f30dc89336a033dd0a492b2f65f6f2c01d062b924795b8293d34decd7efd8691",
    title: "Coffee",
  },
  {
    img: "https://img.freepik.com/premium-photo/guitarist-stage-background-soft-blur-concept_34200-251.jpg",
    title: "Storage",
  },
  {
    img: "https://img.freepik.com/free-vector/musical-notes-background_53876-91640.jpg?w=996&t=st=1669801251~exp=1669801851~hmac=ee9e5e970a231afd3583da1eea6489c02ef548dd6306b741e523da5dbd2eba10",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
