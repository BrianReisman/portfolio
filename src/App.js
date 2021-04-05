import "./App.css";

//components
import Header from "./components/Header/Header";
import StyledApp from "./StyledApp";
import Hero from "./components/Hero/Hero";
import Spacer from "./components/util/Spacer/Spacer";

function App() {
  return (
    <StyledApp>
      <Header />
      <Hero />
      <Spacer />
    </StyledApp>
  );
}

export default App;
