import * as React from "react";
// import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

export default function CommentList(props) {
  const [like, setLike] = React.useState(false);
  return (
    <ListItem
      alignItems="flex-start"
      sx={{ width: "100%" }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="like-button"
          onClick={() => setLike(!like)}
        >
          {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={props.img} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            {props.userName}
            <Typography
              sx={{ display: "inline" }}
              variant="body2"
              color="inherit"
            >
              {","} {props.speciality}
            </Typography>
          </>
        }
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline", width: "100%" }}
              component="span"
              variant="body2"
              color="text.primary"
              width="100%"
            >
              {props.comment}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
