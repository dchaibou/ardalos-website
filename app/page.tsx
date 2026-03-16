import AboutSection from "@/components/AboutSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";


export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <AboutSection />
      <LatestNews />
    </main>
  );
}