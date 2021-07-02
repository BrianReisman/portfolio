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
import { Overlay } from './components/atom/Overlay';

function App() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const workRef = useRef(null);
  const meRef = useRef(null);
  const connectRef = useRef(null);
  const headerRef = useRef(null);

  const scrollClickHandler = (e) => {
    const splitClassNames = e.target.className.split(' ');
    const className = splitClassNames[splitClassNames.length - 1];
    let section =
      className === 'stack'
        ? workRef
        : className === 'me'
        ? meRef
        : className === 'connect'
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
      setShowModal(false);
    }
  };

  return (
    <StyledApp>
      {showModal && (
        <Modal
          scrollClickHandler={scrollClickHandler}
          toggleModal={toggleModal}
        />
      )}

      <Header
        scrollClickHandler={scrollClickHandler}
        headerRef={headerRef}
        toggleModal={toggleModal}
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
      />
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
      <Overlay showDropDown={showDropDown} setShowDropDown={setShowDropDown} />
    </StyledApp>
  );
}

export default App;
