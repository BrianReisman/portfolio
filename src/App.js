import "./App.css";
import {useEffect} from 'react';
//components
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import StyledApp from "./StyledApp";
import Hero from "./components/Hero/Hero";
import Spacer from "./components/util/Spacer/Spacer";
import Work from './components/Work/Work';

function App() {
  useEffect(()=>{
    setTimeout(()=>{
      alert('Not mobile friendly yet but working on it fast and furiously!')
    }, 1500)
  }, [])

  return (
    <StyledApp>
      <Logo />
      <Header />
      <Hero />
      <Spacer />
      <Work />
      {/* <Spacer /> */}
    </StyledApp>
  );
}

export default App;
