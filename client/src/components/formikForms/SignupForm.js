import { Grid, Modal, Typography } from "@mui/material";
import TextFieldWrapper from "./FormUI/TextField";
import { Stack } from "@mui/system";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import SubmitButton from "./FormUI/SubmitButton";
import PasswordField from "./FormUI/PasswordField";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const INITIAL_FORM_STATE = {
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
};
const FORM_VALIDATION = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("invalid email").required("Required"),
  password: Yup.string().min(8).required("Required"),
});
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
function SignupForm(props) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleClose = () => props.setOpen(false);
  const handleSubmit = async (values) => {
    try {
      const res = await newRequest.post("/auth/register", values);
      setMessage(res.data);
      navigate("/");
    } catch (error) {
      setMessage(error);
    }
  };
  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack spacing={2} sx={style}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h6">Sign up to JaMclef</Typography>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper name="firstname" label="first name" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper name="lastname" label="last name" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextFieldWrapper name="email" label="email Id" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper name="username" label="UserName" />
                  </Grid>
                  <Grid item xs={12}>
                    <PasswordField name="password" label="Password" />
                  </Grid>

                  <Grid item xs={12}>
                    <SubmitButton>Sign Up</SubmitButton>
                  </Grid>
                  <Typography variant="h5">{message && message}</Typography>
                </Grid>
              </form>
            )}
          </Formik>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default SignupForm;
