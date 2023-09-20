import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";

function CheckBoxField({ name, label, legend, ...otherProps }) {
  const { setFieldValue } = useFormikContext();
  const { field, meta } = useField(name);
  const handleChange = (event) => {
    const { checked } = event.target;
    setFieldValue(name, checked);
  };
  const configCheckbox = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };
  const configFormControl = {};

  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }
  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckbox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
}

export default CheckBoxField;
