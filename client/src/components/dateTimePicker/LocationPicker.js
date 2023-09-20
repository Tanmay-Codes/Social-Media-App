import { InputAdornment, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

function LocationPicker() {
  return (
    <div>
      <TextField
        label="Location"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          ),
        }}
        placeholder="Location"
        size="small"
      />
    </div>
  );
}

export default LocationPicker;
