import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductById } from "@/data/products";
import { getDictionary } from "@/dictionaries";
import { buildProductMetadata } from "@/lib/product-metadata";
import ProductPage from "@/components/product/ProductPage";

const LOCALE = "fr" as const;

export async function generateStaticParams() {
  return products.map((product) => ({ lang: LOCALE, slug: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  return buildProductMetadata(lang, slug, LOCALE);
}

export default async function ProduitPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (lang !== LOCALE) notFound();

  const product = getProductById(slug);
  if (!product) notFound();

  const dict = await getDictionary(LOCALE);

  return <ProductPage product={product} dict={dict} lang={LOCALE} />;
}
