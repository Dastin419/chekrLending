import React from "react";
import classNames from "classnames";
import injectStyles from "react-jss";
import { styles } from "./styles";

const SimpleBlock = ({ classes, reverse, title, text, icon, bgIcon }) => {
  return (
    <div
      className={classNames(classes.wrapper, { [classes.rowReverse]: reverse })}
    >
      <div className={classes.iconWrapper}>
        {icon}
        {bgIcon}
      </div>
      <div className={classes.textBlock}>
        <div className={classes.title}>{title}</div>
        <div className={classes.subTitle}>{text}</div>
      </div>
    </div>
  );
};

export default injectStyles(styles)(SimpleBlock);
