import React from 'react'
import ReactDOMServer from 'react-dom/server'
import axe from 'axe-core'
import { axe as jestAxe } from 'jest-axe'

import { Input } from './Input'
import { mountToDoc } from '../../setupTests'

describe('<Input />', () => {
  let axeComponent
  let jestAxeComponent
  let wrapper

  const props = {
    error: null,
    label: 'Test input',
    name: 'test',
    onChange: jest.fn(),
    type: 'email',
    value: 'test',
  }

  beforeEach(() => {
    const component = (
      <main>
        <Input {...props} />
      </main >
    )

    wrapper = mountToDoc(component)
    axeComponent = wrapper.getDOMNode()

    jestAxeComponent = ReactDOMServer.renderToString(component)
  })

  describe('Testing Axe Core', () => {
    it('should test axe core', async () => {
      const res = await axe.run(axeComponent, {
        runOnly: {
          values: ['wcag2a', 'wcag2aa'],
        },
      })

      if (res.violations.length > 0) {
        console.info(res.violations)
      }

      expect(res.violations.length).toEqual(0)
    })

    it('should test axe core with jest plugin throw error', async () => {
      const results = await jestAxe(jestAxeComponent, {
        rules: {
          'aria-valid-attr-value': { enabled: false },
        },
      })
      expect(results).toHaveNoViolations()
    })
  })
})
