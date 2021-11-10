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
  const [isLogin, setIsLogin] = useState(true);
  const [isProfile, setIsProfile] = useState(false);

  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalCreateAccount, setIsOpenModalCreateAccount] = useState(
    true
  );

  useEffect(() => {
    if (isProfile) {
      history.push(PATH.profile);
    }
  }, [isProfile]);

  console.log({ isProfile });

  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <MainWrapper isProfile={isProfile}>
          <ModalLogin
            isOpenModal={isOpenModalLogin}
            onCloseModal={() => setIsOpenModalLogin(false)}
          />
          <ModalCreateAccount
            isOpenModal={isOpenModalCreateAccount}
            onCloseModal={() => setIsOpenModalCreateAccount(false)}
          />
          <Header
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            setIsProfile={setIsProfile}
            isProfile={isProfile}
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
