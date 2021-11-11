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
  disabled: {},
  whiteOutlined: {
    color: "#FFFFFF",
    border: "2px solid #FFFFFF",
    background: "initial",
    "& svg": {
      "& path": {
        fill: "#FFFFFF"
      }
    },
    "&:hover": {
      color: "#2489F5",
      backgroundColor: "#FFFFFF",
      borderColor: "#FFFFFF",
      "& svg": {
        "& path": {
          fill: "#2489F5"
        }
      }
    },
    "&:active": {
      backgroundColor: "#dedede",
      borderColor: "#dedede",
      outline: "none"
    }
  },
  purple: {
    background: "#2FCDF0",
    color: "#FFFFFF",
    border: "2px solid #2FCDF0",
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#10bae0",
      borderColor: "#10bae0"
    },
    "&:active": {
      backgroundColor: "#0fb2d7",
      borderColor: "#0fb2d7",
      outline: "none"
    }
  },
  blue: {
    color: "#FFFFFF",
    border: "2px solid #2489F5",
    background: "#2489F5",

    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#2079D9",
      borderColor: "#2079D9"
    },
    "&:active": {
      backgroundColor: "#1A62B0",
      borderColor: "#1A62B0",
      outline: "none"
    }
  },
  blueOutlined: {
    color: "#2489F5",
    border: "2px solid #2489F5",
    background: "initial",
    "& svg": {
      "& path": {
        fill: "#2489F5"
      }
    },
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#2489F5",
      borderColor: "#2489F5",
      "& svg": {
        "& path": {
          fill: "#FFFFFF"
        }
      }
    },
    "&:active": {
      backgroundColor: "#1A62B0",
      borderColor: "#1A62B0",
      outline: "none"
    }
  }
};

export { styles };
