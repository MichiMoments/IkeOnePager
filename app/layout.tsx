import type { Metadata } from "next";
import { Caveat, Courier_Prime } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Ike Umunnah One Pager",
  description: "Ike Umunnah One Pager, Washington, D.C.",
  alternates: {
    canonical: "/fieldonepager",
  },
  openGraph: {
    type: "website",
    title: "Ike Umunnah One Pager",
    description: "Washington, D.C.",
    url: "/fieldonepager",
    images: [
      {
        url: "/assets/og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ike Umunnah One Pager",
    description: "Washington, D.C.",
    images: ["/assets/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/assets/favicon.ico", sizes: "any" },
      { url: "/assets/icon.png" },
    ],
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
        className={`${courierPrime.variable} ${caveat.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
