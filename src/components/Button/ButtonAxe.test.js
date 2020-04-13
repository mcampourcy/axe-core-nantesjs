import React from 'react'
import axe from 'axe-core'
import { mountToDoc } from '../../setupTests'
import { Button } from './Button'

describe.skip('<Button /> with axe-core', () => {
  it('should test axe core', async () => {
    const wrapper = mountToDoc(
      <main>
        <Button label="Test" onClick={jest.fn()} />
      </main >,
    )
    const axeComponent = wrapper.getDOMNode()
    const res = await axe.run(axeComponent)

    if (res.violations.length > 0) {
      console.info(res.violations)
    }

    expect(res.violations.length).toEqual(0)
  })
})
