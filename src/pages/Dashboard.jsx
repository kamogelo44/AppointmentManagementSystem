import { useEffect } from 'react'
import { auth } from '../firebase'
import { useNavigate, Link } from 'react-router-dom'
import { CalendarIcon, UserIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/login')
      } else {
        setUser(user)
      }
    })

    return () => unsubscribe()
  }, [navigate])

  const stats = [
    { name: 'Upcoming Appointments', value: '12', change: '+4', changeType: 'positive' },
    { name: 'Completed Today', value: '8', change: '+2', changeType: 'positive' },
    { name: 'Cancellations', value: '1', change: '-1', changeType: 'negative' },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.displayName || user?.email?.split('@')[0] || 'User'}!
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Here's what's happening with your appointments today.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link
            to="/appointments/new"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            New Appointment
          </Link>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <CalendarIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </div>
                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Quick Actions
          </h3>
        </div>
        <div className="bg-white grid grid-cols-1 gap-6 sm:grid-cols-3 p-6">
          <Link
            to="/appointments"
            className="group rounded-lg border border-gray-200 p-6 hover:border-blue-500 hover:shadow-md transition-all duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-200">
                <CalendarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Appointments</h3>
              <p className="mt-2 text-sm text-gray-500">
                View and manage all appointments
              </p>
            </div>
          </Link>

          <Link
            to="/clients"
            className="group rounded-lg border border-gray-200 p-6 hover:border-blue-500 hover:shadow-md transition-all duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-200">
                <UsersIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Clients</h3>
              <p className="mt-2 text-sm text-gray-500">
                Manage your client database
              </p>
            </div>
          </Link>

          <Link
            to="/reports"
            className="group rounded-lg border border-gray-200 p-6 hover:border-blue-500 hover:shadow-md transition-all duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-200">
                <ChartBarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Reports</h3>
              <p className="mt-2 text-sm text-gray-500">
                View business analytics
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent appointments (example) */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Today's Appointments
          </h3>
        </div>
        <div className="bg-white divide-y divide-gray-200">
          {[1, 2, 3].map((item) => (
            <div key={item} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors duration-150">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <UsersIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Client {item}</p>
                    <p className="text-sm text-gray-500">Consultation</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">2:{item}0 PM</p>
                  <p className="text-sm text-gray-500">30 mins</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}