import "./App.css";

//components
import Header from "./components/Header/Header";
import StyledApp from "./StyledApp";
import Hero from "./components/Hero/Hero";
import Spacer from "./components/Spacer/Spacer";
import Work from "./components/Work/Work";
import Technologies from "./components/Technologies/Technologies";
import Me from "./components/Me/Me";
import Connect from "./components/Connect/Connect";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <StyledApp>
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
      <Footer />
    </StyledApp>
  );
}

export default App;
