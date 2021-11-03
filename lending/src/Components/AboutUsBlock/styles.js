const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: "50px 84px 20px",
    flexDirection: "column",
    "@media (max-width: 1100px)": {
      padding: "40px 40px 20px"
    },
    "@media (max-width: 1000px)": {
      padding: "30px 20px 20px"
    },
    "@media (max-width:560px)": {
      padding: "20px 15px 10px"
    }
  },
  subWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    "@media (max-width:560px)": {
      flexDirection: "column",
      width: "100%"
    }
  },
  peopleBlock: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 800px)": {
      maxWidth: "50%"
    },
    "@media (max-width:560px)": {
      maxWidth: "100%"
    }
  },
  preTitle: {
    color: "rgba(142, 142, 142, 0.62)",
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 2,
    "@media (max-width:560px)": {
      color: "#FFFFFF"
    }
  },
  title: {
    fontSize: 30,
    color: "#414141",
    maxWidth: 555,
    fontWeight: 500,
    marginBottom: 30,
    "@media (max-width:560px)": {
      fontSize: 24,
      marginBottom: 10
    }
  },
  textBlock: {
    maxWidth: 495,
    paddingLeft: 40,
    "@media (max-width: 800px)": {
      paddingLeft: 20
    },
    "@media (max-width:560px)": {
      paddingLeft: 0
    }
  },
  text: {
    color: "#575757",
    fontSize: 20,
    marginTop: 25,
    "@media (max-width:560px)": {
      fontSize: 16,
      marginTop: 10
    }
  },
  lineWrap: {},
  line: {
    border: "1px solid #2489F5",
    width: 73,
    "@media (max-width: 800px)": {
      display: "none"
    },
    "@media (max-width: 560px)": {
      display: "none"
    }
  },
  lineBottom: {
    border: "1px solid #2489F5",
    width: 73,
    "@media (max-width: 800px)": {
      display: "none"
    },
    "@media (max-width: 560px)": {
      display: "block"
    }
  },
  imgWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: 595,
    "@media (max-width: 1000px)": {
      // flexDirection: "column",
      // alignItems: "center"
      width: 495,
      flexWrap: "wrap",
      justifyContent: "center",
      "@media (max-width: 800px)": {
        width: 395,
        justifyContent: "initial"
      }
    }
  },
  img: {
    width: 184,
    height: 128
  },
  name: {
    color: "#414141",
    fontSize: 18,
    fontWeight: 600,
    marginTop: 10
  },
  job: {
    color: "#B5BDC8",
    marginTop: 5,
    "@media (max-width:560px)": {
      color: "#414141"
    }
  },
  footer: {
    marginTop: 120,
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    // borderBottom: "1px solid rgba(36, 137, 245, 0.2)",
    paddingBottom: 97,
    "@media (max-width: 800px)": {
      marginRight: 20
    },
    "@media (max-width: 560px)": {
      marginTop: 30,
      marginRight: 0,
      flexDirection: "column",
      alignItems: "flex-start",
      paddingBottom: 50
    }
  },
  rightBlock: {
    display: "flex",
    "@media (max-width: 560px)": {
      marginTop: 10
    }
  },
  leftBlockTitle: {
    fontWeight: 500,
    fontSize: 30,
    color: "#414141",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 560px)": {
      fontSize: 24
    }
  },
  leftBlockSubtitle: {
    fontWeight: 400,
    fontSize: 20,
    color: "#6F6F6F",
    marginTop: 12,
    "@media (max-width: 560px)": {
      fontSize: 16
    }
  },
  email: {
    fontSize: 20,
    color: "#414141",
    marginLeft: 10,
    borderBottom: "1px solid #414141"
  },
  itemWrap: {
    margin: "10px 10px",
    "@media (max-width: 560px)": {
      display: "flex",
      marginLeft: 0
    }
  },
  descriptionWrap: {
    "@media (max-width: 560px)": {
      marginLeft: 7
    }
  }
};

export { styles };
