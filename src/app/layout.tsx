import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] , weight:"500"})


export const metadata: Metadata = {
  title: "Vijayvenkat J",
  description: "Portfolio of Vijayvenkat J",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
