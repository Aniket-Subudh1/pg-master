import Script from 'next/script'

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PG Master',
    description: 'Effortlessly manage your PG or hostel with PGMASTER. Find, manage, and rent PG accommodations with ease. The ultimate solution for PG owners and tenants.',
    url: 'https://pg-master.vercel.app/',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000',
    },
    provider: {
      '@type': 'Organization',
      name: 'PG Master',
      url: 'https://pg-master.vercel.app/',
    },
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
