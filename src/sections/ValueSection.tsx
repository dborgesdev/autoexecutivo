import { pageContent } from '../data/pageContent'
import { Section } from '../components/Section'
import { Eyebrow } from '../components/Eyebrow'

export function ValueSection() {
  const content = pageContent.value
  return (
    <Section id="proposta" labelledBy="value-title" tone="warm">
      <Eyebrow>{content.eyebrow}</Eyebrow>
      <div className="editorial-grid">
        <h2 id="value-title">{content.heading}</h2>
        <div className="prose value__text"><p>{content.text}</p><p className="value__signature">{content.signature}</p></div>
      </div>
    </Section>
  )
}
