import React from 'react'
import { Nav } from '../nav'
import { Avatar } from '../avatar'

export const Header = () => {
  return (
    <header className='app-bar'>
      <div className='applicant-info'>
        <h2 className='applicant-info__title'>Applicant Name</h2>
        <small className='applicant-info__subtitle'>Frontend Assessment</small>
      </div>
      <Nav />
      <Avatar />
    </header>
  )
}

export default {
  Header
}