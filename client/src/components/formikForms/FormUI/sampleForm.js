import { Grid, Modal, Typography } from "@mui/material";
import TextFieldWrapper from "./FormUI/TextField";
import { Stack } from "@mui/system";
import { Formik } from "formik";
// import SelectField from "./FormUI/SelectField";
// import countries from "../../data/countries.json";
import * as Yup from "yup";
import React from "react";
import DateTimePicker from "./FormUI/DateTimePicker";
import CheckBoxField from "./FormUI/CheckBoxField";
import SubmitButton from "./FormUI/SubmitButton";
import PasswordField from "./FormUI/PasswordField";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
};
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("invalid email").required("Required"),
  password: Yup.string().min(8).required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid number")
    .required("Required"),
  address: Yup.string().required("required"),
  city: Yup.string().required("required"),
  state: Yup.string().required("required"),
  date: Yup.string().required("required"),
  time: Yup.string().required("required"),
  terms: Yup.boolean()
    .oneOf([true], "terms and condition must be accepted")
    .required("terms and conditions must be accepted"),
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
  const handleClose = () => props.setOpen(false);
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
            onSubmit={(values) => console.log(values)}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper name="firstName" label="first name" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper name="lastName" label="last name" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper name="Phone" label="Phone Number" />
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
                    <Typography>Address</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper name="address" label="Address" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper name="city" label="City" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrapper name="state" label="State" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Booking Information</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker
                      name="date"
                      type="date"
                      label="Date of Event"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker
                      name="time"
                      type="time"
                      label="time of Event"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CheckBoxField
                      name="terms"
                      legend="Terms of Services"
                      label="I agree"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SubmitButton>Sign Up</SubmitButton>
                  </Grid>
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
