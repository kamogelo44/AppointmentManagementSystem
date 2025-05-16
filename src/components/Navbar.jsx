import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Navbar({ setSidebarOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const handleLogout = async () => {
    try {
      await auth.signOut()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Mobile menu button and logo */}
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="block h-6 w-6" />
            </button>
            <div className="hidden md:block">
              <Link to="/dashboard" className="text-xl font-bold text-blue-600">
                AppointMate
              </Link>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link 
              to="/dashboard" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Dashboard
            </Link>
            <Link
              to="/appointments"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Appointments
            </Link>
            <Link
              to="/clients"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Clients
            </Link>
          </div>

          {/* User profile and logout */}
          <div className="flex items-center">
            <div className="hidden md:flex md:items-center md:space-x-4">
              <span className="text-sm text-gray-600">
                {auth.currentUser?.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition"
              >
                Logout
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/dashboard"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Dashboard
          </Link>
          <Link
            to="/appointments"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Appointments
          </Link>
          <Link
            to="/clients"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Clients
          </Link>
          <div className="px-3 py-2">
            <span className="block text-sm text-gray-500">
              {auth.currentUser?.email}
            </span>
            <button
              onClick={handleLogout}
              className="mt-2 w-full text-left px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}