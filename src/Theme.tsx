import { ThemeProvider } from "@emotion/react"
import { useTheme as useThemeContext } from "context/theme";
import { App } from "App"
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./themes";
import { Button } from "@mui/material";

export const Theme = () => {
    const { isDarkMode, setIsDarkMode } = useThemeContext();

    const [theme, setTheme] = useState(lightTheme);

      useEffect(() => {
        console.log(isDarkMode)
        setTheme(isDarkMode ? darkTheme : lightTheme);
      }, [isDarkMode]);
      
    return (
        <ThemeProvider theme={theme}>
            <Button onClick={() => setIsDarkMode(!isDarkMode)}>
                Change
            </Button>
            <App/>
        </ThemeProvider>
    )
}