import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import LogoIcon from "../../Images/logo";

const TryNowButton = ({ classes, maxWidth }) => {
  return (
    <div
      style={maxWidth ? { maxWidth: maxWidth } : {}}
      className={classes.buttonTryNow}
    >
      Try now
    </div>
  );
};

export default injectStyles(styles)(TryNowButton);
