import React from 'react'
import { func, string } from 'prop-types'

import './Input.css'

export function Input({ error, label, name, onBlur, onChange, required = false, type, value }) {
  const describedBy = `describedby-${name}`

  return (
    <div>
      {label && (
        <label htmlFor={name}>{label}</label>
      )}
      <input
        aria-describedby={describedBy}
        aria-invalid={error !== undefined ? 'true' : 'false'}
        aria-label={label}
        aria-required={required ? 'true' : 'false'}
        onBlur={onBlur}
        onChange={onChange}
        type={type}
        value={value}
      />
      {error && (
        <span
          aria-roledescription="alert"
          aria-live="polite"
          id={describedBy}>
          {error}
        </span>
      )}
    </div>
  )
}

Input.propTypes = {
  error: string,
  label: string,
  name: string.isRequired,
  onBlur: func.isRequired,
  onChange: func.isRequired,
  type: string.isRequired,
  value: string.isRequired,
}
