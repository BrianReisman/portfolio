import "./App.css";
// import {useEffect} from 'react';
//components
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import StyledApp from "./StyledApp";
import Hero from "./components/Hero/Hero";
import Spacer from "./components/util/Spacer/Spacer";
import Work from "./components/Work/Work";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <StyledApp>
      <Logo />
      <Header />
      <Hero />
      <Spacer />
      <Work />
      <Spacer />
      <Technologies />
      <Spacer />
    </StyledApp>
  );
}

export default App;
