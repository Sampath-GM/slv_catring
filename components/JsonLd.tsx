export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'SLV Catering',
    description:
      'Traditional South Indian, North Indian and Udupi-style catering for weddings, receptions and events across Bengaluru. Fresh on-site preparation, no artificial flavours or MSG.',
    telephone: '+91 8660653994',
    email: 'info@slvcatering.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    servesCuisine: ['South Indian', 'North Indian', 'Udupi'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
