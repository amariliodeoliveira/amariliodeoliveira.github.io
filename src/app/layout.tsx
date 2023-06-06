import "./globals.css";

import { Russo_One, Playfair_Display, Roboto_Slab } from "next/font/google";

import { Navbar } from "@/components/layouts/Navbar";
import { Aside } from "@/components/layouts/Aside";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-russo",
});

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Amarilio | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${russoOne.variable} ${roboto.variable}`}
    >
      <body>
        <Navbar />
        <div className="flex flex-row w-full bg-dutch-white">
          <Aside />
          {children}
          <Aside />
        </div>
      </body>
    </html>
  );
}
