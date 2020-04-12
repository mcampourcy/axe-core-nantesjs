import React from 'react'
import { func, string } from 'prop-types'
import classnames from 'classnames'

import './Input.css'

export function Input({ error, label, name, onChange, required, type, value }) {
  const describedBy = `describedby-${name}`

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        aria-describedby={describedBy}
        aria-invalid={error ? 'true' : 'false'}
        aria-label={label}
        aria-required={required ? 'true' : 'false'}
        className={classnames({ error })}
        id={name}
        name={name}
        onChange={onChange}
        required={required}
        type={type}
        value={value}
      />
      <span
        aria-roledescription="alert"
        aria-live="assertive"
        id={describedBy}
        className="input-error"
        role="alert"
      >
        {error}
      </span>
    </div>
  )
}

Input.defaultValues = {
  required: false,
  value: '',
}

Input.propTypes = {
  error: string,
  label: string.isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
  type: string.isRequired,
  value: string.isRequired,
}
