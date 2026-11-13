
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dramaclubbrand.com"),

  title: {
    default: "Drama Club Brand | New Pieces. Signature Style.",
    template: "%s | Drama Club Brand",
  },

  description:
    "Discover Drama Club Brand. Clothing and accessories for those who move differently. New Pieces. Signature Style.",

  openGraph: {
    title: "Drama Club Brand",
    description: "New Pieces. Signature Style.",
    // url: "https://www.dramaclubbrand.com",
    siteName: "Drama Club Brand",
    images: [
      {
        url: "/blackLogo.JPG",
        width: 1200,
        height: 630,
        alt: "Drama Club Brand",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Drama Club Brand",
    description: "New Pieces. Signature Style.",
    images: ["/blackLogo.JPG"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
