import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  wrap: {
    display: "flex",
    flexDirection: "column",
    "& .MuiInputBase-input ": {
      height: 43,
      boxSizing: "border-box"
    }
  },
  label: {
    fontWeight: 500,
    fontSize: 16,
    color: "#414141"
  }
}));

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Input = ({
  placeholder,
  label,
  isRequired,
  autoComplete,
  required,
  handleChange,
  value,
  type,
  callbackError
}) => {
  const classes = useStyles();
  const [error, setError] = useState(null);

  const [isFirstRender, setIsFirstRender] = useState(false);

  useEffect(() => {
    setIsFirstRender(true);
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      if (!value) {
        setError("Field is required");
      } else {
        setError(null);
      }

      if (type === "email") {
        const isValid = validateEmail(value);
        if (!isValid) {
          setError("Email not valid");
        }
      }

      if (type === "password") {
        if (value.length < 8) {
          setError("Min. 8 charachter");
        } else {
          setError(null);
        }
      }
    }
  }, [value.length]);

  useEffect(() => {
    callbackError(error);
  }, [error]);

  return (
    <div className={classes.wrap}>
      <div className={classes.label}>
        {label}
        {isRequired ? <span style={{ color: "#EB4335" }}>*</span> : null}
      </div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder={placeholder}
        required={required}
        onChange={handleChange(type)}
        value={value}
        type={type}
      />
      {error ? (
        <FormHelperText style={{ color: "red" }} id={label}>
          {error}
        </FormHelperText>
      ) : (
        <FormHelperText style={{ color: "transparent" }} id={label}>
          .
        </FormHelperText>
      )}
    </div>
  );
};

export default Input;
