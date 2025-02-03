import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Milliark Investments",
  description: "Know the job of Christiano Trotta. Milliark is one of the most sucessfull investments company of the world.",
};

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
