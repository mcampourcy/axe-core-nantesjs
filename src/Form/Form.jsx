import React, { useState } from 'react'
import { func } from 'prop-types'

import { Button } from '../Button'
import { Input } from '../Input'

import './Form.css'

export function Form({ buttonAction }) {
  const loginError = 'Entrez une adresse email en @ nantes js .fr'
  const passwordError = 'Minimun 8 caractères avec au moins une majuscule et un nombre'
  const [errors, setErrors] = useState({
    login: {
      hasError: false,
      value: '',
    },
    password: {
      hasError: false,
      value: '',
    },
  })

  const handleBlur = event => {
    const { name, type, value } = event.target
    let pattern

    if (type === 'email') {
      pattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/
    } else if (type === 'password') {
      pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    }

    const newErrors = {
      ...errors,
      [name]: {
        hasError: value.length === 0 || !value.match(pattern),
        value,
      },
    }

    setErrors(newErrors)
  }

  const handleChange = event => {
    const { name, value } = event.target
    const newErrors = {
      ...errors,
      [name]: {
        hasError: false,
        value,
      },
    }
    setErrors(newErrors)
  }

  return (
    <form>
      <Input
        error={errors.login.hasError ? loginError : undefined}
        label="Email"
        onBlur={handleBlur}
        onChange={handleChange}
        name="login"
        required
        type="email"
        value={errors.login.value}
      />

      <Input
        error={errors.password.hasError ? passwordError : undefined}
        label="Mot de passe"
        name='password'
        onBlur={handleBlur}
        onChange={handleChange}
        required
        type='password'
        value={errors.password.value}
      />
      <span>
        <Button label="Valider" onClick={buttonAction} />
      </span>
    </form >
  )
}

Form.propTypes = {
  buttonAction: func,
}
