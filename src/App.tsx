import { useTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { RootRoutes } from "routes";
export const App = () => {
  const theme = useTheme();

  return (
    <BrowserRouter>
      <main
        style={{
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          minHeight: "100vh",
          transition: "background-color 1s, color 0.3s, background 1s",
        }}
      >
        <RootRoutes />
      </main>
    </BrowserRouter>
  );
};
