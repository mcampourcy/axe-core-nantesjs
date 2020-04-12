import React, { useState } from 'react'
import { Form } from './components/Form'
import './App.css'

export function App() {
  const [titleClass, setTitleClass] = useState('normal')

  const handleClick = () => {
    const newClass = titleClass === 'normal' ? 'notVisible' : 'normal'
    setTitleClass(newClass)
  }

  return (
    <main>
      <h1 tabIndex="0" className={titleClass}>
        Bienvenue à ce meetup
      </h1>
      <p tabIndex="0">
        C'est un faux formulaire, rien que pour vos yeux.
      </p>
      <Form buttonAction={handleClick} />
    </main>
  )
}
