import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarCsr from "@/components/navbar/navbar csr/NavbarCsr";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnapCart",
  description: "Shopping made easy and faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className={inter.className}>
        <NavbarCsr/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
