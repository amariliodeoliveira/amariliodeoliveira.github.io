import "./globals.css";
import { Metadata } from "next";
import { Russo_One, Roboto_Slab } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Amarilio de Oliveira | Portfolio",
    template: "Amarilio de Oliveira | %s",
  },
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={`${russoOne.variable} ${roboto.variable}`}>
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
