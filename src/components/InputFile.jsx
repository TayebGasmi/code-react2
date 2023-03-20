import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";

const InputFile = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      label={props.label}
      variant="outlined"
      type="file"
      {...field}
      {...props}
      helperText={errorText}
      error={!!errorText}
      size="small"
    />
  );
};
export default InputFile;
