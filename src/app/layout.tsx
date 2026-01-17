import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
/* eslint-disable @next/next/no-css-tags */


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cisskanpur.vercel.app"),
  title: {
    default: "Civil Industrial Security Services (CISS) Kanpur",
    template: "%s | CISS Kanpur",
  },
  description:
    "Leading security guard services in Kanpur offering armed guards, VIP protection, industrial security, and event management. Trusted by 100+ clients since 2004.",
  keywords: [
    "security guards kanpur",
    "armed security services",
    "industrial security agency",
    "VIP protection kanpur",
    "CISS security",
    "private security company uttar pradesh",
    "security agency near me",
  ],
  authors: [{ name: "CISS Kanpur" }],
  creator: "CISS Kanpur",
  publisher: "CISS Kanpur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Civil Industrial Security Services (CISS) Kanpur",
    description: "Uncompromising security solutions led by Ex-Defense personnel. Armed guards, industrial safety, and VIP protection.",
    url: "https://cisskanpur.vercel.app",
    siteName: "CISS Kanpur",
    images: [
      {
        url: "/og-image.jpg", // We should probably add an OG image later, but this is a placeholder
        width: 1200,
        height: 630,
        alt: "CISS Security Guards",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CISS Kanpur - Premier Security Services",
    description: "Elite security personnel and industrial surveillance in Kanpur.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="google-site-verification" content="ysvLfo78wGtT_a5QiZouJ83_gU3DFz2UqNEoZgT96T4" />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
