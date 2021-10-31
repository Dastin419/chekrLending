import React, { useContext, useRef } from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import LogoIcon from "../../Images/logo";
import Button from "../Button";
import HamburgerButton from "../../Nav/HamburgerButton";
import { SideMenu } from "../../Nav/SideMenu";
import { MenuContext } from "../../Nav/NavState";
import { useOnClickOutside } from "../../Nav/utils";

const Header = ({ classes }) => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });
  return (
    <div ref={node} className={classes.wrapper}>
      <div>
        <LogoIcon />
      </div>
      <div className={classes.burgerMenu}>
        <HamburgerButton />
        <SideMenu />
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
