import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "@/styles/globals.css";
import Seo from "@/components/Seo";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Milliark Investments - The Future of Financial Growth",
  description: "Discover the investment strategies of Christiano Trotta. Milliark is among the world's top investment firms, offering premium financial solutions.",
  keywords: ["Investments", "Finance", "Wealth Management", "Milliark", "Christiano Trotta"],
  authors: [{ name: "Pedro Trotta", url: "github.com/PEDRONCIOOO" }],
  applicationName: "Milliark Investments",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://milliark.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://milliark.com",
    title: "Milliark Investments - Elevate Your Financial Future",
    description: "Explore the financial expertise of Christiano Trotta.",
    siteName: "Milliark Investments",
    images: [{ url: "https://milliark.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@milliark",
    creator: "@christianotrotta",
    title: "Milliark Investments - Your Trusted Financial Partner",
    description: "Join Christiano Trotta and Milliark in shaping the future of investments.",
    images: ["https://milliark.com/twitter-card.jpg"],
  },
};

<head>
  <Seo />
</head>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, "bg-black text-white antialiased")}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
