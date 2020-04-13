import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { axe } from 'jest-axe'
import { Button } from './Button'

describe('Button', () => {
  it('should not have any a11y violations', async () => {
    const component = (
      <main>
        <Button onClick={jest.fn()} />
      </main>
    )

    const jestAxeComponent = ReactDOMServer.renderToString(component)

    const results = await axe(jestAxeComponent, {
      rules: {
        'button-name': {
          enabled: false,
        },
      },
    })

    expect(results).toHaveNoViolations()
  })
})
