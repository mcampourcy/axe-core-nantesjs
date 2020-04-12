/* eslint-disable-line no-undef */
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { toHaveNoViolations } from 'jest-axe'

configure({ adapter: new Adapter() })

let wrapper
export function mountToDoc(reactElm) {
  if (!wrapper) {
    wrapper = document.createElement('main')
    document.body.appendChild(wrapper)
  }

  const container = mount(reactElm)
  wrapper.innerHTML = ''
  wrapper.appendChild(container.getDOMNode())
  return container
}

expect.extend(toHaveNoViolations)
