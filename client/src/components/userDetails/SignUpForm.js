import { Button, FormControl, Modal, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import PasswordBox from "./PasswordBox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 600 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function SignUpForm(props) {
  const handleClose = () => props.setOpen(false);
  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack spacing={2} sx={style}>
          <FormControl sx={{ maxWidth: "500px" }}>
            <Stack spacing={2}>
              <TextField placeholder="First Name" label="First Name" required />
              <TextField placeholder="Last Name" label="Last Name" />
              <TextField
                placeholder="Email"
                label="Email"
                required
                helperText="example@gmail.com"
              />
              <PasswordBox
                helpTitle={"Please provide minimum 8 charachters"}
                label={"Password"}
              />
              {/* <SelectTextFields list={skills} /> */}
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button variant="contained">Join</Button>
              <Button variant="contained" onClick={handleClose}>
                {" "}
                Cancel
              </Button>
            </Stack>
          </FormControl>
        </Stack>
      </Modal>
    </div>
  );
}

export default SignUpForm;
// const skills = [
//   {
//     id: 1,
//     label: "Singing",
//   },
//   {
//     id: 2,
//     label: "Guitarist",
//   },
//   {
//     id: 3,
//     label: "Keyboard",
//   },
//   {
//     id: 4,
//     label: "Song writer",
//   },
// ];
