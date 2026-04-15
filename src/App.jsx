import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import FlightPlan from './pages/FlightPlan'
import Alerts from './pages/Alerts'
import BlackBox from './pages/BlackBox'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/flight/:id" element={<FlightPlan />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/blackbox" element={<BlackBox />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
