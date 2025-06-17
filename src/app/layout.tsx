import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const torusPro = localFont({
  src: "../../public/fonts/TorusPro.ttf",
  variable: "--font-torus",
});


export const metadata: Metadata = {
  title: "Yummeals - Order Delicious Meals Online",
  description: "Get fresh, restaurant-quality meals delivered fast. Browse our menu, order your favorites, and enjoy quick delivery from Yummeals - your neighborhood's top food delivery service.",
  keywords: ["food delivery", "online ordering", "restaurant", "takeout", "meal delivery"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${inter.variable} antialiased`}
        className={`${torusPro.variable}  ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
