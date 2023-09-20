import { useField, useFormikContext } from "formik";
import React from "react";

function SelectField({ name, options, ...otherProps }) {
  const { setFieldValue } = useFormikContext();
  const { field, meta } = useField(name);

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };
  const style = {
    width: "100%",
    height: " 50px",
    borderRadius: " 5px",
    padding: "5x",
    color: "grey",
    fontSize: "16px",
  };
  const configSelect = {
    ...field,
    ...otherProps,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <select style={style} {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <option key={pos} defaultValue={""} value={item}>
            {options[item]}
          </option>
        );
      })}
    </select>
  );
}

export default SelectField;
