import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { Button } from '../components/Button'

export default {
  title: 'Button',
  decorators: [withA11y],
}

export const accessible = () => (<Button onClick={c => c} label="Validation" />)

export const inaccessible = () => (<Button onClick={c => c} label="" />)
