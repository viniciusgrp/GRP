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
        }}
      >
        <RootRoutes />
      </main>
    </BrowserRouter>
  );
};
