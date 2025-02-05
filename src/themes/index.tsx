import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196F3", // Azul vibrante
    },
    secondary: {
      main: "#FFC107", // Amarelo
    },
    background: {
      default:
        "linear-gradient(142deg, rgba(51,205,249,1) 0%, rgba(233,56,229,1) 69%, rgba(40,214,249,1) 100%)",
      paper: "#F5F5F5", // Cinza claro
    },
    text: {
      primary: "#000000", // Preto
      secondary: "#757575", // Cinza
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#673AB7", // Roxo
    },
    secondary: {
      main: "#FF9800", // Laranja
    },
    background: {
      default:
        "linear-gradient(142deg, rgba(8,3,94,1) 0%, rgba(112,25,110,1) 69%, rgba(18,107,125,1) 100%)", // Cinza escuro
      paper: "#424242", // Cinza um pouco mais claro
    },
    text: {
      primary: "#FFFFFF", // Branco
      secondary: "#BDBDBD", // Cinza claro
    },
  },
});

export { lightTheme, darkTheme };
