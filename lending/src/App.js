import { useEffect, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";

import MainWrapper from "./Components/MainWrapper";
import Header from "./Components/Header";
import GeneralBlock from "./Components/GeneralBlock";
import Footer from "./Components/Footer";
import UserCabinet from "./Components/UserCabinet";
import createHistory from "history/createBrowserHistory";
import ModalLogin from "./Components/ModalLogin/ModalLogin";
import ModalCreateAccount from "./Components/ModalCreateAccount/ModalCreateAccount";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import { apiClient } from "./API";

export const PATH = {
  default: "/",
  profile: "/profile"
};

const theme = createTheme({
  palette: {
    secondary: {
      main: "#2489F5"
    },
    primary: {
      main: "#2489F5"
    }
  }
});

const history = createHistory();

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalCreateAccount, setIsOpenModalCreateAccount] = useState(
    false
  );

  useEffect(() => {
    if (isProfile) {
      history.push(PATH.profile);
    }
  }, [isProfile]);

  const onSubmitRegister = async ({ mail, password }) => {
    console.log({ mail, password });
    console.log({ history });
    const res = await apiClient.registerUser({
      mail,
      password
    });

    console.log({ res });
  };

  const handleClickLogin = () => {
    setIsOpenModalCreateAccount(false);
    setTimeout(() => {
      setIsOpenModalLogin(true);
    }, 500);
  };

  const handleClickCreateAccount = () => {
    setIsOpenModalLogin(false);
    setTimeout(() => {
      setIsOpenModalCreateAccount(true);
    }, 500);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <MainWrapper isProfile={isProfile}>
          <ModalLogin
            isOpenModal={isOpenModalLogin}
            onCloseModal={() => setIsOpenModalLogin(false)}
            onClickCreateAccount={handleClickCreateAccount}
          />
          <ModalCreateAccount
            isOpenModal={isOpenModalCreateAccount}
            onCloseModal={() => setIsOpenModalCreateAccount(false)}
            onClickLogIn={handleClickLogin}
            onSubmitRegister={onSubmitRegister}
          />
          <Header
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isLogin={isLogin}
            setIsOpenModalLogin={setIsOpenModalLogin}
            setIsProfile={setIsProfile}
            isProfile={isProfile}
            setIsOpenModalCreateAccount={setIsOpenModalCreateAccount}
          />
          <Switch>
            <Route
              exact
              path={PATH.default}
              component={() => <GeneralBlock isOpen={isOpen} />}
            />
            <Route
              path={PATH.profile}
              component={() => <UserCabinet setIsProfile={setIsProfile} />}
            />
          </Switch>
          {isProfile ? null : <Footer isOpen={isOpen} />}
        </MainWrapper>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
