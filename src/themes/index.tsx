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
      default: "linear-gradient(to right, #b921d4, #6e80e6)", // Branco
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
      default: "linear-gradient(to right, #410e61, #17288a)", // Cinza escuro
      paper: "#424242", // Cinza um pouco mais claro
    },
    text: {
      primary: "#FFFFFF", // Branco
      secondary: "#BDBDBD", // Cinza claro
    },
  },
});

export { lightTheme, darkTheme };
