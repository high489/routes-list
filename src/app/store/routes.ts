import { Route } from '@models'

export const routes: Route[] = [
  { id: '1', address: '0.0.0.0', mask: '0', gateway: '193.0.174.1', interface: 'Ethernet connection' },
  { id: '2', address: '10.1.30.0', mask: '24', gateway: '0.0.0.0', interface: 'Guest network' },
  { id: '3', address: '192.168.1.0', mask: '24', gateway: '0.0.0.0', interface: 'Home network' },
  { id: '4', address: '193.0.174.0', mask: '24', gateway: '0.0.0.0', interface: 'Ethernet connection' },
  { id: '5', address: '193.0.175.0', mask: '25', gateway: '193.0.174.10', interface: 'Ethernet connection' },
  { id: '6', address: '193.0.175.22', mask: '32', gateway: '193.0.174.1', interface: 'Ethernet connection' },
]
