import "./App.css";

//components
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import StyledApp from "./StyledApp";
import Hero from "./components/Hero/Hero";
import Spacer from "./components/util/Spacer/Spacer";
// import Work from './components/Work/Work';

function App() {
  return (
    <StyledApp>
      <Logo />
      <Header />
      <Hero />
      <Spacer />
      {/* <Work /> */}
      {/* <Spacer /> */}
    </StyledApp>
  );
}

export default App;
