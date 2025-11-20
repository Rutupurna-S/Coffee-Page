import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import History from "@/components/HistorySection";
import ArticlesSection from "@/components/ArticleSection";
import MenuSection from "@/components/MenuSection";
import FooterSection from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <History />
      <ArticlesSection />
      <MenuSection />
      <FooterSection />
    </main>
  );
}
