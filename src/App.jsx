// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Appointments from './pages/Appointments'
import NewAppointment from './pages/NewAppointment'
import PrivateRoute from './components/PrivateRoute'
import Layout from './layouts/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} /> {/* New landing page */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointments/new" element={<NewAppointment />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App