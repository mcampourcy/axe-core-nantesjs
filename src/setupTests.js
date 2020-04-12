import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { toHaveNoViolations } from 'jest-axe'

configure({
  adapter: new Adapter(),
  testEnvironment: 'jest-environment-jsdom-sixteen',
})

let wrapper
export function mountToDoc(reactElm) {
  if (!document) {
    // Set up a basic DOM
    global.document = jsdom('<!doctype html><html lang="fr"><body></body></html>') // eslint-disable-line no-undef
  }
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
