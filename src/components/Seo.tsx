import Script from "next/script";

export default function Seo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Milliark Investments",
    "url": "https://milliark.com",
    "logo": "https://milliark.com/logo.png",
    "description": "Milliark Investments is a leading financial firm specializing in wealth management and financial strategies.",
    "founder": {
      "@type": "Person",
      "name": "Christiano Trotta",
      "sameAs": [
        "https://linkedin.com/in/christianotrotta",
        "https://twitter.com/christianotrotta"
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+5567999710088",
      "contactType": "customer service"
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
