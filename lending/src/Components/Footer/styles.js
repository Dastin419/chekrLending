const styles = {
  wrapper: {
    display: "flex",
    padding: "0 84px 40px",
    flexDirection: "column",
    "@media (max-width: 1100px)": {
      padding: "0 40px 30px"
    },
    "@media (max-width: 1000px)": {
      padding: "0 20px 40px"
    },
    "@media (max-width: 560px)": {
      padding: "0 20px 40px"
    }
  },
  textWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 560px)": {
      alignSelf: "center",
      order: 0
    }
  },
  secondWrap: {
    marginLeft: 74,
    justifyContent: "space-between",
    display: "flex",
    width: "100%",
    "@media (max-width: 1000px)": {
      marginLeft: 30
    },
    "@media (max-width: 800px)": {
      marginLeft: 15
    }
  },
  link: {
    marginRight: 20,
    fontSize: 18,
    color: "#414141",
    whiteSpace: "nowrap",
    "@media (max-width: 800px)": {
      marginRight: 20
    },
    "@media (max-width: 600px)": {
      marginRight: 15
    }
  },
  rightBlock: {
    minWidth: 92,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 30,
    "@media (max-width: 560px)": {
      order: 3,
      paddingTop: 0
    }
  },
  socialWrap: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 92,
    "@media (max-width: 560px)": {
      // order: 3,
      maxWidth: 180,
      "& svg": {
        width: 40,
        height: 40
      }
    }
  },
  subTitle: {
    color: "#95A1BB",
    fontSize: 14,
    marginTop: 10,
    "@media (max-width: 560px)": {
      fontSize: 20
    }
  },
  border: {
    borderTop: "1px solid rgba(36, 137, 245, 0.2)",
    width: "100%",
    marginBottom: 20
  },
  thirdWrap: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 560px)": {
      flexDirection: "column"
    }
  },
  logo: {
    alignSelf: "center",
    "@media (max-width: 560px)": {
      order: 1,
      margin: "20px 0"
    }
  }
};

export { styles };
