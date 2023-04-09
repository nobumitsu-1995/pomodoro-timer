---
to: "<%= atomic === 'organisms' ? `src/components/${atomic}/${name}/Presenter.stories.tsx` : null %>"
---
import React from 'react'
import { Meta, Story } from '@storybook/react'

import <%=name%>, { Props } from './Presenter'

export default {
  title: 'organisms/<%=name%>',
  component: <%=name%>,
} as Meta

const Template: Story<Props> = (args) => <<%=name%> {...args} />

export const Default = Template.bind({})

Default.args = {
  count: 1,
  plusButton: () => console.log('plus'),
  loadButton: () => console.log('load'),
}
