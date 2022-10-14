import React, {createContext, useState} from "react";

interface ThemeProviderProps {
	children: React.ReactNode;
}

const DEFAULT_THEME = "light";

export const ThemeContext = createContext({theme: DEFAULT_THEME, toggleTheme: () => {}});

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
	);
};
