import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Modularity Solution",
  description: "Crafting digital products that drive business success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
      <link rel="icon" href="/icon-logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
