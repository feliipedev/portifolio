import React from "react";
import { Theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={Theme}>
      <ToastContainer />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
