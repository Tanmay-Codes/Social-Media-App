import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
function ProfileSkillProgress() {
  return (
    <Card
      sx={{
        width: "100%",
      }}
    >
      <CardHeader
        title="Musical Skills"
        action={
          <Tooltip title="Add Skills" arrow>
            <IconButton color="primary">
              <AddIcon />
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
          {skills.map((item) => (
            <ListItem key={item.id}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <Typography variant="h6">{item.skill}</Typography>
                <LinearProgress
                  sx={{ width: "50%" }}
                  variant="determinate"
                  value={item.value}
                />
              </Stack>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default ProfileSkillProgress;

const skills = [
  {
    id: 1,
    skill: "Guitar",
    value: 90,
  },
  {
    id: 2,
    skill: "Singing",
    value: 70,
  },
  {
    id: 3,
    skill: "Song Writing",
    value: 80,
  },
  {
    id: 4,
    skill: "Recording and Editing",
    value: 40,
  },
  {
    id: 5,
    skill: "Composing",
    value: 90,
  },
  {
    id: 6,
    skill: "Recording and Editing",
    value: 40,
  },
  {
    id: 7,
    skill: "Composing",
    value: 90,
  },
];
