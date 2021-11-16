const styles = {
  wrapper: {
    height: "calc(100vh - 82px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 84px 0 0",
    "@media (max-width: 1100px)": {
      padding: "0 40px 0 0"
    },
    "@media (max-width: 1000px)": {
      padding: "0 20px 0 0"
    },
    "@media (max-width: 560px)": {
      padding: "0 15px 0 0"
    }
  },
  leftBlock: {
    background: "#f8f9fa",
    height: "100%",
    width: "100%",
    paddingLeft: 84,

    "@media (max-width: 1100px)": {
      paddingLeft: 40
    },
    "@media (max-width: 1000px)": {
      paddingLeft: 20
    },
    "@media (max-width: 560px)": {
      paddingLeft: 15
    }
  },
  rightBlock: {
    width: "100%",
    maxWidth: 368,
    padding: "30px 0 0 15px",
    alignSelf: "flex-start"
  },
  tabBlock: {
    color: "#333333",
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
    padding: "6px 0",
    textDecoration: "none"
  },
  line: {
    width: "100%",
    border: "1px solid #E7EBF1",
    marginBottom: 15
  },
  hover: {
    cursor: "pointer",
    "&:hover": {
      background: "#F2F6F9"
    }
  },
  active: {
    color: "#2489F5"
  },
  title: {
    fontSize: 24,
    color: "#333333",
    fontWeight: 700,
    marginTop: 30
  },
  content: {
    marginTop: 20,
    marginRight: 20
  },
  wrapperCard: {
    display: "flex",
    width: "100%"
  },

  card: {
    width: 150,
    height: 159,
    display: "flex",
    background: "#FFFFFF",
    boxShadow:
      "0px 2px 4px rgba(117, 131, 142, 0.04), 0px 3px 11px rgba(52, 60, 68, 0.08)",
    padding: 10,
    boxSizing: "border-box",
    fontSize: 12,
    marginRight: 20,
    cursor: "pointer"
  },
  emptyCard: {
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center"
  },
  cardTitle: {
    color: "#333333",
    fontSize: 18
  },
  simpleText: {
    color: "#333333",
    fontSize: 18,
    marginBottom: 5
  },
  link: {
    color: "#2489F5",
    fontSize: 12,
    marginBottom: 5,
    display: "block"
  },
  subtitle: {
    color: "#333333",
    fontSize: 18,
    fontWeight: 700,
    marginTop: 50,
    marginBottom: 10
  },
  wrapperPayment: {
    display: "flex"
  },
  datePaid: {
    marginLeft: 84
  },
  buttonWrap: {
    display: "flex"
  },
  subWrapper: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 610
  },
  checkBoxWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  checkBoxLabel: {
    marginBottom: 10,
    color: "#333333"
  }
};

export { styles };
