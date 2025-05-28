import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'


const App = () => {
  return (
    <Routes >
      <Route path='/' element={<DashboardPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
    </Routes>
  )
}

export default App