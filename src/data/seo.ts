import { siteConfig } from './siteConfig'
import { services } from './services'

export const canonicalUrl = `https://${siteConfig.domain}/`

// Organization evita afirmar endereço ou subtipo operacional não confirmado.
// https://schema.org/Organization e https://schema.org/Service
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${canonicalUrl}#organization`,
  name: siteConfig.brand,
  url: canonicalUrl,
  telephone: `+${siteConfig.phoneNormalized}`,
  areaServed: siteConfig.serviceAreas.map((city) => ({ '@type': 'City', name: city })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title, description: service.description },
    })),
  },
}
