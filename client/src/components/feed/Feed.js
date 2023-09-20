import { List, ListItem, Stack } from "@mui/material";
import PostsCard from "./PostsCard";
import React from "react";
import UserPostBox from "./UserPostBox";

function Feed() {
  return (
    <Stack flex={2}>
      <UserPostBox />
      <List
        sx={{
          maxHeight: "100vh",
          overflow: "auto",
          borderRadius: "10px",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        disablePadding
      >
        {posts.map((item) => (
          <ListItem disablePadding sx={{ marginBottom: "5px" }} key={item.id}>
            <PostsCard
              userName={item.userName}
              postTitle={item.postTitle}
              userImg={item.userImg}
              postDesc={item.postDesc}
              postImg={item.postImg}
              date={item.date}
              speciality={item.speciality}
              echo={item.echo}
              likes={item.like}
              saves={item.saves}
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
const posts = [
  {
    id: 1,
    userName: "Jimmy Shergil",
    speciality: "Bassist",
    postTitle: "",
    userImg: "https://randomuser.me/api/portraits/men/12.jpg",
    postDesc: "Just A simple post without anything",
    postImg: "",
    like: 120,
    echo: 25,
    saves: 45,
    date: "November 5, 2022",
  },
  {
    id: 2,
    userName: "James Wayne",
    speciality: "Guitarist",
    postTitle: "Guitarists usually Goes with flor",
    userImg: "https://randomuser.me/api/portraits/men/18.jpg",
    postDesc:
      "Something cool written in this section about the Guitar post and as well as the some great tuning insights of music",
    postImg:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    like: 10,
    echo: 5,
    saves: 5,
    date: "November 6, 2022",
  },
  {
    id: 3,
    userName: "Rimi Stein",
    postTitle: "The Local Festival",
    speciality: "Songwriter and Composer",
    userImg: "https://randomuser.me/api/portraits/men/22.jpg",
    postDesc:
      "Something cool written in this section about the local festival post and as well as the some great insights of the tradition",
    postImg:
      "https://images.unsplash.com/photo-1523689119443-df96632084a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",

    like: 12,
    echo: 2,
    saves: 4,
    date: "November 7, 2022",
  },
  {
    id: 4,
    userName: "Johm Doe",
    postTitle: "Guitarist",
    speciality: "composer",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    postDesc:
      "Something cool written in this section about the post and as well as the some great insights as well",
    postImg:
      "https://images.unsplash.com/photo-1523689119443-df96632084a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",

    like: 100,
    echo: 0,
    saves: 0,
    date: "November 7, 2022",
  },
];

export default Feed;
