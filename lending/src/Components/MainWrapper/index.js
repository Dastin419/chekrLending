import React from "react";
import injectStyles from "react-jss";
import classNames from "classnames";

import { styles } from "./styles";

const MainWrapper = ({ children, classes, isProfile }) => {
  return (
    <div
      className={classNames(classes.mainWrapper, {
        [classes.mainWrapperProfile]: isProfile
      })}
    >
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default injectStyles(styles)(MainWrapper);
