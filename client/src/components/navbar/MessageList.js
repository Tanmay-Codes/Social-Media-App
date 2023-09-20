import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ListItemButton } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import { Box } from "@mui/system";

export default function MessageList() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        maxHeight: 500,
      }}
    >
      {notification.map((items) => (
        <React.Fragment key={items.id}>
          <ListItemButton alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="user Image" src={items.userImg} />
            </ListItemAvatar>
            <ListItemText primary={<>{items.userMsg}</>} />
          </ListItemButton>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}

const notification = [
  {
    id: 1,
    userName: "Jimmy Shergil",
    speciality: "Bassist",
    postTitle: "Unique title here",
    userImg: "https://randomuser.me/api/portraits/men/12.jpg",
    userMsg: "I never back down my words, thats my musical way!!",
    hasDoc: false,
    msgImg: "",
    date: "November 5, 2022",
  },
  {
    id: 2,
    userName: "James Wayne",
    speciality: "Guitarist",
    postTitle: "",
    userImg: "https://randomuser.me/api/portraits/men/18.jpg",
    userMsg: "Here is my message you will be a great musician one day",
    hasDoc: false,
    msgImg:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    date: "November 6, 2022",
  },
  {
    id: 3,
    userName: "Rimi Stein",
    speciality: "Songwriter and Composer",
    userImg: "https://randomuser.me/api/portraits/men/22.jpg",
    userMsg: "Never Give up, Hope it dream it and I am with you",
    hasDoc: false,
    msgImg:
      "https://images.unsplash.com/photo-1523689119443-df96632084a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    date: "November 7, 2022",
  },
  {
    id: 4,
    userName: "Johm Doe",
    postTitle: "Post title written here",
    speciality: "composer",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    userMsg: "All the best for your performance, Good speed!!",
    hasDoc: false,
    msgImg:
      "https://images.unsplash.com/photo-1523689119443-df96632084a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    date: "November 7, 2022",
  },
];
