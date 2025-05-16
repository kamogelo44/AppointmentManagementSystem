// src/pages/Landing.jsx
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">AppointMate</div>
        <div className="flex space-x-4">
          <Link to="/login" className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Streamline Your Appointments
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          The easiest way to manage client bookings, schedules, and reminders - all in one place.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/signup" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg">
            Start Free Trial
          </Link>
          <Link to="/features" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-lg">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Preview */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '⏱️',
              title: "Easy Scheduling",
              description: "Let clients book appointments 24/7 through your personalized booking page"
            },
            {
              icon: '📅',
              title: "Calendar Sync",
              description: "Syncs with Google Calendar to avoid double bookings"
            },
            {
              icon: '🔔',
              title: "Automated Reminders",
              description: "Reduce no-shows with email and SMS reminders"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-gray-500">
          © {new Date().getFullYear()} AppointMate. All rights reserved.
        </div>
      </footer>
    </div>
  )
}