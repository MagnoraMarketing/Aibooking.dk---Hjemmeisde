// The site-wide Organization (#organization) and WebSite (#website) entities
// are declared once in index.html, so every page carries them.

// No aggregateRating here: Google only allows ratings in structured data
// when the same reviews are visible on the page, otherwise it can trigger a
// manual action for spammy markup.
export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aibooking.dk - AI Reception',
  url: 'https://www.aibooking.dk',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  publisher: { '@id': 'https://www.aibooking.dk/#organization' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'DKK',
    description: 'Gratis 7-dages prøveperiode',
  },
};

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
