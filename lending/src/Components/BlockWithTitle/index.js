import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import MainScreenIcon from "../../Images/mainScreenIcon";
import Bg1Icon from "../../Images/bg-1";
import Button from "../Button";

const BlockWithTitle = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.textBlock}>
        <div className={classes.title}>AI-powered application essay coach</div>
        <div className={classes.subTitle}>
          Reviews application essays in seconds and provides detailed feedback.
          Empowers to tell a better structured and coherent story to admissions.
          Stays objective and consistent, replacing human readers.
        </div>
        <Button color="purple" filled={true} label="Try now" />
      </div>
      <div className={classes.iconWrapper}>
        <Bg1Icon className={classes.bgIcon} />
        <MainScreenIcon className={classes.icon} />
      </div>
    </div>
  );
};

export default injectStyles(styles)(BlockWithTitle);
