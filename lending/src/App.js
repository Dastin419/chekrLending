import { useEffect, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";

import MainWrapper from "./Components/MainWrapper";
import Header from "./Components/Header";
import GeneralBlock from "./Components/GeneralBlock";
import Footer from "./Components/Footer";
import UserCabinet from "./Components/UserCabinet";
import createHistory from "history/createBrowserHistory";

export const PATH = {
  default: "/",
  profile: "/profile"
};
const history = createHistory();

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isProfile, setIsProfile] = useState(true);

  useEffect(() => {
    if (isProfile) {
      history.push(PATH.profile);
    }
  }, [isProfile]);

  console.log({ isProfile });

  return (
    <Router history={history}>
      <MainWrapper isProfile={isProfile}>
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
  );
};

export default App;
