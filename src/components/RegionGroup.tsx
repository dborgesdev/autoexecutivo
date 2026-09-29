import type { regions } from '../data/regions'

const stateImages = {
  SC: '/images/states/santa-catarina.webp',
  PR: '/images/states/parana.webp',
  SP: '/images/states/sao-paulo.webp',
} as const

export function RegionGroup({ region }: { region: (typeof regions)[number] }) {
  return (
    <article className="region-group">
      <img
        className="region-group__state-image"
        src={stateImages[region.id]}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <h3>{region.name}</h3>
      <ul>{region.cities.map((city) => <li key={city}>{city}</li>)}</ul>
    </article>
  )
}
