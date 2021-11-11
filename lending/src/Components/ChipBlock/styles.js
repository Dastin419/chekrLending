const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: "50px 84px 68px",
    background: "#FFFFFF",
    flexDirection: "column",
    marginBottom: 200,
    "@media (max-width: 1100px)": {
      padding: "40px 40px 50px"
    },
    "@media (max-width: 1000px)": {
      padding: "30px 20px 40px"
    },
    "@media (max-width: 800px)": {
      marginBottom: 50
    },
    "@media (max-width: 560px)": {
      padding: "15px 15px 30px"
    }
  },
  preTitle: {
    textTransform: "uppercase",
    color: "rgba(142, 142, 142, 0.62)",
    fontWeight: 500,
    fontSize: 14,
    marginBottom: 15,
    "@media (max-width: 560px)": {
      textAlign: "left",
      alignSelf: "flex-start",
      fontSize: 12
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
      textAlign: "left",
      alignSelf: "flex-start",
      fontSize: 24
    }
  },
  blue: {
    color: "#2489F5"
  },
  text: {
    fontSize: 18,
    color: "#575757",
    marginBottom: 50,
    maxWidth: 550,
    textAlign: "center",
    "@media (max-width: 560px)": {
      textAlign: "left",
      alignSelf: "flex-start",
      fontSize: 16
    }
  },
  icon: {
    marginBottom: 70,
    "@media (max-width: 560px)": {
      marginBottom: 30
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
  }
};

export { styles };
