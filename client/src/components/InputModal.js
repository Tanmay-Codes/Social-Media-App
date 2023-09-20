import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Stack } from "@mui/system";

import DatePicker from "./dateTimePicker/DatePicker";
import TimePickers from "./dateTimePicker/TimePickers";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationPicker from "./dateTimePicker/LocationPicker";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 800 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function InputModal(props) {
  const handleClose = () => props.setOpen(false);
  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} spacing={2}>
          {props.showrate === "yes" ? (
            <TextField
              sx={{ maxWidth: "150px" }}
              label="Rate"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CurrencyRupeeIcon />
                  </InputAdornment>
                ),
                endAdornment: <Typography variant="body2">/Hour</Typography>,
              }}
              placeholder="Rate"
              size="small"
            />
          ) : (
            ""
          )}
          <TextField placeholder="Subject" fullWidth />
          <TextField multiline rows={10} placeholder="Your words" fullWidth />
          {props.pickers === "yes" ? (
            <Stack direction="row" spacing={2}>
              <LocationPicker />
              <DatePicker />
              <TimePickers label={"In time"} />
              <TimePickers label={"Out time"} />
            </Stack>
          ) : (
            ""
          )}
          <Stack direction="row" spacing={2}>
            <Button sx={{ maxWidth: "24px" }} variant="contained">
              {props.button}
            </Button>
            <Button
              onClick={handleClose}
              sx={{ maxWidth: "50px" }}
              variant="outlined"
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </div>
  );
}
