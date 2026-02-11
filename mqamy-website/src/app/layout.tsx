import type { Metadata } from "next";
import { Figtree, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MQAMY Real Estate | Premium Properties & Investment",
  description: "At MQAMY we work for your home. Your property, our passion. Premium real estate services for discerning clients worldwide.",
  keywords: ["real estate", "luxury properties", "investment", "Dubai", "property"],
  openGraph: {
    title: "MQAMY Real Estate | Premium Properties & Investment",
    description: "Your property, our passion. Premium real estate services for discerning clients worldwide.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${manrope.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
