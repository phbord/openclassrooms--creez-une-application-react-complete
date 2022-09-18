import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  
  const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      console.log('theme: ', theme);
  }

  return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
      </ThemeContext.Provider>
  )
}