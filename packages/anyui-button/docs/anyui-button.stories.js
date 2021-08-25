import React from 'react'
import { Button } from '../lib/anyui-button'

export default {
  title: 'Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const DefaultButton = Template.bind({})

DefaultButton.args = {
  children: 'Hello Button'
}
