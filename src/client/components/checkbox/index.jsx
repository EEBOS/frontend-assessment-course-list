import React from 'react'

function setStyle(name) {
  return `${styles.base}--${name}`
}

const styles = {
  base: 'control'
}
styles.label = setStyle('label')
styles.element = setStyle('checkbox')

let cnt = 0;

export const Checkbox = (props) => {
  const label = props.label
  const value = props.value
  const id = props.id || `${styles.element}--${cnt}`

  cnt++
  return (
    <div className='control'>
      <input type='checkbox' className={styles.element} value={value} id={id}/>
      { label && <label className={styles.label} htmlFor={id}>{label}</label> }
    </div>
  )
}

export default {
  Checkbox
}