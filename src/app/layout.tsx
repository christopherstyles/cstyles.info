import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cstyles",
  description: "Chris Styles: Information and CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <main className="grid min-h-screen grid-cols-1 grid-rows-[auto,1fr,auto] dark:font-light">
          <Navbar />
          <div className="mx-auto mt-20 flex w-full max-w-screen-2xl flex-col items-start px-4 md:px-6">
            {children}
          </div>
          <Footer />
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
