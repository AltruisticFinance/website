import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Altruistic Finance",
  description: "Ownership and profit sharing for a better future for all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <nav className="p-4">
          <a className="font-bold text-xl" href='/'>Altruistic Finance</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
