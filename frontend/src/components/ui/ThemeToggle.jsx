import { useUI } from '../../context/UIContext.jsx'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useUI()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="
        h-10 w-10 rounded-lg border border-gray-200 bg-white
        hover:bg-gray-50 transition-colors
        dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800
      "
    >
      {/* ICON CENTERED */}
      <div className="h-full w-full flex items-center justify-center text-xl leading-none select-none">
        {isDark ? '☀️' : '🌙'}
      </div>
    </button>
  )
}

export default ThemeToggle
