const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 200,
    alignItems: "center",
    padding: "0 84px",
    "@media (max-width: 1100px)": {
      padding: "0 40px"
    },
    "@media (max-width: 1000px)": {
      padding: "0 20px"
    }
  },
  textBlock: {
    maxWidth: 567,
    width: "100%"
  },
  title: {
    color: "#FFFFFF",
    fontWeight: 800,
    fontSize: 40
  },
  subTitle: {
    color: "#FFFFFF",
    marginTop: 15,
    fontSize: 20,
    lineHeight: "155%",
    maxWidth: 440
  },
  iconWrapper: {
    position: "relative",
    width: "min-content"
  },
  icon: {},
  bgIcon: {
    position: "absolute",
    top: -100,
    left: -30
  }
};

export { styles };
