const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: "50px 84px 68px",
    background: "#FFFFFF",
    flexDirection: "column",
    "@media (max-width: 1100px)": {
      padding: "40px 40px 50px"
    },
    "@media (max-width: 1000px)": {
      padding: "30px 20px 40px"
    },
    "@media (max-width: 560px)": {
      padding: "30px 15px"
    }
  },
  title: {
    fontWeight: 800,
    fontSize: 40,
    color: "#414141",
    maxWidth: 900,
    textAlign: "center",
    marginBottom: 20,
    "@media (max-width: 560px)": {
      fontSize: 24,
      textAlign: "left",
      alignSelf: "flex-start"
    }
  },
  blue: {
    color: "#2489F5"
  },
  text: {
    fontSize: 20,
    color: "#575757",
    marginBottom: 50,
    maxWidth: 600,
    textAlign: "center",
    "@media (max-width: 560px)": {
      fontSize: 16,
      textAlign: "left",
      alignSelf: "flex-start",
      marginBottom: 30
    }
  },
  icon: {
    "@media (max-width: 840px)": {
      width: "100%"
    },
    "@media (max-width: 560px)": {
      display: "none"
    }
  },
  iconMobil: {
    width: "100%",
    "@media (min-width:560px)": {
      display: "none",
      "& svg": {
        width: "100%"
      }
    }
  },
  buttonsWrap: {
    display: "flex",
    width: "100%",
    maxWidth: "100%",
    alignSelf: "center",
    justifyContent: "center",
    "@media (max-width: 560px)": {
      flexDirection: "column",
      "& button:first-child": {
        marginBottom: 10
      }
    }
  },
  br: {
    "@media (max-width: 900px)": {
      display: "none"
    }
  },
  textMobil: {
    color: "#575757",
    fontSize: 16,
    "@media (min-width:560px)": {
      display: "none"
    }
  }
};

export { styles };
