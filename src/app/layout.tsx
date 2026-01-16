import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
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
  title: "Civil Industrial Security Services (CISS) Kanpur | Top Security Agency",
  description: "Leading security guard services in Kanpur offering armed guards, VIP protection, industrial security, and event management. 20+ years of trusted protection.",
  keywords: ["security guards kanpur", "armed security services", "industrial security agency", "VIP protection kanpur", "CISS security", "private security company uttar pradesh"],
  authors: [{ name: "CISS Kanpur" }],
  openGraph: {
    title: "Civil Industrial Security Services (CISS) Kanpur",
    description: "Uncompromising security solutions led by Ex-Defense personnel. Armed guards, industrial safety, and VIP protection.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <meta name="google-site-verification" content="ysvLfo78wGtT_a5QiZouJ83_gU3DFz2UqNEoZgT96T4" />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
