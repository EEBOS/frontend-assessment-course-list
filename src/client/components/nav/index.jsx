import React from 'react'
import { Link } from 'react-router-dom'
import pageCourses from '../../pages/courses'

export const Nav = () => {
  return (
    <nav className="app-nav">
      <Link to={`${pageCourses.Route}`} className="app-nav__item">Courses</Link>
    </nav>
  )
}

export default {
  Nav
}