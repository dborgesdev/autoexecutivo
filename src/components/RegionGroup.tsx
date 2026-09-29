import type { regions } from '../data/regions'
import { StateSilhouette } from './StateSilhouette'

export function RegionGroup({ region }: { region: (typeof regions)[number] }) {
  return (
    <article className="region-group">
      <StateSilhouette state={region.id} name={region.name} />
      <h3>{region.name}</h3>
      <ul>{region.cities.map((city) => <li key={city}>{city}</li>)}</ul>
    </article>
  )
}
