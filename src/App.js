import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Course from './pages/Course'
import Home from './pages/Home'
import Register from './pages/Register'
const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/*'>
            <Route index element={<Home />} />
            <Route path='course'  element={<Course />} />
            <Route path='course/:course'  element={<Course />} />
            <Route path='register'  element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
