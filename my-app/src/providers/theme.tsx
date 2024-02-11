import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";


type ContextType = { theme:"light"|"dark", toggleLightTheme:()=>void, toggleDarkTheme:() => void };
  
export const ThemeContext = createContext<ContextType>({
  theme: "light",
  toggleLightTheme: () => {},
  toggleDarkTheme: () => {}
});

export const ThemeProvider:FC = ({ children }:PropsWithChildren) => {
  
    const [theme, setTheme] = useState<ContextType["theme"]>("light");

  const toggleLightTheme = ():void  => {
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
