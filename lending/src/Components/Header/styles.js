const styles = {
  wrapper: {
    display: "flex",
    padding: "20px 84px",
    "@media (max-width: 1100px)": {
      padding: "20px 40px"
    },
    "@media (max-width: 1000px)": {
      padding: "20px 20px"
    },
    "@media (max-width: 900px)": {
      justifyContent: "space-between"
    },
    "@media (max-width: 560px)": {
      padding: 15
    }
  },
  textWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  secondWrap: {
    marginLeft: 74,
    justifyContent: "space-between",
    display: "flex",
    width: "100%",
    "@media (max-width: 1000px)": {
      marginLeft: 30
    },
    "@media (max-width: 565px)": {
      display: "none"
    }
  },
  link: {
    marginRight: 20,
    fontSize: 18,
    color: "#FFFFFF",
    whiteSpace: "nowrap"
  },
  burgerMenu: {
    "@media (min-width: 565px)": {
      display: "none"
    }
  },
  wrapperOptions: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    color: "#FFFFFF"
  },
  button: {
    "@media (max-width: 900px)": {
      display: "none"
    }
  },
  accordion: {
    "@media (min-width: 565px)": {
      display: "none"
    },
    "& div": {},
    "& .MuiPaper-root": {},
    "& .MuiPaper-elevation1": {
      position: "initial"
    },
    "& .MuiAccordionSummary-root": {
      display: "none"
    }
  },
  linkM: {
    whiteSpace: "nowrap",
    lineHeight: "125%",
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 20
  },
  wrapperProfile: {
    background: "#FFFFFF",
    boxShadow:
      " 0px 2px 4px rgba(117, 131, 142, 0.04), 0px 3px 7px rgba(195, 202, 209, 0.05)"
  }
};

export { styles };
