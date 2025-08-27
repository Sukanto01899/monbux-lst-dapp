import React, { useEffect, useState } from "react";
import CTA from "./CTA";
import Faq from "./Faq";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import How from "./How";
import Stats from "./Stats";

const MonbuxLanding = () => {
  const [scrolled, setScrolled] = useState(false);

  // Stats animation
  const [stats, setStats] = useState({
    totalStaked: 0,
    totalMinted: 0,
    uniqueStakers: 0,
    transactions: 0,
  });

  const finalStats = {
    totalStaked: 125847,
    totalMinted: 119320,
    uniqueStakers: 1247,
    transactions: 8394,
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const interval = setInterval(() => {
        if (step <= steps) {
          const progress = step / steps;
          setStats({
            totalStaked: Math.floor(finalStats.totalStaked * progress),
            totalMinted: Math.floor(finalStats.totalMinted * progress),
            uniqueStakers: Math.floor(finalStats.uniqueStakers * progress),
            transactions: Math.floor(finalStats.transactions * progress),
          });
          step++;
        } else {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    // Trigger animation when component mounts
    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header scrolled={scrolled} />

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats stats={stats} />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <How />

      {/* FAQ Section */}
      <Faq />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default MonbuxLanding;
