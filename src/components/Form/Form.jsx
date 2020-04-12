import React from 'react'
import { func } from 'prop-types'

import { useForm } from '../../hooks'
import { Button } from '../Button'
import { Input } from '../Input'
import { validate } from './formValidation'

import './Form.css'

export function Form({ buttonAction }) {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate)

  function login() {
    console.info('No errors, submit callback called!')
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        error={errors.email || null}
        label="Email"
        onChange={handleChange}
        name="email"
        required
        type="email"
        value={values.email}
      />

      <Input
        error={errors.password || null}
        label="Mot de passe"
        name="password"
        onChange={handleChange}
        required
        type="password"
        value={values.password}
      />
      <span>
        <Button label="Valider" onClick={buttonAction} type="submit" />
      </span>
    </form >
  )
}

Form.propTypes = {
  buttonAction: func,
}
