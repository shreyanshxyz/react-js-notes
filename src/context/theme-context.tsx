import { ReactNode, createContext, useEffect, useState } from "react";
// import { useTheme } from "./themeUtil";

type ThemeProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// useTheme;
export const ThemeProvider = ({ children }: ThemeProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode, theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
