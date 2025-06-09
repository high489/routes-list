import styles from './routes-table-header.module.scss'
import { FC } from 'react'

import { SortKey, SortOrder } from '@models'

interface RoutesTableHeaderProps {
  sortKey: SortKey
  sortOrder: SortOrder
  onSort: (key: SortKey) => void
}

const RoutesTableHeader: FC<RoutesTableHeaderProps> = ({ sortKey, sortOrder, onSort }) => {
  const renderArrow = (key: SortKey) =>
    sortKey === key ? (sortOrder === 'asc' ? ' ▲' : ' ▼') : null

  const getClassName = (key: SortKey) =>
    `${styles['headerCell']} ${sortKey === key ? styles['active'] : ''}`;

  return (
    <thead className={styles['routes-table-header']}>
      <tr>
        <th className={getClassName('address')} onClick={() => onSort('address')}>
          <div className={styles['header-content']}>
            <span>Address</span>
            <span className={styles['arrow']}>{renderArrow('address')}</span>
          </div>
        </th>
        <th className={getClassName('gateway')} onClick={() => onSort('gateway')}>
          <div className={styles['header-content']}>
            <span>Gateway</span>
            <span className={styles['arrow']}>{renderArrow('gateway')}</span>
          </div>
        </th>
        <th className={getClassName('interface')} onClick={() => onSort('interface')}>
          <div className={styles['header-content']}>
            <span>Interface</span>
            <span className={styles['arrow']}>{renderArrow('interface')}</span>
          </div>
        </th>
      </tr>
    </thead>
  )
}

export { RoutesTableHeader }