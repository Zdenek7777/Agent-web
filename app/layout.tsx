import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FAIL AI Agents",
  description: "AI Agents pro zpracování emailů a automatizaci úkolů",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}

