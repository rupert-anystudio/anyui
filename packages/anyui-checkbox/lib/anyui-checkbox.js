import React from 'react'

const Checkbox = ({ isChecked }) => {
  return (
    <input type="checkbox" checked={isChecked} />
  )
}

export { Checkbox }