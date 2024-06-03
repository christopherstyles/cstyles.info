import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Styles",
  description: "Chris Styles: Information and CV",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:font-light dark:text-neutral-50`}
      >
        <ThemeProvider attribute="class">
          <main className="grid min-h-screen grid-cols-1 grid-rows-[auto,1fr,auto]">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-MBMD8MW9BT" />
    </html>
  );
}
