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
    }
  },
  subWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  peopleBlock: {
    display: "flex",
    flexDirection: "column"
  },
  preTitle: {
    color: "rgba(142, 142, 142, 0.62)",
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 2
  },
  title: {
    fontSize: 30,
    color: "#414141",
    maxWidth: 555,
    fontWeight: 500,
    marginBottom: 30
  },
  textBlock: {
    maxWidth: 495,
    paddingLeft: 40
  },
  text: {
    color: "#575757",
    fontSize: 20,
    marginTop: 25
  },
  lineWrap: {},
  line: {
    border: "1px solid #2489F5",
    width: 73
  },
  imgWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: 595
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
    marginTop: 5
  },
  footer: {
    marginTop: 120,
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    // borderBottom: "1px solid rgba(36, 137, 245, 0.2)",
    paddingBottom: 97
  },
  rightBlock: {
    display: "flex"
  },
  leftBlockTitle: {
    fontWeight: 500,
    fontSize: 30,
    color: "#414141",
    display: "flex",
    alignItems: "center"
  },
  leftBlockSubtitle: {
    fontWeight: 400,
    fontSize: 20,
    color: "#6F6F6F",
    marginTop: 12
  },
  email: {
    fontSize: 20,
    color: "#414141",
    marginLeft: 10,
    borderBottom: "1px solid #414141"
  }
};

export { styles };
