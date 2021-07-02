import { useRef, useState, useEffect } from 'react';

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
  const [displayOverlay, setDisplayOverlay] = useState(false);

  const keyClose = (e) => {
    if (e.key === 'Escape') closeAll();
  };

  const closeAll = () => {
    // console.log('closeAll');
    setShowDropDown(false);
    setDisplayOverlay(false);
    setShowModal(false);
  };

  const displayModal = () => {
    // console.log('displayModal');
    setShowDropDown(false);
    setDisplayOverlay(true);
    setShowModal(true);
  };

  const showResume = () => {
    // console.log('showResume');
    setShowDropDown(true);
    setDisplayOverlay(true);
    setShowModal(false);
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

    closeAll();
  };

  useEffect(() => {
    if (showModal) {
      setDisplayOverlay(true);
    }
  }, [showModal]);

  return (
    <StyledApp onKeyDown={keyClose}>
      {showModal && (
        <div>
          <Modal
            scrollClickHandler={scrollClickHandler}
            closeAll={closeAll}
            showResume={showResume}
          />
        </div>
      )}

      <Header
        scrollClickHandler={scrollClickHandler}
        headerRef={headerRef}
        displayModal={displayModal}
        showDropDown={showDropDown}
        showResume={showResume}
        closeAll={closeAll}
      />
      <Hero />
      <Spacer />
      <Work refType={workRef} />
      <Spacer />
      <Me refType={meRef} />
      <Spacer />
      <Connect refType={connectRef} />
      <Footer />
      {/* {showModal && (
        <div
          id="overlay"
          className="active"
          onClick={() => {
            toggleModal();
          }}
        ></div>
      )} */}
      <Overlay displayOverlay={displayOverlay} closeAll={closeAll} />
    </StyledApp>
  );
}

export default App;
