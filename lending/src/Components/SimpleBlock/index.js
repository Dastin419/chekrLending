import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import TryNowButton from "../TryNowButton";
import MainScreenIcon from "../../Images/mainScreenIcon";
import Bg2Icon from "../../Images/bg-2";
import icon from "../../Images/thermometr.png";
import ThermometrIcon from "../../Images/thermometr";

const SimpleBlock = ({ classes, reverse, title, text, icon, bgIcon }) => {
  return (
    <div
      className={classes.wrapper}
      style={reverse ? { flexDirection: "row-reverse" } : {}}
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
