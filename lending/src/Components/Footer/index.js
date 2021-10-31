import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import LogoIcon from "../../Images/logo";
import Button from "../Button";
import FacebookIcon from "../../Images/facebook";
import TwitterIcon from "../../Images/twiter";
import LinkendinIcon from "../../Images/linkendin";

const Footer = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.border} />
      <div className={classes.thirdWrap}>
        <div>
          <LogoIcon fill="#2489F5" />
        </div>
        <div className={classes.secondWrap}>
          <div className={classes.textWrapper}>
            <div className={classes.link}>About</div>
            <div className={classes.link}>User's stories</div>
            <div className={classes.link}>Updates</div>
            <div />
          </div>
          <div className={classes.rightBlock}>
            <div className={classes.socialWrap}>
              <FacebookIcon />
              <TwitterIcon />
              <LinkendinIcon />
            </div>
            <div className={classes.subTitle}>© Chckr 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectStyles(styles)(Footer);
