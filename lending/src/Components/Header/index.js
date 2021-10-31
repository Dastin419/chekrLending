import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import LogoIcon from "../../Images/logo";
import Button from "../Button";

const Header = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <LogoIcon />
      </div>
      <div className={classes.secondWrap}>
        <div className={classes.textWrapper}>
          <div className={classes.link}>About</div>
          <div className={classes.link}>User's stories</div>
          <div className={classes.link}>Updates</div>
          <div />
        </div>
        <div className={classes.buttonWrapper}>
          <div className={classes.link}>Sign in</div>
          <Button color="white" label="Live demo" icon={true} margin={10} />
          <Button color="purple" filled={true} label="Try now" />
        </div>
      </div>
    </div>
  );
};

export default injectStyles(styles)(Header);
