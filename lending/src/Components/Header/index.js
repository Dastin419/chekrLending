import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import LogoIcon from "../../Images/logo";
import TriangleIcon from "../../Images/tirangle";
import TryNowButton from "../TryNowButton";
import LiveDemoButton from "../LiveDemoButton";

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
          <LiveDemoButton />
          <TryNowButton maxWidth={164} />
        </div>
      </div>
    </div>
  );
};

export default injectStyles(styles)(Header);
