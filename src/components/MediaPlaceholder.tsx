type Props = { slot: 'hero' | 'shared' | 'corporate' }

const labels = {
  hero: '01 / Hero',
  shared: '02 / Transporte compartilhado',
  corporate: '03 / Transporte corporativo',
}

export function MediaPlaceholder({ slot }: Props) {
  return (
    <div className={`media-placeholder media-placeholder--${slot}`} aria-hidden="true">
      <span className="media-placeholder__cross" />
      <div className="media-placeholder__label">
        <span>{labels[slot]}</span>
        <span>Placeholder técnico · fotografia pendente</span>
      </div>
    </div>
  )
}
