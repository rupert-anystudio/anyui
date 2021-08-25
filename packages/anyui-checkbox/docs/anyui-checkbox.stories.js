import React from 'react'
import { Checkbox } from '../lib/anyui-checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
}

const Template = (args) => <Checkbox {...args} />

export const DefaultCheckbox = Template.bind({})

DefaultCheckbox.args = {
  isChecked: false
}
