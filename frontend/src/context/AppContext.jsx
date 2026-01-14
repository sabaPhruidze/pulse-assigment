import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => setTheme((p) => (p === 'dark' ? 'light' : 'dark'))

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
