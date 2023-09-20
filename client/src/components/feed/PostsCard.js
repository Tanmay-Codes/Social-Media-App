import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentList from "./CommentList";
import AddCommentIcon from "@mui/icons-material/AddComment";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import {
  Divider,
  InputAdornment,
  List,
  ListItemButton,
  Menu,
  TextField,
} from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostsCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [like, setLike] = React.useState(false);
  const [save, setSave] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={1} sx={{ bgcolor: "secondary", width: "100%" }}>
      <CardHeader
        sx={{ paddingBottom: "0" }}
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="Musician Name"
            src={props.userImg}
          ></Avatar>
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              sx={{ width: "100%" }}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <List sx={{ width: "100%" }}>
                <ListItemButton>Delete</ListItemButton>
                <ListItemButton>Report</ListItemButton>
              </List>
            </Menu>
          </>
        }
        title={
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
        subheader={props.date}
      />
      <CardContent>
        <Typography variant="h6" color="inherit">
          {props.postTitle}
        </Typography>
        <Typography variant="body1" color="inherit">
          {props.postDesc}
        </Typography>
      </CardContent>
      {props.postImg ? (
        <CardMedia component="img" height="450" image={props.postImg} />
      ) : (
        <></>
      )}
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => setLike(!like)}
        >
          {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>

        <Typography variant="body2">{props.likes} Likes</Typography>
        <IconButton aria-label="echo">
          <GraphicEqIcon />
        </IconButton>
        <Typography variant="body2">
          {props.echo}
          {" Echos"}
        </Typography>
        <IconButton aria-label="bookmark" onClick={() => setSave(!save)}>
          {save ? <TurnedInIcon /> : <TurnedInNotIcon />}
        </IconButton>
        <Typography variant="body2">
          {props.saves}
          {" saves"}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Typography variant="body2">{comments.length} Reviews</Typography>
      </CardActions>
      <Collapse
        in={expanded}
        sx={{ width: "100%" }}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          {/* -------Comments start-------- */}
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              maxHeight: 200,
              overflow: "auto",
            }}
          >
            {comments.map((items) => (
              <React.Fragment key={items.id}>
                <CommentList
                  userName={items.musician}
                  speciality={items.speciality}
                  img={items.img}
                  comment={items.comment}
                />
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>
          {/*------------- Comments End--------- */}
          <TextField
            fullWidth
            id="input-with-icon-textfield"
            placeholder="Send Reviews"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <AddCommentIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}
const comments = [
  {
    id: 1,
    speciality: "Guitarist",
    musician: "Jimmy Hendrix",
    img: "https://c4.wallpaperflare.com/wallpaper/409/733/185/jimi-hendrix-guitar-hd-jimi-hendrix-wallpaper-preview.jpg",
    comment:
      "I really like the way you think and I always follow your posts Thanks man",
  },
  {
    id: 2,
    musician: "Axel Rose",
    speciality: "Singer",
    img: "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2020/02/1-28.jpg?iv=446",
    comment:
      "I really like the way you think and I always follow your posts Thanks man",
  },
  {
    id: 3,
    musician: "A R Rehman",
    speciality: "Composer",
    img: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/AR_Rahman_1200.jpg?itok=UHKerXfT",
    comment:
      "I really like the way you think and I always follow your posts Thanks man",
  },
];
