import { useState } from "react";

import MainWrapper from "./Components/MainWrapper";
import Header from "./Components/Header";
import GeneralBlock from "./Components/GeneralBlock";
import Footer from "./Components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainWrapper>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <GeneralBlock isOpen={isOpen} />
      <Footer isOpen={isOpen} />
    </MainWrapper>
  );
}

export default App;
