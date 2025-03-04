import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Password Generator",
  description: "Application for generate good passwords",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-slate-900 to-slate-700 w-screen h-screen">
        {children}
      </body>
    </html>
  );
}
