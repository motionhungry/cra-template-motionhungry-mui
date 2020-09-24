import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import routes from './routes';

const App = () => (
  <Router>
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
  </Router>
);

export default App;
