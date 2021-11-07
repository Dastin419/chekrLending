const styles = {
  buttonLiveDemo: {
    cursor: "pointer",
    padding: "9px 30px",
    borderRadius: 5,
    width: "100%",
    minWidth: 164,
    maxWidth: 200,
    whiteSpace: "nowrap",
    fontWeight: 700,
    display: "flex",
    maxHeight: 42,
    justifyContent: "center",
    boxSizing: "border-box",
    "@media (max-width: 560px)": {
      width: "100%",
      minWidth: "100%"
    }
  },
  label: {
    fontWeight: 700,
    fontSize: 16
  },
  disabled: {}
};

export { styles };
