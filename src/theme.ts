import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#141414",
      contrastText: "#fff",
    },
    secondary: {
      main: "#000",
      contrastText: "#fff",
    },
    background: {
      default: "#141414",
      paper: "#000",
    },
    text: {
      primary: "#fff",
      secondary: "#b3b3b3",
    },
  },
  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
    h6: {
      fontSize: "0.875rem",
    },
    subtitle2: {
      fontSize: "0.75rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: "1rem",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
  },
});
export default theme;
