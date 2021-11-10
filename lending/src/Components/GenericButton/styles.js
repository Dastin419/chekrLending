export default {
  basic: {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    outline: "none",
    transition: "all .15s ease",
    transitionProperty: "color, background-color, border-color",
    borderRadius: "5px",
    border: "none",
    whiteSpace: "nowrap"
  },
  emptyBorder: {
    border: "1px solid #0C38FF"
  },
  medium: {
    fontSize: 18,
    color: "#0C38FF",
    backgroundColor: "transparent",
    padding: "8px 12px",
    "&:hover": {
      backgroundColor: "#0C38FF",
      color: "white"
    }
  },
  large: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "bold",
    padding: "25px 35px",
    "@media (max-width: 600px)": {
      fontSize: "16px",
      fontFamily: "Roboto",
      fontWeight: "bold",
      padding: "12px 16px"
    }
  },
  filled: {
    backgroundColor: "#2489F5",
    color: "#FFFFFF",
    border: "1px solid transparent",
    outline: "none !important",
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
  disabled: {
    backgroundColor: "rgba(36, 137, 245, 0.5)",
    pointerEvents: "none"
  },
  small: {
    fontSize: 14,
    color: "#0C38FF",
    backgroundColor: "transparent",
    padding: "8px 24px",
    "&:hover": {
      backgroundColor: "#0C38FF",
      color: "white"
    }
  }
};
