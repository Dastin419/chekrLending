import React from "react";
import injectStyles from "react-jss";
import classNames from "classnames";

import styles from "./styles";

const GenericButton = ({
  label,
  onClick,
  classes,
  type = "emptyBorder",
  size = "medium",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={classNames(classes.basic, classes[type], classes[size], {
        [classes.disabled]: disabled
      })}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default injectStyles(styles)(GenericButton);
