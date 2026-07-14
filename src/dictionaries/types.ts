export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    shop: string;
    news: string;
    sun: string;
    optical: string;
    sport: string;
    about: string;
    contact: string;
  };
  cta: {
    findMine: string;
    talkToUs: string;
    discoverCollection: string;
    viewCollection: string;
    viewModel: string;
    knowNuvor: string;
    discoverBoldOrange: string;
    exploreCollection: string;
    joinSociety: string;
    whatsapp: string;
  };
  hero: {
    headline: [string, string];
    text: string;
  };
  brandStatement: {
    headline: [string, string];
    text: string;
  };
  editorial: {
    eyebrow: string;
    title: string;
  };
  featured: {
    eyebrow: string;
    title: string;
  };
  boldOrange: {
    eyebrow: string;
    title: string;
    text: string;
  };
  styleSelector: {
    eyebrow: string;
    title: string;
    styles: {
      bold: string;
      classic: string;
      minimal: string;
      sport: string;
      sophisticated: string;
      creative: string;
    };
  };
  collection: {
    eyebrow: string;
    title: string;
    priceFrom: string;
  };
  maleCampaign: {
    eyebrow: string;
    headline: [string, string];
    text: string;
  };
  story: {
    eyebrow: string;
    title: string;
    chapters: { number: string; title: string; text: string }[];
  };
  society: {
    title: string;
    text: string;
  };
  finalCta: {
    headline: [string, string];
  };
  footer: {
    tagline: string;
    collection: string;
    about: string;
    contact: string;
    whatsapp: string;
    instagram: string;
    privacy: string;
    terms: string;
    shipping: string;
    returns: string;
    rights: string;
  };
  whatsapp: {
    general: string;
    /** Use {{name}} and {{price}} placeholders — interpolated via formatWhatsAppProductMessage. */
    productTemplate: string;
  };
  product: {
    salePrice: string;
    originalPrice: string;
    breadcrumbHome: string;
    breadcrumbCollection: string;
    backToCollection: string;
    buyOnWhatsapp: string;
    zoomHint: string;
    notFoundEyebrow: string;
    notFoundTitle: string;
    notFoundText: string;
    notFoundCta: string;
  };
};
