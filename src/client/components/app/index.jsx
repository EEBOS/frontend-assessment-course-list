import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '../header'
import pageCourses from '../../pages/courses'

export const App = () => {
  return (
    <Router basename='/'>
      <Header />
      <main className="app-content">
        <Routes>
          <Route path={`${pageCourses.Route}`} element={<pageCourses.Page />}/>
        </Routes>
      </main>
    </Router>
  )
}

export default {
  App
}