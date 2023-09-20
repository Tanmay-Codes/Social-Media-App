import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Card, IconButton, Tooltip } from "@mui/material";

export default function GigsShowCard() {
  return (
    <Card sx={{ width: "100%", borderRadius: "10px" }}>
      <Typography variant="h6" mt={2} textAlign="center">
        Gigs Around You!
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
                <Tooltip title="Show Gig" arrow placement="right">
                  <IconButton edge="end" aria-label="work" color="primary">
                    <WorkIcon />
                  </IconButton>
                </Tooltip>
              }
            >
              <ListItemAvatar>
                <Avatar alt={item.musician} src={item.img} />
              </ListItemAvatar>
              <ListItemText
                primary={item.gigTitle}
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
                      By — {item.gigBy}
                    </Typography>
                    Rs.{item.gigRates}/Hour
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
    gigTitle: "Need A Guitarist",
    gigBy: "Sanju A Kumar",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
    gigRates: 450,
  },
  {
    id: 2,
    gigTitle: "Band Required",
    gigBy: "Mukesh",
    img: "https://randomuser.me/api/portraits/men/53.jpg",
    gigRates: 1000,
  },
  {
    id: 3,
    gigTitle: "Composer Needed",
    gigBy: "Himanshu",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
    gigRates: 1150,
  },
];
