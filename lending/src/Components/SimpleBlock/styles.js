const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 200,
    alignItems: "center",
    padding: "0 84px",
    "@media (max-width: 1100px)": {
      padding: "0 40px",
      marginBottom: 160
    },
    "@media (max-width: 1000px)": {
      padding: "0 20px",
      marginBottom: 120
    },
    "@media (max-width: 900px)": {
      flexDirection: "column-reverse !important",
      marginBottom: 60
    },
    "@media (max-width: 560px)": {
      padding: "0 15px",
      marginBottom: 30
    }
  },
  rowReverse: { flexDirection: "row-reverse" },
  textBlock: {
    maxWidth: 567,
    width: "100%",
    "@media (max-width: 900px)": {
      maxWidth: "100%",
      marginBottom: 100
    },
    "@media (max-width: 800px)": {
      maxWidth: "100%",
      marginBottom: 50
    },
    "@media (max-width: 560px)": {
      maxWidth: "100%",
      marginBottom: 25
    }
  },
  title: {
    color: "#FFFFFF",
    fontWeight: 800,
    fontSize: 40,
    "@media (max-width: 560px)": {
      fontSize: 24
    }
  },
  subTitle: {
    color: "#FFFFFF",
    marginTop: 15,
    fontSize: 20,
    lineHeight: "155%",
    maxWidth: 440,
    "@media (max-width: 900px)": {
      maxWidth: "100%"
    },
    "@media (max-width: 560px)": {
      fontSize: 18
    }
  },
  iconWrapper: {
    position: "relative",
    // width: "min-content",
    width: "100%",
    "& svg": {
      width: "100% !important"
    },
    "@media (max-width: 460px)": {
      marginTop: -50,
      marginBottom: -25
    },
    "@media (max-width: 400px)": {
      marginTop: -30,
      marginBottom: -35
    }
  },
  icon: {},
  bgIcon: {
    position: "absolute",
    top: -100,
    left: -30
  }
};

export { styles };
