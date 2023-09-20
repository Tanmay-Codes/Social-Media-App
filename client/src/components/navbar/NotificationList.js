import * as React from "react";
import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ListItemButton } from "@mui/material";

export default function NotificationList() {
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
            <ListItemText
              primary={
                <>{items.postTitle === "" ? items.postdesc : items.postTitle}</>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {items.userName}
                  </Typography>
                  {"—"}
                  {items.like ? "has liked your post —" : "commented —"}
                  {items.comment === "" ? "" : items.comment}
                </React.Fragment>
              }
            />
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
    postdesc:
      "Something cool written in this section about the post and as well as the some great insights as well",
    comment: "",
    like: true,
    postImg: "",
    date: "November 5, 2022",
  },
  {
    id: 2,
    userName: "James Wayne",
    speciality: "Guitarist",
    postTitle: "",
    userImg: "https://randomuser.me/api/portraits/men/18.jpg",
    postdesc:
      "Something cool written in this section about the post and as well as the some great insights as well",
    comment: "This post is so cool I love to know more",
    like: true,
    postImg:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    date: "November 6, 2022",
  },
  {
    id: 3,
    userName: "Rimi Stein",
    postTitle: "The Local Festival",
    speciality: "Songwriter and Composer",
    userImg: "https://randomuser.me/api/portraits/men/22.jpg",
    postdesc:
      "Something cool written in this section about the post and as well as the some great insights as well",
    comment:
      "Something cool commented here in this post as per the author experience and yada yada",
    like: false,
    postImg:
      "https://images.unsplash.com/photo-1523689119443-df96632084a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    date: "November 7, 2022",
  },
  {
    id: 4,
    userName: "Johm Doe",
    postTitle: "Post title written here",
    speciality: "composer",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    postdesc:
      "Something cool written in this section about the post and as well as the some great insights as well",
    comment: "I have commented something",
    like: false,
    postImg:
      "https://images.unsplash.com/photo-1523689119443-df96632084a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    date: "November 7, 2022",
  },
];
