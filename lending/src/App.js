import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  const [userData, setUserData] = useState({});
  const [isProfile, setIsProfile] = useState(false);
  const [isCreateAccountError, setIsCreateAccountError] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalCreateAccount, setIsOpenModalCreateAccount] = useState(
    false
  );

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

  useEffect(() => {
    if (isProfile) {
      history.push(PATH.profile);
    }
  }, [isProfile]);

  const onSubmitRegister = async ({ mail, password }) => {
    try {
      const res = await apiClient.registerUser({
        mail: mail.trim(),
        password: password.trim()
      });
      setIsCreateAccountError(res.Error);
      if (res.Success) {
        await handleClickLogin();
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const onSubmitLogin = async ({ mail, password }) => {
    try {
      const res = await apiClient.loginUser({
        mail: mail.trim(),
        password: password.trim()
      });
      setIsLoginError(res.Error);
      if (res.id) {
        setUserData({ userId: res.id, email: res.mail });
      }
      if (res.Success) {
        setIsOpenModalLogin(false);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const onSubmitProfileUserData = async ({ mail, password, name, surname }) => {
    try {
      const res = await apiClient.changeUserData({
        id: userData.userId,
        mail: mail ? mail.trim() : null,
        new_pass: password ? password.trim() : null,
        name: name ? name.trim() : null,
        surname: surname ? surname.trim() : null
      });

      // TODO взять юзера и сетнуть дату
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    if (history.location.pathname === PATH.profile && !userData.userId) {
      history.push("/");
      window.location.href = "/";
    }
  }, [history.location.pathname]);

  // TODO add logout
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <MainWrapper isProfile={isProfile}>
          <ModalLogin
            isOpenModal={isOpenModalLogin}
            onCloseModal={() => setIsOpenModalLogin(false)}
            onClickCreateAccount={handleClickCreateAccount}
            onSubmitLogin={onSubmitLogin}
            error={isLoginError}
          />
          <ModalCreateAccount
            isOpenModal={isOpenModalCreateAccount}
            onCloseModal={() => setIsOpenModalCreateAccount(false)}
            onClickLogIn={handleClickLogin}
            onSubmitRegister={onSubmitRegister}
            error={isCreateAccountError}
          />
          <Header
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isLogin={userData.userId}
            setIsOpenModalLogin={setIsOpenModalLogin}
            setIsProfile={setIsProfile}
            isProfile={isProfile}
            setIsOpenModalCreateAccount={setIsOpenModalCreateAccount}
          />
          <Switch>
            <Route
              path={PATH.profile}
              component={() => (
                <UserCabinet
                  onSubmitProfileUserData={onSubmitProfileUserData}
                  userData={userData}
                  setIsProfile={setIsProfile}
                />
              )}
            />
            <Route
              path={PATH.default}
              component={() => <GeneralBlock isOpen={isOpen} />}
            />
          </Switch>
          {isProfile ? null : <Footer isOpen={isOpen} />}
        </MainWrapper>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
