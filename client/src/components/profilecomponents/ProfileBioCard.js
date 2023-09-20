import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

export default function ProfileBioCard() {
  return (
    <Card
      sx={{
        maxWidth: 1200,
        height: 150,
        position: "relative",
        borderRadius: "10px",
        marginBottom: "18px",

        overflow: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="subtitle1"
          sx={{ width: "100%", position: "relative" }}
        >
          "The Bio of the Musician written here, More he can write the better
        </Typography>
        <IconButton
          variant="contained"
          size="small"
          color="primary"
          sx={{ position: "absolute", top: 0, right: 0, margin: "10px" }}
        >
          <EditIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
