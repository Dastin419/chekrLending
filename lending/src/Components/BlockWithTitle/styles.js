const styles = {
  wrapper: {
    display: "flex",
    marginTop: 120,
    alignItems: "flex-start",
    marginBottom: 260,
    padding: "0 84px",
    "@media (max-width: 1100px)": {
      padding: "0 40px",
      marginTop: 0,
      marginBottom: 180
    },
    "@media (max-width: 1000px)": {
      padding: "20px",
      marginBottom: 120
    },
    "@media (max-width: 900px)": {
      marginTop: 0,
      display: "flex",
      flexDirection: "column",
      marginBottom: 60
    }
  },
  textBlock: {
    maxWidth: 712,
    width: "100%",
    paddingRight: 65,
    "@media (max-width: 900px)": {
      paddingRight: 0,
      alignSelf: "center"
    }
  },
  title: {
    color: "#FFFFFF",
    fontWeight: 800,
    fontSize: 60
  },
  subTitle: {
    color: "#FFFFFF",
    margin: "40px 0",
    fontSize: 24,
    lineHeight: "155%",
    maxWidth: 600,
    "@media (max-width: 900px)": {
      maxWidth: "100%"
    }
  },
  iconWrapper: {
    position: "relative",
    marginRight: -150,
    marginLeft: -10,
    "@media (max-width: 900px)": {
      marginRight: 0,
      marginLeft: 0,
      alignSelf: "center"
    }
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 30
  },
  bgIcon: {
    position: "absolute",
    top: 100,
    left: -30
  },
  buttonDesk: {
    "@media (max-width: 900px)": {
      display: "none"
    }
  },
  buttonMob: {
    "@media (min-width: 900px)": {
      marginTop: 80,
      display: "none",
      "& div": {
        maxWidth: "100%",
        width: "100%"
      }
    }
  }
};

export { styles };
