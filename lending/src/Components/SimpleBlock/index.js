import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import TryNowButton from "../TryNowButton";
import MainScreenIcon from "../../Images/mainScreenIcon";
import Bg2Icon from "../../Images/bg-2";
import icon from "../../Images/thermometr.png";
import ThermometrIcon from "../../Images/thermometr";

const SimpleBlock = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.iconWrapper}>
        <Bg2Icon className={classes.bgIcon} />
        <ThermometrIcon className={classes.icon} />
      </div>
      <div className={classes.textBlock}>
        <div className={classes.title}>
          Reviews and scores an essay draft in seconds
        </div>
        <div className={classes.subTitle}>
          On average, it will take no more than 10 seconds to fully check your
          essay, after which you will see the full description
        </div>
      </div>
    </div>
  );
};

export default injectStyles(styles)(SimpleBlock);
