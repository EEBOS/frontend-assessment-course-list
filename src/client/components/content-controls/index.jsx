import React from 'react'
import { Textfield } from '../textfield'
import { Checkbox } from '../checkbox'
import { Dropdown } from '../dropdown'
import { Radio } from '../radio'

export const ContentControls = () => {
  const sortOptions = [
    { key: 'title', label: 'Title' },
    { key: 'created_at', label: 'Created' }
  ]
  const radioOptions = [
    { label: '↑' },
    { label: '↓' }
  ]

  return (
    <div className='controls'>
      <Textfield label='title' />
      <fieldset className='controls-checkgroup'>
        <legend>Price</legend>
        <Checkbox label='Paid' value='paid' />
        <Checkbox label='Free' value='free' />
      </fieldset>
      <Dropdown label="sort by" options={sortOptions} />
      <Radio label="sort order" options={radioOptions} />
    </div>
  )
}

export default {
  ContentControls
}