import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Nexivo – Solutions digitales & développement web",
  description:
    "Nexivo conçoit des sites web, applications et solutions digitales pour accompagner les entreprises et particuliers dans leur transformation numérique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased bg-[#060918] text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
