import type { Product } from "@/data/products";
import type { Locale } from "@/lib/locale";
import { productHref } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

export default function ProductJsonLd({
  product,
  lang,
}: {
  product: Product;
  lang: Locale;
}) {
  const url = absoluteUrl(productHref(lang, product.id));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((src) => absoluteUrl(src)),
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "NUVOR",
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "EUR",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
