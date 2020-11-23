import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import NavBar from '#components/NavBar';
import routes from '#config/routes';
import theme from '#config/theme';
import About from '#pages/About';
import Home from '#pages/Home';

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Switch>
        <Route path={routes.about}>
          <About />
        </Route>
        <Route path={routes.home}>
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>
);

export default App;
