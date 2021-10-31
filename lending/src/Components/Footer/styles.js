const styles = {
  wrapper: {
    display: "flex",
    padding: "0 84px 40px",
    flexDirection: "column",
    "@media (max-width: 1100px)": {
      padding: "0 40px 30px"
    },
    "@media (max-width: 1000px)": {
      padding: "0 20px 20px"
    }
  },
  textWrapper: {
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
    }
  },
  link: {
    marginRight: 20,
    fontSize: 18,
    color: "#414141",
    whiteSpace: "nowrap"
  },
  rightBlock: {
    position: "relative",
    minWidth: 92,
    display: "flex",
    alignItems: "center"
  },
  socialWrap: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  subTitle: {
    position: "absolute",
    color: "#95A1BB",
    fontSize: 14,
    bottom: -15
  },
  border: {
    borderTop: "1px solid rgba(36, 137, 245, 0.2)",
    width: "100%",
    marginBottom: 20
  },
  thirdWrap: {
    display: "flex"
  }
};

export { styles };
