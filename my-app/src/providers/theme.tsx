import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";


type ContextType = { theme:string, toggleLightTheme:()=>void, toggleDarkTheme:() => void };
  
export const ThemeContext = createContext<ContextType | string>("theme");

export const ThemeProvider:FC = ({ children }:PropsWithChildren) => {
  const [theme, setTheme] = useState("light");
  const toggleLightTheme = () => {
    setTheme("light");
  };

  const toggleDarkTheme = ():void => {
    setTheme("dark");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleLightTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
