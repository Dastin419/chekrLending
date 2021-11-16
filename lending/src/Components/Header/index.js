import React, { Fragment, useContext, useRef, useState } from "react";
import injectStyles from "react-jss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { styles } from "./styles";
import LogoIcon from "../../Images/logo";
import Button from "../Button";
import HamburgerButton from "../../Nav/HamburgerButton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ProfileIcon from "../../Images/profileIcon";
import { PATH } from "../../App";

const Header = ({
  classes,
  isOpen,
  setIsOpen,
  isLogin,
  isProfile,
  setIsProfile,
  setIsOpenModalLogin,
  setIsOpenModalCreateAccount
}) => {
  return (
    <div
      style={{
        position: "initial",
        background: "transparent",
        border: "none",
        boxShadow: "none"
      }}
    >
      <div
        className={classNames(classes.wrapper, {
          [classes.wrapperProfile]: isProfile
        })}
      >
        <div>
          <LogoIcon fill={isProfile ? "#2489F5" : null} />
        </div>
        <div className={classes.burgerMenu}>
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className={classes.secondWrap}>
          {isProfile ? null : (
            <div className={classes.textWrapper}>
              <div className={classNames(classes.link)}>About</div>
              <div className={classNames(classes.link)}>User's stories</div>
              <div className={classNames(classes.link)}>Updates</div>
            </div>
          )}
          <div className={classes.buttonWrapper}>
            {isLogin ? (
              !isProfile ? (
                <>
                  <div
                    // onClick={() => setIsOpenModalLogin(true)}
                    className={classes.link}
                  >
                    Log out
                  </div>
                  <Link onClick={() => setIsProfile(true)} to={PATH.profile}>
                    <ProfileIcon
                      style={{ marginRight: 10, cursor: "pointer" }}
                    />
                  </Link>
                </>
              ) : null
            ) : (
              <Fragment>
                <div
                  onClick={() => setIsOpenModalLogin(true)}
                  className={classes.link}
                >
                  Log in
                </div>
                <div
                  onClick={() => setIsOpenModalCreateAccount(true)}
                  className={classes.link}
                >
                  Sign in
                </div>
              </Fragment>
            )}
            {isProfile ? null : (
              <span className={classes.button} style={{ marginRight: 10 }}>
                <Button
                  color="whiteOutlined"
                  label="Live demo"
                  icon={true}
                  margin={10}
                />
              </span>
            )}
            {isProfile ? null : (
              <span className={classes.button}>
                <Button color="purple" filled={true} label="Try now" />
              </span>
            )}
          </div>
        </div>
      </div>
      <Accordion
        style={{
          position: "initial",
          background: "#2489F5 !important",
          color: "#2489F5 !important",
          backgroundColor: "#2489F5 !important"
        }}
        className={classes.accordion}
        expanded={isOpen}
      >
        <AccordionSummary
          style={{ position: "initial" }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        />
        <AccordionDetails
          style={{
            background: "#2489F5",
            color: "#2489F5",
            backgroundColor: "#2489F5"
          }}
        >
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
