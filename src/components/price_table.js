import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CheckOrUncheckIcon from './check_or_uncheck_icon'

const PriceTable = ({ data }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Fournisseur</TableCell>
        <TableCell numeric>Prix Mensuel</TableCell>
        <TableCell>Exploite des chatons</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map(row => (
        <TableRow key={row.provider}>
          <TableCell>{row.provider}</TableCell>
          <TableCell numeric>
            {row.mensualPrice}
            € / mois
          </TableCell>
          <TableCell style={{ verticalAlign: 'middle' }}>
            <CheckOrUncheckIcon isChecked={row.kittens} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

export default PriceTable
