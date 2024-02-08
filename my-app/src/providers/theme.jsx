import { createContext, useState } from "react";

export const ThemeContext = createContext("theme");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleLightTheme = () => {
    setTheme("light");
  };

  const toggleDarkTheme = () => {
    setTheme("dark");
  };

  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, toggleLightTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
