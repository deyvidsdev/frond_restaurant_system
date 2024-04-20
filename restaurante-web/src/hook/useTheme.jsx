import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

function useTheme () {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default useTheme