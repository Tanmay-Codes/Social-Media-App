import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Box, Card, IconButton, Rating, Tooltip } from "@mui/material";

export default function NearbyUsersCard() {
  return (
    <Card sx={{ width: "100%", borderRadius: "10px" }}>
      <Typography variant="h6" mt={2} textAlign="center">
        Recomended Artists
      </Typography>
      <List
        sx={{
          width: "100%",
          maxHeight: "300px",
          bgcolor: "background.paper",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {musicians.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem
              sx={{ width: "100%" }}
              secondaryAction={
                <Tooltip title="Follow" arrow placement="right">
                  <IconButton
                    edge="end"
                    aria-label="Add Musician"
                    color="primary"
                  >
                    <AddBoxIcon />
                  </IconButton>
                </Tooltip>
              }
            >
              <ListItemAvatar>
                <Avatar alt={item.musician} src={item.img} />
              </ListItemAvatar>
              <ListItemText
                primary={item.musician}
                secondary={
                  <Box
                    component="span"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.speciality}
                    </Typography>
                    <Rating value={item.rating} size="small" readOnly />
                  </Box>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
}

const musicians = [
  {
    id: 1,
    musician: "Jimmy Hendrix",
    speciality: "Guitarist",
    img: "https://c4.wallpaperflare.com/wallpaper/409/733/185/jimi-hendrix-guitar-hd-jimi-hendrix-wallpaper-preview.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    musician: "Axel Rose",
    speciality: "Singer",
    img: "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2020/02/1-28.jpg?iv=446",
    rating: 4,
  },
  {
    id: 3,
    musician: "A R Rehman",
    speciality: "Composer",
    img: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/AR_Rahman_1200.jpg?itok=UHKerXfT",
    rating: 5,
  },
];
