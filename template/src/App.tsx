import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from '#components/NavBar';
import routes from '#config/routes';
import theme from '#config/theme';
import About from '#pages/About';
import Home from '#pages/Home';

const App: React.FC = () => (
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
