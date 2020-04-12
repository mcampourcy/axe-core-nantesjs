import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { axe as jestAxe } from 'jest-axe'

import { Button } from './Button'

describe('<Button />', () => {
  let jestAxeComponent

  const props = {
    label: 'Test input',
    onClick: c => c,
  }

  beforeEach(() => {
    const component = (
      <main>
        <Button {...props} />
      </main >
    )

    jestAxeComponent = ReactDOMServer.renderToString(component)
  })

  it('should test axe core with jest plugin throw error', async () => {
    const results = await jestAxe(jestAxeComponent)
    expect(results).toHaveNoViolations()
  })
})
