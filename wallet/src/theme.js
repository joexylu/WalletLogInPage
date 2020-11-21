import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#26A69A',
    },
    secondary: {
      main: '#51b7ae',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
