import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();

theme.overrides = {
  MuiContainer: {
    root: {
      marginTop: theme.spacing(3),
    },
  },
};

export default theme;
