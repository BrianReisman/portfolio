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
import Me from "./components/Me/Me";
import Connect from "./components/Connect/Connect";

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
      <Me />
      <Spacer />
      <Connect />
      <Spacer text='Built by Brian 2021. Brought to you in part by electricity.'/>
    </StyledApp>
  );
}

export default App;
