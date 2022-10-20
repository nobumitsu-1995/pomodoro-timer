import { Provider } from 'react-redux'
import { store } from '../src/feature/store'
import Theme from '../src/assets/styles/Theme'
import '../src/assets/index.css'
import '../src/assets/material-icons.css'

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
    <>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap'
          rel='stylesheet'
        />
      </head>
      <Provider store={store}>
        <Theme>
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
          ></link>
          <Story />
        </Theme>
      </Provider>
    </>
  ),
]
