import React from 'react'

function setStyle(name) {
  return `${styles.base}__${name}`
}

const styles = {
  base: 'control'
}
styles.legend = setStyle('legend')
styles.label = setStyle('label')
styles.element = setStyle('radio')

let cnt = 0;

function createNameBase(name) {
  return name
}

function createOptions(opts, name) {

  return opts.map((opt, index) => {
    const id = opt.id || `${styles.element}--${cnt}`
    const key = opt.key || `${name}--${index}`

    cnt++
    return (
      <label key={key} className={styles.label} htmlFor={id}>
        <input type="radio" className={styles.element} name={name} id={id} />
        {opt.label}
      </label>
    )
  })
}

export const Radio = (props) => {
  const label = props.label
  const options = (props.options && props.options.length > 0) ? createOptions(props.options, createNameBase(label)) : []

  return (
    <fieldset className='controls-radiogroup'>
      { label && <legend className={styles.legend}>{label}</legend> }
      { options }
    </fieldset>
  )
}

export default {
  Radio
}