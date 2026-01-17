export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Civil Industrial Security Services (CISS)',
    image: 'https://cisskanpur.vercel.app/og-image.jpg', // Placeholder
    '@id': 'https://cisskanpur.vercel.app',
    url: 'https://cisskanpur.vercel.app',
    telephone: '+91-8417981064', // Placeholder
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hargovind Niwas, 128/558, K-Block, Kidwai Nagar', // Placeholder
      addressLocality: 'Kanpur',
      addressRegion: 'UP',
      postalCode: '208001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.42792418641826,
      longitude: 80.32400979511384, 
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.facebook.com/cisskanpur',
      'https://instagram.com/cisskanpur',
    ],
    priceRange: '₹₹',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
