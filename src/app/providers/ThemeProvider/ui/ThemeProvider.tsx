import React, { useState, useMemo } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  Theme,
} from "../lib/ThemeContext";

// преобразование к типу и берем данные из стоража
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      // тут состояние прокидывается в провайдер
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
