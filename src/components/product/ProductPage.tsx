import type { Product } from "@/data/products";
import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/lib/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "./Breadcrumb";
import ProductGallery from "./ProductGallery";
import ProductInfoPanel from "./ProductInfoPanel";
import ProductJsonLd from "./ProductJsonLd";

export default function ProductPage({
  product,
  dict,
  lang,
}: {
  product: Product;
  dict: Dictionary;
  lang: Locale;
}) {
  return (
    <>
      <ProductJsonLd product={product} lang={lang} />
      <Header lang={lang} dict={dict} solid productSlug={product.id} />
      <main className="bg-paper px-6 pb-24 pt-28 md:px-10 md:pt-32 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumb lang={lang} dict={dict} productName={product.name} />

          <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-16">
            <ProductGallery
              images={product.images}
              alt={product.name}
              zoomHint={dict.product.zoomHint}
            />
            <ProductInfoPanel product={product} dict={dict} lang={lang} />
          </div>
        </div>
      </main>
      <Footer lang={lang} dict={dict} productSlug={product.id} />
    </>
  );
}
