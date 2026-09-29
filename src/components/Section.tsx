import type { ReactNode } from 'react'
import { Container } from './Container'

type Props = {
  id: string
  labelledBy: string
  tone?: 'light' | 'warm' | 'dark'
  className?: string
  children: ReactNode
}

export function Section({ id, labelledBy, tone = 'light', className = '', children }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`section surface-${tone} ${className}`} tabIndex={-1}>
      <Container>{children}</Container>
    </section>
  )
}
