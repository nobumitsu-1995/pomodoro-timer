/* eslint-disable react/react-in-jsx-scope */
import * as stories from './Presenter.stories'
import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import Theme from 'src/assets/styles/Theme'

jest.mock('src/components/organisms/TimerAnimation/Container', () => {
  return {
    __esModule: true,
    default: () => '<TimerAnimation/>',
  }
})

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
