import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const lexend = Lexend(
  {
    subsets: ['vietnamese'],
    // weight: "400",
  }
);

export const metadata: Metadata = {
  title: "CINAF VOD",
  description: "Vido On Demand CINAF WEB",
  icons: '/ressources/logo.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} w-screen min-h-screen bg-[#141414] overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
