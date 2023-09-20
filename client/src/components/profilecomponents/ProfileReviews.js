import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Tooltip,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
function ProfileReviews() {
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        title="Reviews"
        action={
          <Tooltip title="Get Reviews" arrow>
            <IconButton color="primary">
              <RateReviewIcon />
            </IconButton>
          </Tooltip>
        }
      />
      <CardContent>
        <List
          sx={{
            width: "100%",
            maxHeight: "200px",
            bgcolor: "background.paper",
            overflow: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {reviews.map((items) => (
            <ListItem key={items.id}>
              <ListItemAvatar>
                <Avatar src={items.userImg} alt={items.userName} />
              </ListItemAvatar>
              <Stack
                sx={{ width: "100%" }}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack flex={1}>
                  <ListItemText
                    primary={items.userName}
                    secondary={<Rating readOnly value={items.userRating} />}
                  />
                </Stack>
                <Stack flex={2}>
                  <ListItemText primary={items.userReview} />
                </Stack>
              </Stack>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default ProfileReviews;

const reviews = [
  {
    id: 1,
    userImg: "https://randomuser.me/api/portraits/men/52.jpg",
    userName: "Mohit Chauhan",
    userRating: 3,
    userReview: "Great Singing in my Birthday Party, Everyone loved it",
  },
  {
    id: 2,
    userImg: "https://randomuser.me/api/portraits/men/53.jpg",
    userName: "Subhash A",
    userRating: 5,
    userReview: "I love your guitar playing, Great solo performance",
  },
  {
    id: 3,
    userImg: "https://randomuser.me/api/portraits/men/54.jpg",
    userName: "Tanish Shah",
    userRating: 2,
    userReview:
      "The crowd Interaction was not good, and Band members were not at all co-ordinated",
  },
  {
    id: 4,
    userImg: "https://randomuser.me/api/portraits/men/55.jpg",
    userName: "Sukesh S",
    userRating: 3,
    userReview: "Great working with you, you have helped me make a good song",
  },
  {
    id: 5,
    userImg: "https://randomuser.me/api/portraits/men/56.jpg",
    userName: "John Doe",
    userRating: 5,
    userReview:
      "I am very impressed by your song writing and song mixing skills",
  },
  {
    id: 6,
    userImg: "https://randomuser.me/api/portraits/men/57.jpg",
    userName: "Someone",
    userRating: 1,
    userReview: "Someone who hates him",
  },
];
