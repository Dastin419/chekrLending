import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import classNames from "classnames";
import TriangleIcon from "../../Images/tirangle";

const Button = ({
  classes,
  color,
  filled,
  icon = false,
  label,
  margin,
  onClick,
  disabled
}) => {
  const style =
    color === "white"
      ? {
          color: "#FFFFFF",
          border: "2px solid #FFFFFF",
          background: filled ? "#FFFFFF" : "initial",
          marginRight: margin ? margin : 0
        }
      : color === "purple"
      ? {
          background: filled ? "#AF52DE" : "initial",
          color: "#FFFFFF",
          border: " 2px solid #AF52DE",
          marginRight: margin ? margin : 0
        }
      : color === "blue"
      ? {
          color: filled ? "#FFFFFF" : "#2489F5",
          border: "2px solid #2489F5",
          background: filled ? "#2489F5" : "initial",
          marginRight: margin ? margin : 0
        }
      : {};

  return (
    <button
      style={style}
      className={classNames(classes.buttonLiveDemo, {
        [classes.white]: color === "white",
        [classes.purple]: color === "purple",
        [classes.blue]: color === "blue",
        [classes.disabled]: disabled
      })}
      onClick={disabled ? () => {} : onClick}
    >
      {icon ? (
        <TriangleIcon
          fill={color === "white" ? "#FFFFFF" : "#2489F5"}
          style={{ margin: "2px 5px 0 0" }}
        />
      ) : null}
      <div className={classes.label}>{label}</div>
    </button>
  );
};

export default injectStyles(styles)(Button);
