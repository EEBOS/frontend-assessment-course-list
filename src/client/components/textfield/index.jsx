import React from 'react'

function setStyle(name) {
  return `${styles.base}--${name}`
}

const styles = {
  base: 'control'
}
styles.label = setStyle('label')
styles.element = setStyle('textfield')

let cnt = 0;

export const Textfield = (props) => {
  const label = props.label;
  const id = props.id || `${styles.element}--${cnt}`

  cnt++
  return (
    <div className={styles.base}>
      { label && <label className={styles.label} htmlFor={id}>{label}</label> }
      <input type='text' className={styles.element} placeholder='Find Courses...' id={id} />
    </div>
  )
}

export default {
  Textfield
}