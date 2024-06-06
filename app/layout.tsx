import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({ weight: '400', subsets: ["latin"] });

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
          <a className={`font-bold text-xl ${robotoMono.className}`} href='/'>Altruistic Finance</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
