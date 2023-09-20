import TextField from "@mui/material/TextField";
import { useField } from "formik";
import React from "react";

function TextFieldWrapper({ name, ...otherProps }) {
  const [field, meta] = useField(name);

  const configTextField = {
    fullWidth: true,
    variant: "outlined",
    ...field,
    ...otherProps,
  };

  if (meta && meta.error && meta.touched) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} />;
}

export default TextFieldWrapper;
