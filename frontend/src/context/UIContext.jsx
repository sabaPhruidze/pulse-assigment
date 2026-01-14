import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const UIContext = createContext(null)

const THEME_KEY = 'pulse-theme'
const SIDEBAR_KEY = 'pulse-sidebar-open'

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'dark' || saved === 'light') return saved
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
    return prefersDark ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

const getInitialSidebar = () => {
  try {
    const saved = localStorage.getItem(SIDEBAR_KEY)
    if (saved === '0') return false
    if (saved === '1') return true
    return true
  } catch {
    return true
  }
}

export const UIProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)
  const [sidebarOpen, setSidebarOpen] = useState(getInitialSidebar)

  const isDark = theme === 'dark'

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {}
    document.documentElement.classList.toggle('dark', isDark)
  }, [theme, isDark])

  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_KEY, sidebarOpen ? '1' : '0')
    } catch {}
  }, [sidebarOpen])

  const value = useMemo(() => {
    const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
    const toggleSidebar = () => setSidebarOpen((s) => !s)

    return {
      theme,
      isDark,
      setTheme,
      toggleTheme,
      sidebarOpen,
      setSidebarOpen,
      toggleSidebar,
    }
  }, [theme, isDark, sidebarOpen])

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export const useUI = () => {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error('useUI must be used within UIProvider')
  return ctx
}
