import React from "react";
import injectStyles from "react-jss";
import classNames from "classnames";
import { styles } from "./styles";
import LogoIcon from "../../Images/logo";
import Button from "../Button";
import FacebookIcon from "../../Images/facebook";
import TwitterIcon from "../../Images/twiter";
import LinkendinIcon from "../../Images/linkendin";

const Footer = ({ classes, isOpen }) => {
  return (
    <div
      style={isOpen ? { background: "rgba(0,0,0,0.5" } : {}}
      className={classNames(classes.wrapper)}
    >
      <div className={classes.border} />
      <div className={classes.thirdWrap}>
        <div className={classes.logo}>
          <LogoIcon fill="#2489F5" />
        </div>
        <div className={classes.textWrapper}>
          <div className={classNames(classes.link, {})}>About</div>
          <div className={classNames(classes.link, {})}>User's stories</div>
          <div className={classNames(classes.link, {})}>Updates</div>
          <div />
        </div>
        <div className={classes.rightBlock}>
          <div className={classes.socialWrap}>
            <FacebookIcon />
            <TwitterIcon />
            <LinkendinIcon />
          </div>
          <div className={classNames(classes.subTitle, {})}>© Chckr 2021</div>
        </div>
      </div>
    </div>
  );
};

export default injectStyles(styles)(Footer);
