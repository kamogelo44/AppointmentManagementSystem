import { Link } from 'react-router-dom'

export default function Appointments() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Appointments</h2>
        <Link 
          to="/dashboard" 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to Dashboard
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Calendar Section */}
          <div className="md:col-span-1 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Calendar</h3>
            {/* Calendar component would go here */}
            <div className="h-64 bg-white border rounded-md flex items-center justify-center">
              <p className="text-gray-500">Calendar View</p>
            </div>
          </div>
          
          {/* Appointments List */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
            <div className="space-y-4">
              {/* Sample appointment items */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-lg p-4 hover:bg-gray-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Appointment {item}</h4>
                      <p className="text-gray-600">June {10 + item}, 2023 - 2:{item}0 PM</p>
                    </div>
                    <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-sm">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Add New Appointment Button */}
            <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              + New Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}