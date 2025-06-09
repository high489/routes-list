import './index.scss'

import { routes } from '@store'
import { RoutesTable } from '@components'

const App = () => {
  return (
    <div className='container'>
      <h3 style={{
        fontWeight: 'normal',
        textAlign: 'center',
      }}>
        Existing IPv4 routes
      </h3>
      <RoutesTable routes={routes} />
    </div>
  )
}

export default App