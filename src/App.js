import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from './styles/global-style';
import theme from "./styles/theme";
import Home from "./pages/Home";

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
};

export default App;
