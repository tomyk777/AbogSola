import type { Metadata } from "next";
import Providers from "@/components/Providers";
import LayoutShell from "@/components/LayoutShell";
import WhatsAppButton from "@/components/WhatsAppButton";
import "@/index.css";
import "@/App.css";

export const metadata: Metadata = {
  title: "Sofia Sola | Abogada",
  description: "Asesoramiento legal en laboral, familia y reales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <LayoutShell>{children}</LayoutShell>
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
