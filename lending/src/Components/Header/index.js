import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import LogoIcon from "../../Images/logo";

const Header = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <LogoIcon />
      <div className={classes.secondWrap}>
        <div className={classes.textWrapper}>
          <div className={classes.link}>About</div>
          <div className={classes.link}>User's stories</div>
          <div className={classes.link}>Updates</div>
          <div />
        </div>
        <div className={classes.buttonWrapper}>
          <div className={classes.link}>Sign in</div>
          <div className={classes.buttonLiveDemo}>Live demo</div>
          <div className={classes.buttonTryNow}>Try now</div>
        </div>
      </div>
    </div>
  );
};

export default injectStyles(styles)(Header);
