---
to: "<%= atomic !== 'organisms' ? `src/components/${atomic}/${name}/${name}.stories.tsx` : null %>"
---
import React from 'react'
import { Meta, Story } from '@storybook/react'

import <%=name%>, { Props } from './<%=name%>'

export default {
  title: '<%=atomic%>/<%=name%>',
  component: <%=name%>,
} as Meta

const Template: Story<Props> = (args) => <<%=name%> {...args} />

export const Default = Template.bind({})
Default.args = { title: 'title' }
