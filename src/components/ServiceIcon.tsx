export type ServiceIconName = 'car' | 'briefcase' | 'people' | 'route' | 'package'

const paths: Record<ServiceIconName, string> = {
  car: 'M4 13l2-6h12l2 6M4 13h16v6H4zM7 19v2m10-2v2M7 16h1m8 0h1M8 7l1-2h6l1 2',
  briefcase: 'M8 7V4h8v3M3 7h18v13H3zM3 11l9 4 9-4M12 13v4',
  people: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M3 20v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6m1 3a5 5 0 0 1 3 4v2',
  route: 'M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m14 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 6h9a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h9',
  package: 'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10M7 5l9 4v4',
}

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}
