import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { themeScript } from "./theme-script";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = { title: "Naturopathy Clinic" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
