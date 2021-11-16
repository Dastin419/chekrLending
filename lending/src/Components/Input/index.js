import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px !important;"
  },
  textField: {
    width: "25ch"
  },
  label: {
    color: "#333333"
    // marginBottom: 10
  }
}));

const InputAdornments = ({
  type,
  value,
  label,
  handleChange,
  disabled,
  required = true
}) => {
  const classes = useStyles();
  const [isShowPassword, setIsShowPassword] = useState(type === "password");

  const handleClickShowPassword = () => {
    setIsShowPassword(prev => !prev);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const error = required ? !value : false;
  const errorMin =
    type === "password" && value.length < 8 ? "Min. 8 charachter" >= 8 : false;
  return (
    <div className={classes.root}>
      <div className={classes.label}>{label}</div>
      <div>
        <FormControl className={classes.textField} error={error}>
          <Input
            disabled={disabled || errorMin}
            required={required}
            id={type}
            type={!isShowPassword ? "text" : "password"}
            value={value}
            onChange={handleChange(type)}
            endAdornment={
              type === "password" ? (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={type}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {isShowPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ) : null
            }
          />
          {error || errorMin ? (
            <FormHelperText id={type}>
              {errorMin ? errorMin : "Field is required"}
            </FormHelperText>
          ) : (
            <FormHelperText id={type}> </FormHelperText>
          )}
        </FormControl>
      </div>
    </div>
  );
};

export default InputAdornments;
