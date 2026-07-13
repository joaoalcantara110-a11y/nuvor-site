const WHATSAPP_NUMBER = "351937076759";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatPriceEUR(value: number): string {
  return `${value.toFixed(2).replace(".", ",")} €`;
}

export function formatWhatsAppProductMessage(
  template: string,
  name: string,
  price: string
): string {
  return template.replace("{{name}}", name).replace("{{price}}", price);
}
