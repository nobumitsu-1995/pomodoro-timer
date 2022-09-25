import Theme from '../src/assets/Theme'
import '../src/assets/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ebebeb',
      },
      {
        name: 'gray',
        value: '#B5B5B5',
      },
      {
        name: 'black',
        value: '#202020',
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
]
