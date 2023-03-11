/* eslint-disable react/react-in-jsx-scope */
import * as stories from './Modal.stories'
import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import Theme from 'src/assets/styles/Theme'
import ModalBody from './ModalBody'

describe('snapshot', () => {
  Object.entries(composeStories(stories)).forEach(([name, Component]) => {
    describe(name, () => {
      it('should render correctly', () => {
        const tree = render(
          <Theme>
            <Component {...Component.args} {...Component.play} />
          </Theme>
        ).asFragment()
        expect(tree).toMatchSnapshot()
      })
    })
  })

  it('Modal Body', () => {
    const tree = render(
      <Theme>
        <ModalBody />
      </Theme>
    ).asFragment()
    expect(tree).toMatchSnapshot()
  })
})
