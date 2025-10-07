import HeroSection from "@/components/HeroSection";
import TabbedHub from "@/features/content/components/TabbedHub";
import FunFacts from "@/components/FunFacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main>
    <HeroSection />
    <TabbedHub />
    <FunFacts />
    <Footer />
   </main>
  );
}
