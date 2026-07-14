import { isLocale } from "@/lib/locale";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import EditorialGrid from "@/components/EditorialGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import BoldOrangeSection from "@/components/BoldOrangeSection";
import StyleSelector from "@/components/StyleSelector";
import CollectionGrid from "@/components/CollectionGrid";
import MaleCampaign from "@/components/MaleCampaign";
import BrandStory from "@/components/BrandStory";
import NuvorSociety from "@/components/NuvorSociety";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main>
        <Hero dict={dict} />
        <BrandStatement dict={dict} />
        <EditorialGrid dict={dict} />
        <FeaturedProducts dict={dict} lang={lang} />
        <BoldOrangeSection dict={dict} />
        <StyleSelector dict={dict} />
        <CollectionGrid dict={dict} lang={lang} />
        <MaleCampaign dict={dict} />
        <BrandStory dict={dict} />
        <NuvorSociety dict={dict} />
        <FinalCTA dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
