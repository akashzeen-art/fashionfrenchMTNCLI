import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingSection from "@/components/sections/TrendingSection";
import ParisStreetSection from "@/components/sections/ParisStreetSection";
import RunwaySection from "@/components/sections/RunwaySection";
import StoriesSection from "@/components/sections/StoriesSection";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";

export default function Index() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    localStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      <Navbar />
      <Hero />
      <TrendingSection />
      <ParisStreetSection />
      <RunwaySection />
      <StoriesSection />
      <Footer />
    </div>
  );
}
