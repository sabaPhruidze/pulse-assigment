import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import MetaMaskButton from './MetaMaskButton'
import ThemeToggle from './ui/ThemeToggle'
import { useUI } from '../context/UIContext'
const Layout = ({ children }) => {
  const location = useLocation()
 const [sidebarOpen, setSidebarOpen] = useState(true)      // desktop collapse
 const [mobileOpen, setMobileOpen] = useState(false)      // mobile drawer


  const navigation = [
    { name: 'Dashboard', path: '/', icon: '📊' },
    { name: 'Assets', path: '/assets', icon: '💰' },
    { name: 'News', path: '/news', icon: '📰' },
    { name: 'Alerts', path: '/alerts', icon: '🔔' },
    { name: 'Portfolio', path: '/portfolio', icon: '💼' },
  ]

  return (
   <div className="min-h-screen bg-gray-50 select-none sm:select-text">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
           <div className="flex items-center">
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 mr-3"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <h1 className="text-xl sm:text-2xl font-bold text-pulse-primary">Pulse</h1>
            <span className="ml-2 text-sm text-gray-500 hidden sm:inline">Market Monitoring Engine</span>
          </div>
          <div className='flex gap-3'>
             <ThemeToggle />
            <MetaMaskButton />
          </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
       <aside
          className={`
            fixed inset-y-0 left-0 z-40 bg-white border-r border-gray-200
            transform transition-transform duration-300
            ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
            md:static md:translate-x-0
            ${sidebarOpen ? 'md:w-64' : 'md:w-16'}
            w-64
            min-h-[calc(100vh-4rem)]
            `}>
              <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <span className="font-semibold text-gray-800">Menu</span>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-pulse-primary text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      {sidebarOpen && <span>{item.name}</span>}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
       <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      </div>
    </div>
  )
}

export default Layout
