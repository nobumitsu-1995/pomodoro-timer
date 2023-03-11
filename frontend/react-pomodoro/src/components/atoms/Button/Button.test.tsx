/* eslint-disable react/react-in-jsx-scope */
import * as stories from './Button.stories'
import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import Theme from 'src/assets/styles/Theme'

describe('snapshot', () => {
  Object.entries(composeStories(stories)).forEach(([name, Component]) => {
    describe(name, () => {
      it('should render correctly', () => {
        const tree = render(
          <Theme>
            <Component {...Component.args} />
          </Theme>
        ).asFragment()
        expect(tree).toMatchSnapshot()
      })
    })
  })
})
