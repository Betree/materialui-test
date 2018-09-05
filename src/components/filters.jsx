import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { FormControlLabel } from '@material-ui/core'


const Filters = () => (
  <div style={{
    background: 'whitesmoke',
    minHeight: '50px',
    marginBottom: '1.5em',
  }}
  >
    <h2 style={{
      display: 'inline-block',
      margin: '0.5em',
      marginRight: '1em',
    }}
    >
      Types d'energie
    </h2>
    <FormControlLabel
      style={{ verticalAlign: 'sub' }}
      control={(
        <Checkbox />
      )}
      label="Nucléraire"
    />
    <FormControlLabel
      style={{ verticalAlign: 'sub' }}
      control={(
        <Checkbox />
      )}
      label="Hydrolique"
    />
    <FormControlLabel
      style={{ verticalAlign: 'sub' }}
      control={(
        <Checkbox />
      )}
      label="Solaire"
    />
  </div>
)

export default Filters
