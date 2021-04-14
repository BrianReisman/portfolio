import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";

// import darkTheme from "./themes/darktheme";
// const colorTheme = JSON.parse(localStorage.getItem("colorTheme"));
// let themeInUse = colorTheme === "dark" ? darkTheme : theme;
let themeInUse = theme;



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeInUse}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
