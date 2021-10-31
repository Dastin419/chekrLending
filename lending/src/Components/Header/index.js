import React, { useContext, useRef, useState } from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import LogoIcon from "../../Images/logo";
import Button from "../Button";
import HamburgerButton from "../../Nav/HamburgerButton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const Header = ({ classes, isOpen, setIsOpen }) => {
  return (
    <div
      style={{
        position: "initial",
        background: "transparent",
        border: "none",
        boxShadow: "none"
      }}
    >
      <div className={classes.wrapper}>
        <div>
          <LogoIcon />
        </div>
        <div className={classes.burgerMenu}>
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className={classes.secondWrap}>
          <div className={classes.textWrapper}>
            <div className={classes.link}>About</div>
            <div className={classes.link}>User's stories</div>
            <div className={classes.link}>Updates</div>
          </div>
          <div className={classes.buttonWrapper}>
            <div className={classes.link}>Sign in</div>
            <span className={classes.button} style={{ marginRight: 10 }}>
              <Button color="white" label="Live demo" icon={true} margin={10} />
            </span>
            <span className={classes.button}>
              <Button color="purple" filled={true} label="Try now" />
            </span>
          </div>
        </div>
      </div>
      <Accordion
        style={{ position: "initial" }}
        className={classes.accordion}
        expanded={isOpen}
      >
        <AccordionSummary
          style={{ position: "initial" }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        />
        <AccordionDetails>
          <div className={classes.linkM}>Log in</div>
          <div className={classes.linkM}>About</div>
          <div className={classes.linkM}>User`s stories</div>
          <div className={classes.linkM}>Updates</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default injectStyles(styles)(Header);
