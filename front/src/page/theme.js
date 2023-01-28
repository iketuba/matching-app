import { createTheme } from '@mui/material/styles';

const light = {
  palette: {
    mode: 'light',
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ab003c',
      main: '#f50057',
      dark: '#f73378',
      contrastText: '#fff',
    },
  },
}

const theme = createTheme(light);

export default theme
