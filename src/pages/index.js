import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import Icon from '@material-ui/core/Icon'


const DATA = [{
  provider: 'Gandhi Electricity',
  mensualPrice: 42,
  kittens: false,
}, {
  provider: 'Total',
  mensualPrice: 90,
  kittens: true,
}, {
  provider: 'EDF',
  mensualPrice: 86,
  kittens: true,
}]

const renderBoolIcon = value => (
  value
    ? <Icon>done_outline</Icon>
    : <Icon>highlight_off</Icon>
)

const IndexPage = () => (
  <div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Fournisseur</TableCell>
          <TableCell numeric>Prix Mensuel</TableCell>
          <TableCell>Exploite des chatons</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {DATA.map(row => (
          <TableRow key={row.provider}>
            <TableCell>{row.provider}</TableCell>
            <TableCell numeric>
              {row.mensualPrice}
              € / mois
            </TableCell>
            <TableCell style={{ verticalAlign: 'middle' }}>
              {renderBoolIcon(row.kittens)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
)

export default IndexPage
