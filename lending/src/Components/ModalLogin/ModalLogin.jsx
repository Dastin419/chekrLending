import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import GenericButton from "../GenericButton/GenericButton";
import Input from "../InputModal/Input";
import CheckBox from "../CheckBox/CheckBox";
import FbFilledIcon from "../../Images/fbFilled";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: "#FFFFFF",
    boxShadow: theme.shadows[5],
    padding: "30px 88px",
    // height: "100%",
    // maxHeight: 520,
    width: "100%",
    maxWidth: 490,
    outline: "none",
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    "@media (max-width: 600px)": {
      padding: "20px 50px",
      margin: "0 20px"
    },
    "@media (max-width: 500px)": {
      padding: "20px 20px",
      margin: "0 20px"
    }
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#333333"
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  icon: {
    paddingRight: 10,
    "& svg": {
      cursor: "pointer"
    }
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  buttonBlock: {
    display: "flex"
    // alignItems: "center"
  },
  content: {
    // paddingRight: 30
  },
  facebookBlock: {
    padding: "13px 0",
    width: "100%",
    border: "1px solid #E7E9F5",
    boxSizing: "border-box",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30,
    cursor: "pointer"
  },
  bold: {
    color: "#414141",
    fontWeight: 500,
    fontSize: 16
  },
  wrapperFb: {
    display: "flex",
    alignItems: "center"
  },
  wrapperLine: {
    display: "flex",
    alignItems: "center",
    marginBottom: 30
  },
  line: {
    borderBottom: "1px solid #D7D8DD",
    width: "100%"
  },
  lineText: {
    fontSize: 14,
    color: "#D7D8DD",
    fontWeight: 500,
    margin: "0 15px",
    whiteSpace: "nowrap"
  },
  rememberMeWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30
  },
  forgetPass: {
    cursor: "pointer",
    fontWeight: 500,
    fontSize: 16,
    color: "#2489F5",
    textDecoration: "underline"
  },
  createAccountBlock: {
    marginTop: 30
  },
  root: {
    "& > *": {
      width: "100%"
    }
  }
}));

const ModalLogin = ({ isOpenModal, onCloseModal }) => {
  const [checked, setChecked] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [values, setValues] = useState({ email: "", password: "" });

  useEffect(() => {
    if (!values.email || !values.password) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [values.email, values.password, values.name]);

  const handleChange = prop => event => {
    console.log({ prop, event });
    setValues({ ...values, [prop]: event.target.value });
  };

  const onSubmit = values => {
    console.log(values);
  };

  const callbackError = error => {
    setIsError(error);
  };

  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpenModal}
      onClose={onCloseModal}
      closeAfterTransitions
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={isOpenModal}>
        <div className={classes.paper}>
          <div className={classes.header}>
            <div className={classes.title}>Login</div>
          </div>
          <div className={classes.content}>
            <div className={classes.facebookBlock}>
              <div className={classes.wrapperFb}>
                <FbFilledIcon style={{ marginRight: 10 }} />
                <span className={classes.bold}>Sign in with Facebook</span>
              </div>
            </div>
            <div className={classes.wrapperLine}>
              <div className={classes.line} />
              <div className={classes.lineText}>Or Sign in with Email</div>
              <div className={classes.line} />
            </div>
            <form className={classes.root} autoComplete="off">
              <Input
                placeholder="mail@website.com"
                label="Email"
                isRequired={true}
                autoComplete={false}
                required={true}
                value={values.email}
                handleChange={handleChange}
                type="email"
                callbackError={callbackError}
              />
              <Input
                placeholder="Min. 8 charachter"
                label="Password"
                isRequired={true}
                autoComplete={false}
                required={true}
                value={values.password}
                handleChange={handleChange}
                type="password"
                callbackError={callbackError}
              />
            </form>
          </div>
          <div className={classes.rememberMeWrap}>
            <div className={classes.checkBox}>
              <div className={classes.border}>
                <CheckBox checked={checked} setChecked={setChecked} /> Remember
                me
              </div>
            </div>
            <div className={classes.forgetPass}>Forget password?</div>
          </div>

          <div className={classes.footer}>
            <GenericButton
              style={{ width: "100%" }}
              label="Login"
              onClick={() => onSubmit(values)}
              disabled={isError || isDisabled}
              type="filled"
            />

            <div
              className={classNames(classes.createAccountBlock, classes.bold)}
            >
              Not registered yet?{" "}
              <span className={classes.forgetPass}>Create an Account</span>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalLogin;
