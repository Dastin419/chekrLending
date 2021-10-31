const styles = {
  wrapper: {
    display: "flex",
    marginTop: 120,
    alignItems: "flex-start",
    marginBottom: 260,
    padding: "0 84px",
    "@media (max-width: 1100px)": {
      padding: "0 40px"
    },
    "@media (max-width: 1000px)": {
      padding: "020px"
    }
  },
  textBlock: {
    maxWidth: 712,
    width: "100%",
    paddingRight: 65
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
    maxWidth: 600
  },
  iconWrapper: {
    position: "relative",
    marginRight: -150,
    marginLeft: -10
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
  }
};

export { styles };
