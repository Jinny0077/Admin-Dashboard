import React from "react";
import { TextField } from "@mui/material";

export default function Input(props) {
  const {
    rows,
    name,
    label,
    value,
    error = null,
    onChange,
    fullWidth,
    disabled,
    type,
    multiline,
    shrink,
  } = props;

  return (
    <TextField
      InputLabelProps={{ shrink: shrink }}
      disabled={disabled}
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
      error={!!error}
      helperText={error?.message || ""}
      {...props}
      type={type}
    />
  );
}
