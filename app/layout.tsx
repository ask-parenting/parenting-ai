import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const heading = Open_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"]
});

const body = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://askparenting.com";

export const metadata: Metadata = {
  title: "Parenting AI",
  description: "Your 24/7 digital co-parent in WhatsApp.",
  metadataBase: new URL(siteUrl)
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
