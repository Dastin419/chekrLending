import MainWrapper from "./Components/MainWrapper";
import Header from "./Components/Header";
import GeneralBlock from "./Components/GeneralBlock";
import Footer from "./Components/Footer";
import NavState from "./Nav/NavState";
import MainMenu from "./Nav/MainMenu";

function App() {
  return (
    <NavState>
      {/*<MainMenu />*/}
      <MainWrapper>
        <Header />
        <GeneralBlock />
        <Footer />
      </MainWrapper>
    </NavState>
  );
}

export default App;
