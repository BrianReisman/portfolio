import { useRef } from "react";

import "./App.css";

//components
import Header from "./components/Header/Header";
import StyledApp from "./StyledApp";
import Hero from "./components/Hero/Hero";
import Spacer from "./components/Misc/Spacer";
import Work from "./components/Work/Work";
import Technologies from "./components/Technologies/Technologies";
import Me from "./components/Me/Me";
import Connect from "./components/Connect/Connect";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Misc/Modal/Modal";

function App() {
  const workRef = useRef(null);
  const meRef = useRef(null);
  const connectRef = useRef(null);
  const headerRef = useRef(null);

  const scrollClickHandler = (e) => {
    let section =
      e.target.className === "work"
        ? workRef
        : e.target.className === "me"
        ? meRef
        : e.target.className === "connect"
        ? connectRef
        : headerRef;
    console.log(section);
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledApp>
      <Modal scrollClickHandler={scrollClickHandler}/>
      <Header scrollClickHandler={scrollClickHandler} headerRef={headerRef} />
      <Hero />
      <Spacer />
      <Work workRef={workRef} />
      <Spacer />
      <Technologies />
      <Spacer />
      <Me meRef={meRef} />
      <Spacer />
      <Connect connectRef={connectRef} />
      <Footer />
      <div id="overlay active"></div>
    </StyledApp>
  );
}

export default App;
