import { useRef, useState } from 'react';

import './App.css';

//components
import Header from './components/Header/Header';
import StyledApp from './StyledApp';
import Hero from './components/Hero/Hero';
import Spacer from './components/Misc/Spacer';
import Work from './components/Work/Work';
import Me from './components/Me/Me';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';
import Modal from './components/Misc/Modal/Modal';
import ResumeBlock from './components/module/ResumeBlock';
import Nav from './components/Nav/Nav';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const workRef = useRef(null);
  const meRef = useRef(null);
  const connectRef = useRef(null);
  const headerRef = useRef(null);

  const scrollClickHandler = (e) => {
    let section =
      e.target.className === 'work'
        ? workRef
        : e.target.className === 'me'
        ? meRef
        : e.target.className === 'connect'
        ? connectRef
        : headerRef;

    let offsetVal = 0;
    if (window.innerWidth < 600) {
      offsetVal = 50;
    } else {
      offsetVal = 0;
    }

    if (section === headerRef) {
      //* Keep this specifically for mobile
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      const yAxis = section.current.getBoundingClientRect().top;
      window.scrollBy({ top: yAxis - offsetVal, letf: 0, behavior: 'smooth' });
    }

    if (showModal) {
      setShowModal(!showModal);
    }
  };

  return (
    <StyledApp>
      {showModal && <Modal scrollClickHandler={scrollClickHandler} toggleModal={toggleModal} />}
      <Header
        scrollClickHandler={scrollClickHandler}
        headerRef={headerRef}
        toggleModal={toggleModal}
      />
      <Nav scrollClickHandler={scrollClickHandler} />
      <ResumeBlock />
      <Hero />
      <Spacer />
      <Work refType={workRef} />
      <Spacer />
      <Me refType={meRef} />
      <Spacer />
      <Connect refType={connectRef} />
      <Footer />
      {showModal && (
        <div
          id="overlay"
          className="active"
          onClick={() => {
            toggleModal();
          }}
        ></div>
      )}
    </StyledApp>
  );
}

export default App;
