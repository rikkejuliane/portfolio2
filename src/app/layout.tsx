import type { Metadata } from "next";
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import FunFacts from "@/components/FunFacts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rikke Juliane — Frontend Developer & UX/UI",
  description:
    "Portfolio of Rikke Juliane: frontend developer focused on elegant UX/UI, performant React/Next.js, and detail-oriented design systems.",
  keywords: [
    "Rikke Juliane",
    "frontend developer",
    "UX/UI",
    "React",
    "Next.js",
    "TypeScript",
    "Norway",
    "Portfolio",
  ],
  authors: [{ name: "Rikke Juliane" }],

  metadataBase: new URL("https://rikkejuliane.netlify.app/"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rikke Juliane — Frontend Developer & UX/UI",
    description:
      "I build thoughtful, accessible interfaces with React/Next.js and a design eye for the fine details.",
    url: "https://rikkejuliane.netlify.app/",
    siteName: "Rikke Juliane's Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="glass-scroll">
      <body className="antialiased bg-background glass-scroll">
        <header>
          <HeroSection />
        </header>
        <main>
          {children}
          <FunFacts />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
