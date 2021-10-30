import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import LogoIcon from "../../Images/logo";
import TriangleIcon from "../../Images/tirangle";

const LiveDemoButton = ({ classes }) => {
  return (
    <div className={classes.buttonLiveDemo}>
      <TriangleIcon style={{ margin: "2px 5px 0 0" }} />
      <div>Live demo</div>
    </div>
  );
};

export default injectStyles(styles)(LiveDemoButton);
