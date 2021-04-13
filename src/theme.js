const theme = {
  rootSize: "62.5%",
  color: {
    black: "#1E0E04",
    orange: "#FF6B12",
    white: "#FCFBFA",
    purple: "#564B80",
    transition: "#F7F7F7",
    background: '#EBEBEB'
  },
  font: {
    // if you want to change the main font 1. change the contents of the <style> tags in public/index.html and 2. change the string argument here for theme.fonts.main
    main: "Roboto, sans-serif",
  },
  size: {
    small: "2.4rem",
    small1024: '2.2rem',
    // small768: '2rem',
    h1: "15.5rem",
    h1768: '13rem',
    h2: '7.2rem',
    h3: '4.8rem',
  },
  breakpoints: {
    desktop: "1440px" /* 1440 - desktop */,
    laptop: "1280px" /* 1280 - laptop */,
    tabletH: "1024px" /* 1024 - tablet horizontal */,
    tabletV: "768px" /* 768  - tablet vertical/mobile landscape*/,
    mid: '600px',
    mobileL: "425px" /* 425 -Mobile Large*/,
    mobileM: "375px" /* 375 -Mobile Med*/,
    mobileS: "320px" /* 320 -Mobile Small*/,
  },
};

export default theme;


