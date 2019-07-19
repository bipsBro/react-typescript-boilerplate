import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "./statics/themes/index";
import configureStore from "./store";
import AppRouter from "./routers";
import { GlobalStyle } from "./statics/themes/globalstyles";

const store = configureStore();

export const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <AppRouter />
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
