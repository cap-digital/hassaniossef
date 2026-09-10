import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const metaDomainVerification = process.env.NEXT_PUBLIC_META_DOMAIN_VERIFICATION;

const title = "Hassan de Zé Cocá 11122 · Deputado Estadual · Bahia";
const description =
  "Site oficial de Hassan Iossef (Hassan de Zé Cocá), candidato a Deputado Estadual pela Bahia nas Eleições 2026. Progressistas (PP) · Federação União Progressista. Vote 11122.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Hassan de Zé Cocá",
  keywords: [
    "Hassan Iossef",
    "Hassan de Zé Cocá",
    "11122",
    "Deputado Estadual",
    "Bahia",
    "Eleições 2026",
    "Progressistas",
    "PP",
    "Jequié",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Hassan de Zé Cocá",
    title,
    description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Hassan de Zé Cocá · 11122 · Deputado Estadual · Bahia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  verification: metaDomainVerification
    ? { other: { "facebook-domain-verification": metaDomainVerification } }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#1230D6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
