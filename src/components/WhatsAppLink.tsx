import type { ReactNode } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppLink({
  message,
  className,
  children,
}: {
  message: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
