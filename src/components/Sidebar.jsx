import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      {/* Mobile sidebar */}
      <div className={`md:hidden fixed inset-0 z-40 ${mobileOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setMobileOpen(false)}></div>
        <div className="relative flex flex-col w-72 max-w-xs h-full bg-white">
          <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Menu</h2>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500"
              onClick={() => setMobileOpen(false)}
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-5 px-4">
            <nav className="space-y-2">
              <Link
                to="/dashboard"
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
              >
                Dashboard
              </Link>
              <Link
                to="/appointments"
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
              >
                Appointments
              </Link>
              <Link
                to="/clients"
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
              >
                Clients
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="flex-1 px-3 space-y-2">
              <Link
                to="/dashboard"
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
              >
                Dashboard
              </Link>
              <Link
                to="/appointments"
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
              >
                Appointments
              </Link>
              <Link
                to="/clients"
                className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
              >
                Clients
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}