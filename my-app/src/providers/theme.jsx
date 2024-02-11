// import { createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext("theme");

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");
//   const toggleLightTheme = () => {
//     setTheme("light");
//   };

//   const toggleDarkTheme = ()=> {
//     setTheme("dark");
//   };

//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);

//   console.log(theme);
//   return (
//     <ThemeContext.Provider value={{ theme, toggleLightTheme, toggleDarkTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
