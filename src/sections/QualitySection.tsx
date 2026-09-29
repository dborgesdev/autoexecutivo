import { pageContent } from '../data/pageContent'
import { Section } from '../components/Section'
import { Eyebrow } from '../components/Eyebrow'

export function QualitySection() {
  const content = pageContent.quality
  return (
    <Section id="auto-executivo" labelledBy="quality-title" className="quality-section">
      <Eyebrow>{content.eyebrow}</Eyebrow>
      <div className="editorial-grid"><h2 id="quality-title">{content.heading}</h2><div className="prose">{content.paragraphs.map((text) => <p key={text}>{text}</p>)}</div></div>
      <div className="quality-word" aria-hidden="true">{content.decoration}</div>
    </Section>
  )
}
