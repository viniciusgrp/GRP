import React, { JSX } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Theme } from "Theme";
import { ThemeProvider } from "context/theme";

const root = (): JSX.Element => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  root() as JSX.Element
);
