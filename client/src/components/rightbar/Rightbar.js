import { List, ListItem, Stack } from "@mui/material";
import React from "react";
import GigsShowCard from "./GigsShowCard";
import NearbyUsersCard from "./NearbyUsersCard";

function Rightbar() {
  return (
    <Stack flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <List disablePadding>
        <ListItem disablePadding sx={{ marginBottom: "10px" }}>
          <NearbyUsersCard />
        </ListItem>
        <ListItem disablePadding>
          <GigsShowCard />
        </ListItem>
      </List>
    </Stack>
  );
}

export default Rightbar;
