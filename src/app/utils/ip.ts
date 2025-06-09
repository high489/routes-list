export function ipToNumber(ip: string): number {
  return ip.split('.').reduce((acc, part) => (acc << 8) + parseInt(part), 0)
}

export function combineAddressMask(address: string, mask: string): number {
  return (ipToNumber(address) << 8) + parseInt(mask)
}