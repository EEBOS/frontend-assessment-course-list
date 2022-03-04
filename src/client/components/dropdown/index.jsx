import React from 'react'

function setStyle(name) {
  return `${styles.base}--${name}`
}

const styles = {
  base: 'control'
}
styles.label = setStyle('label')
styles.element = setStyle('dropdown')

let cnt = 0;

function createOptions(opts) {
  return opts.map((opt) => {
    return <option key={opt.key}>{opt.label}</option>
  })
}

export const Dropdown = (props) => {
  const label = props.label
  const options = (props.options && props.options.length > 0) ? createOptions(props.options) : '' 
  const id = props.id || `${styles.element}--${cnt}`
  
  cnt++
  return (
    <div className='control'>
      { label && <label className={styles.label} htmlFor={id}>{label}</label> }
      <select className={styles.element} id={id}>{options}</select>
    </div>
  )
}

export default {
  Dropdown
}