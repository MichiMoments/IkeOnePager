import type { Metadata } from "next";
import {
  Allura,
  Caveat,
  Courier_Prime,
  Dancing_Script,
  Lobster_Two,
  Mr_Dafoe,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-dancing-script",
});

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lobster-two",
});

const mrDafoe = Mr_Dafoe({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mr-dafoe",
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
        className={`${courierPrime.variable} ${caveat.variable} ${allura.variable} ${dancingScript.variable} ${lobsterTwo.variable} ${mrDafoe.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
