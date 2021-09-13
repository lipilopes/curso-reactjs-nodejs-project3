import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import theme from "./styles/themes";
import { GlobalStyles } from "./styles/global-styles";
import Home from "./templates/Home";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route to="*" component={Home} />
        </Switch>
      </BrowserRouter>

      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
