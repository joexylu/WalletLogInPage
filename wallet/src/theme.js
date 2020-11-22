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

  overrides:{
    MuiOutlinedInput: {
        root: {
            borderRadius: '25px'
        }
    },
    MuiButton: {
        root: {
            borderRadius: '25px'
        }
    },
    MuiSelect: {
        selectMenu: {
            border: 'none',
        }
    },
  },
});

export default theme;
