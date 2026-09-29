import type { regions } from '../data/regions'

export function RegionGroup({ region }: { region: (typeof regions)[number] }) {
  return (
    <article className="region-group">
      <span className="region-group__initials" aria-hidden="true">{region.id}</span>
      <h3>{region.name}</h3>
      <ul>{region.cities.map((city) => <li key={city}>{city}</li>)}</ul>
    </article>
  )
}
