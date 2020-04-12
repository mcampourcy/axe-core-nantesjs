import React from 'react'
import { func, string } from 'prop-types'

import './Button.css'

export function Button({ label, onClick, type }) {
  return (
    <button onClick={onClick} type={type}>{label}</button>
  )
}

Button.defaultValues = {
  type: 'button',
}

Button.propTypes = {
  label: string.isRequired,
  onClick: func.isRequired,
  type: string,
}
