"use client";
import { MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#4D55FF] min-h-screen`}>
        <Header />
        <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
          {children}
        </MantineProvider>
        <Footer />
      </body>
    </html>
  );
}
