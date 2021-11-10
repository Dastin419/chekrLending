import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0
  }
}));

const CheckBox = ({ checked, setChecked }) => {
  const classes = useStyles();

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      classes={classes}
      checked={checked}
      onChange={handleChange}
      defaultChecked
      color="primary"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
};

export default CheckBox;
