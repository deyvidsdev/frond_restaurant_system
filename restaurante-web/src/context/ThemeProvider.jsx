import { createContext, useEffect, useState } from 'react'

// 2. Create context
export const ThemeContext = createContext({
  theme: 'dark',
  setTheme: (_theme) => {},
  toggleTheme: () => {}
})

// 3. Create provider

const getTheme = () => {
  const theme = localStorage.getItem('theme')
  if (theme === null) {
    // Default theme is taken as dark-theme
    localStorage.setItem('theme', 'dark')
    return 'dark'
  } else {
    return theme
  }
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme)

  function toggleTheme () {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem('theme', theme)
    }
    refreshTheme()
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}