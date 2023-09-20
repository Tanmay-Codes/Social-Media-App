import { List, ListItem } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Media from "./Media";

import SideProfileCard from "./SideProfileCard";

function Sidebar() {
  return (
    <Stack flex={1} spacing={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List disablePadding>
        <ListItem disablePadding>
          <SideProfileCard />
        </ListItem>
        <ListItem disablePadding>
          <Media />
        </ListItem>
      </List>
    </Stack>
  );
}

export default Sidebar;
