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
    h1: "15.5rem",
    h1768: '13rem',
    h2: '7.2rem',
    h3: '4.8rem',
  },
};

export default theme;


// breakpoints: {
//   1: "1440px" /* 1440 - desktop */,
//   2: "1280px" /* 1280 - laptop */,
//   3: "1024px" /* 1024 - tablet landscape */,
//   4: "768px" /* 768  - tablet vertical/mobile landscape*/,
//   5: "425px" /* 425 -Mobile Large, stack*/,
//   6: "375px" /* 375 -Mobile Med, stack*/,
//   7: "320px" /* 320 -Mobile Small, stack*/,
// },