import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700", "800"]
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans"
});

export const metadata: Metadata = {
  title: "Arda Yesso | Association des Ardalos",
  description: "L’association Ardalos se focalise actuellement sur la sensibilisation des jeunes nigériens dans trois domaines : "
  + "la santé, l’environnement et l’éducation. - travaillons ensemble pour bâtir le Niger qu’on aimerait voir.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} ${openSans.variable} font-body bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}