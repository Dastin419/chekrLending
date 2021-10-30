import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";

const MainWrapper = ({ children, classes }) => {
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default injectStyles(styles)(MainWrapper);
