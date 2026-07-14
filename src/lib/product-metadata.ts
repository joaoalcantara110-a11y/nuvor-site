import type { Metadata } from "next";
import { locales, type Locale } from "./locale";
import { getProductById } from "@/data/products";
import { productHref } from "./routes";
import { absoluteUrl } from "./site";

export async function buildProductMetadata(
  lang: string,
  slug: string,
  expectedLocale: Locale
): Promise<Metadata> {
  if (lang !== expectedLocale) return {};

  const product = getProductById(slug);
  if (!product) return {};

  const title = `${product.name} | NUVOR Eyewear`;
  const canonicalPath = productHref(expectedLocale, product.id);
  const imageUrl = absoluteUrl(product.image);

  return {
    title,
    description: product.description,
    alternates: {
      canonical: canonicalPath,
      languages: Object.fromEntries(
        locales.map((l) => [l, productHref(l, product.id)])
      ),
    },
    openGraph: {
      title,
      description: product.description,
      url: canonicalPath,
      siteName: "NUVOR Eyewear",
      images: [
        {
          url: imageUrl,
          width: product.imageWidth,
          height: product.imageHeight,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.description,
      images: [imageUrl],
    },
  };
}
