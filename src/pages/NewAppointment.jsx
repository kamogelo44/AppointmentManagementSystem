import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NewAppointment() {
  const [formData, setFormData] = useState({
    clientName: '',
    date: '',
    serviceType: '',
    notes: ''
  })

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">New Appointment</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.clientName}
            onChange={(e) => setFormData({...formData, clientName: e.target.value})}
          />
        </div>
        
        {/* Add other form fields similarly */}
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Create Appointment
        </button>
      </form>
      
      <Link to="/appointments" className="block mt-4 text-blue-600 hover:underline">
        Back to Appointments
      </Link>
    </div>
  )
}