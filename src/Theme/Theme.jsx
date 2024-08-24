import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode:'light',
        background: {
            default:'#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#A9A9A9',
            secondary: '#555555',
        },
        appBar: {
            main: '#A9A9A9',
        }
    }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#b0b0b0',
    },
    appBar: {
        main: '#333333',
    },
  },
});

export const pastelTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5',
      paper: '#a5d6a7',
    },
    text: {
      primary: '#004d40',
      secondary: '#00796b',
    },
    appBar: {
        main: '#a5d6a7',
    },
  },
});

export const lavenderTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f3e5f5', 
      paper: '#ce93d8',
    },
    text: {
      primary: '#6a1b9a', 
      secondary: '#ab47bc',
    },
     appBar: {
        main: '#ce93d8',
     },
  },
});
