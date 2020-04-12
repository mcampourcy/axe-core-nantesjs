import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { Button } from './Button'

export default {
  title: 'Button',
  decorators: [withA11y],
}

// export const withText = () => <Button onClick={c => c} label="Hello, button" />

export const accessible = () => (<Button onClick={c => c} label="Hello, button" />)

export const inaccessible = () => (<Button onClick={c => c} label="" />)
