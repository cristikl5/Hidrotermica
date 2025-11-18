"use client";

import { useLanguage } from "@/lib/i18n";
import Image from "next/image";
import DecorativeShapes from "./DecorativeShapes";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#004B87] via-[#003a6e] to-[#002952] py-20 px-6 overflow-hidden"
    >
      {/* Decorative Background Shapes */}
      <DecorativeShapes />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content - Animated Entry */}
        <div className="text-white space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            {t.hero.title}
          </h1>

          <div className="bg-gradient-to-br from-[#C4E538] to-[#b3d130] text-gray-900 p-8 rounded-2xl shadow-2xl space-y-4 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-105 transform">
            <p className="text-sm font-semibold leading-relaxed">
              {t.hero.description}
            </p>
            <button className="bg-[#004B87] border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-[#003766] transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
              {t.hero.viewAllServices}
            </button>
          </div>
        </div>

        {/* Right Content - Floating Image with Glassmorphism */}
        <div className="relative animate-float">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 hover:border-[#C4E538]/50 transition-all duration-500">
            <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl relative overflow-hidden shadow-inner group">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Professional plumber with tools"
                fill
                className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
              />
              {/* Floating Info Card with Glassmorphism */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-300 hover:scale-105 transform">
                <p className="text-xs text-gray-700 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C4E538] rounded-full animate-pulse"></span>
                  {t.hero.repairingFixing}
                </p>
                <p className="text-xs text-gray-700 font-bold flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 bg-[#004B87] rounded-full animate-pulse"></span>
                  {t.hero.emergencyService}
                </p>
                <p className="text-xs text-gray-700 font-bold flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 bg-[#C4E538] rounded-full animate-pulse"></span>
                  {t.hero.consultation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white/10"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
