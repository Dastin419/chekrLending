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
import { apiClient } from "./Modules/API";
import { authorization } from "./Modules/auth";

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
  useEffect(() => {
    const userId = authorization.getUserId();

    console.log({ history });
    if (history.location.pathname === PATH.profile && !userId) {
      history.push("/");
      window.location.href = "/";
    }
  }, [history.location.pathname]);

  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [isProfile, setIsProfile] = useState(false);
  const [isCreateAccountError, setIsCreateAccountError] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalCreateAccount, setIsOpenModalCreateAccount] = useState(
    false
  );
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const userId = authorization.getUserId();

    console.log({ history });
    if (history.location.pathname === PATH.profile) {
      if (!userId) {
        history.push("/");
        window.location.href = "/";
      } else {
        setIsProfile(true);
      }
    }
  }, [history.location.pathname]);

  useEffect(() => {
    const token = authorization.getAPIKey();
    const userId = authorization.getUserId();

    if (token && userId) {
      setUser(userId);
    }
  }, []);

  const setUser = async userId => {
    const user = await apiClient.getUser({ user_id: userId });
    if (user) {
      setUserData({
        id: userId,
        name: user.name,
        surname: user.surname,
        email: user.mail
      });
      console.log({ user });
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const handleLogOut = () => {
    setIsLogin(false);
    setUserData({});
    authorization.logout();
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

      if (res.Success) {
        authorization.login({ apiKey: res.token, userId: res.user_id });
        setUserData({ userId: res.user_id, email: res.mail });
        setIsLogin(Boolean(res.token));
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
      console.log({ res });
      const user = await apiClient.getUser({ user_id: userData.userId });
      if (user) {
        setUserData({
          id: userData.userId,
          name: user.name,
          surname: user.surname,
          email: user.mail
        });
      }
      // TODO взять юзера и сетнуть дату
    } catch (error) {
      console.log({ error });
    }
  };

  console.log({ isProfile });
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
            isLogin={isLogin}
            setIsOpenModalLogin={setIsOpenModalLogin}
            setIsProfile={setIsProfile}
            isProfile={isProfile}
            setIsOpenModalCreateAccount={setIsOpenModalCreateAccount}
            handleLogOut={handleLogOut}
          />
          <Switch>
            <Route
              path={PATH.profile}
              component={() => (
                <UserCabinet
                  onSubmitProfileUserData={onSubmitProfileUserData}
                  userData={userData}
                  setIsProfile={setIsProfile}
                  handleLogOut={handleLogOut}
                  history={history}
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
