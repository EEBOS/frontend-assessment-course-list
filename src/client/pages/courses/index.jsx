import React from 'react'
import { ContentControls } from '../../components/content-controls'

export const Route = '/'

export const Page = () => {
  return (
    <>
      <ContentControls />
      <div>List of Courses</div>
    </>
  )
}

export default {
  Route,
  Page
}