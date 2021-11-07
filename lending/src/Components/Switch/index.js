import React, { useState } from "react";
import injectStyles from "react-jss";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./styles";

const AntSwitch = withStyles(theme => ({
  root: {
    width: 40,
    height: 20,
    padding: 0,
    display: "flex",
    marginLeft: 10
  },
  switchBase: {
    padding: 2,
    color: "#CAD2DB",
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: "#2489F5",
        borderColor: "#2489F5"
      }
    }
  },
  thumb: {
    width: 16,
    height: 16,
    boxShadow: "none"
  },
  track: {
    borderRadius: 100,
    opacity: 1,
    backgroundColor: "#E7EBF1"
  },
  checked: {
    transform: "translateX(20px) !important"
  }
}))(Switch);

const CustomSwitch = ({ classes, checked, setChecked, disabled }) => {
  const handleChange = event => {
    setChecked(event.target.checked);
  };
  return (
    <div className={classes.wrapper}>
      <AntSwitch
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
        name="switch"
      />
    </div>
  );
};

export default injectStyles(styles)(CustomSwitch);
