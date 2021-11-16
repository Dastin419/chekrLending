import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import classNames from "classnames";
import TriangleIcon from "../../Images/tirangle";

const Button = ({
  classes,
  color,
  icon = false,
  label,
  margin,
  onClick,
  disabled
}) => {
  return (
    <button
      style={{ marginRight: margin ? margin : 0 }}
      className={classNames(classes.buttonLiveDemo, {
        [classes.whiteOutlined]: color === "whiteOutlined",
        [classes.blueOutlined]: color === "blueOutlined",
        [classes.purple]: color === "purple",
        [classes.blue]: color === "blue",
        [classes.disabled]: disabled
      })}
      onClick={
        disabled
          ? () => {}
          : () => {
              onClick();
            }
      }
    >
      {icon ? (
        <TriangleIcon
          className={classNames({
            [classes.whiteOutlinedIcon]: color === "whiteOutlined",
            [classes.blueOutlinedIcon]: color === "blueOutlined"
          })}
          style={{ margin: "2px 5px 0 0" }}
        />
      ) : null}
      <div className={classes.label}>{label}</div>
    </button>
  );
};

export default injectStyles(styles)(Button);
