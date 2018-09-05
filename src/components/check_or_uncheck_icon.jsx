import React from 'react'
import Icon from '@material-ui/core/Icon'

export default ({ isChecked }) => (
  (isChecked)
    ? <Icon>done_outline</Icon>
    : <Icon>highlight_off</Icon>
)
