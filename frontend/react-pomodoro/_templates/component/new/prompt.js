// eslint-disable-next-line no-undef
module.exports = [
  {
    type: 'select',
    name: 'atomic',
    message: '作成するコンポーネントの粒度は？',
    choices: ['atoms', 'molecules', 'organisms', 'templates'],
  },
  {
    type: 'input',
    name: 'name',
    message:
      'コンポーネント名をパスカルケースで入力してください(例: ComponentName)',
    validate: (input) => input !== '',
  },
]
