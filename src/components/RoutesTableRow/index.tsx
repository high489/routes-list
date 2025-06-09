import styles from './routes-table-row.module.scss'
import { FC } from 'react'

import { Route } from '@models'

interface RoutesTableRowProps {
  route: Route
}

const RoutesTableRow: FC<RoutesTableRowProps> = ({ route }) => {
  return (
    <tr className={styles['routes-table-row']}>
      <td>{`${route.address}/${route.mask}`}</td>
      <td>{route.gateway}</td>
      <td>{route.interface}</td>
    </tr>
  )
}

export { RoutesTableRow }