import styles from './routes-table.module.scss'
import { FC, useState } from 'react'

import { Route, SortKey, SortOrder } from '@models'
import { ipToNumber, combineAddressMask } from '@utils'
import { RoutesTableHeader, RoutesTableRow } from '@components'

interface RoutesTableProps {
  routes: Route[]
}

const RoutesTable: FC<RoutesTableProps> = ({ routes }) => {
  const [sortKey, setSortKey] = useState<SortKey>('address')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')

  const sortedRoutes = [...routes].sort((a, b) => {
    let aVal: number | string
    let bVal: number | string

    if (sortKey === 'address') {
      aVal = combineAddressMask(a.address, a.mask)
      bVal = combineAddressMask(b.address, b.mask)
    } else if (sortKey === 'gateway') {
      aVal = ipToNumber(a.gateway)
      bVal = ipToNumber(b.gateway)
    } else {
      aVal = a.interface
      bVal = b.interface
    }

    const direction = sortOrder === 'asc' ? 1 : -1;
    if (aVal < bVal) return -1 * direction
    if (aVal > bVal) return 1 * direction
    return 0
  })

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortOrder('asc')
    }
  }

  return (
    <table className={styles['routes-table']}>
      <RoutesTableHeader sortKey={sortKey} sortOrder={sortOrder} onSort={handleSort} />
      <tbody>
        {sortedRoutes.map(route => (
          <RoutesTableRow key={route.id} route={route} />
        ))}
      </tbody>
    </table>
  )
}

export { RoutesTable }