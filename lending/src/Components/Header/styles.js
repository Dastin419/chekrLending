const styles = {
  wrapper: {
    display: "flex",
    padding: "20px 84px",
    "@media (max-width: 1100px)": {
      padding: "20px 40px"
    },
    "@media (max-width: 1000px)": {
      padding: "20px 20px"
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
    }
  },
  link: {
    marginRight: 20,
    fontSize: 18,
    color: "#FFFFFF",
    whiteSpace: "nowrap"
  }
};

export { styles };
