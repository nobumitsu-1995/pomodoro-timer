import * as stories from './RangeBar.stories'
import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'

describe('snapshot', () => {
  Object.entries(composeStories(stories)).forEach(([name, Component]) => {
    describe(name, () => {
      it('should render correctly', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const tree = render(<Component {...Component.args} />).asFragment()
        expect(tree).toMatchSnapshot()
      })
    })
  })
})
