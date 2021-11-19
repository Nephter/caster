export const lightThemeOptions = {
  palette: {
    primary: {
      main: '#661503',
      light: 'rgb(132, 67, 53)',
      dark: 'rgb(71, 14, 2)',
    },
    secondary: {
      main: '#664703',
      light: 'rgb(132, 107, 53)',
      dark: 'rgb(71, 49, 2)',
    },
  },

  typography: {
    h6: {
      color: '#664703',
      fontFamily: 'Patrick Hand sc, cursive',
    },
    h3: {
      paddingTop: '5px',
      paddingBottom: '5px',
      paddingInline: '10px',
      fontSize: '1.2rem',
      fontFamily: 'Patrick Hand sc, cursive',
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontFamily: 'Patrick Hand SC, cursive',
          paddingBottom: '2px',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          fontSize: '.8rem',
          color: '#32325d',
          transform: 'translate(-3px, -10px)',
          height: '1.3rem',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'transparent',
          marginInline: '3px',
          fontFamily: 'Patrick Hand SC, cursive',
          height: '15px',
          width: '58px',
        },
      },
    },
  },
};
