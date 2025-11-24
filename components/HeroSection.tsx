"use client";

import { useLanguage } from "@/lib/i18n";
import Image from "next/image";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative bg-[#0f1419] py-24 md:py-32 px-6 overflow-hidden noise-texture"
    >
      {/* Technical Grid Background */}
      <div className="absolute inset-0 technical-grid"></div>

      {/* Blue Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-[#1e3a8a]/15 to-[#1e40af]/10 rounded-full blur-3xl"></div>

      {/* Diagonal Flow Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        <path d="M 0 100 Q 400 50 800 100" stroke="url(#blueGradient)" strokeWidth="2" fill="none"
          strokeDasharray="1000" strokeDashoffset="0">
          <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="3s" fill="freeze" />
        </path>
        <path d="M 200 150 Q 600 100 1000 150" stroke="url(#blueGradient)" strokeWidth="1.5" fill="none"
          strokeDasharray="1000" strokeDashoffset="0" opacity="0.5">
          <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="3s" begin="0.3s" fill="freeze" />
        </path>
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Asymmetric Grid Layout */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left Content - Spans 7 columns */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-6 animate-fade-slide" style={{ animationDelay: '0.1s' }}>
              {/* Small Technical Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-full">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
                <span className="text-[#60a5fa] text-sm font-semibold tracking-wide">32 ANI DE EXPERIENȚĂ</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                {t.hero.title}
              </h1>
            </div>

            {/* Feature Cards with Staggered Animation */}
            <div className="grid gap-4 animate-fade-slide" style={{ animationDelay: '0.3s' }}>
              <div className="group relative bg-gradient-to-br from-[#1a1d23] to-[#0f1419] p-6 rounded-2xl border border-[#3b82f6]/20 hover:border-[#3b82f6]/50 transition-all duration-300 card-3d metallic-shine overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6]/5 rounded-full blur-2xl"></div>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  {t.hero.description}
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#1a1d23] p-4 rounded-xl border border-[#3b82f6]/10 hover:border-[#3b82f6]/30 transition-all">
                  <div className="text-[#3b82f6] text-2xl font-bold mb-1">🔥</div>
                  <p className="text-gray-400 text-xs font-medium leading-tight">{t.hero.repairingFixing}</p>
                </div>
                <div className="bg-[#1a1d23] p-4 rounded-xl border border-[#60a5fa]/10 hover:border-[#60a5fa]/30 transition-all">
                  <div className="text-[#60a5fa] text-2xl font-bold mb-1">⚡</div>
                  <p className="text-gray-400 text-xs font-medium leading-tight">{t.hero.emergencyService}</p>
                </div>
                <div className="bg-[#1a1d23] p-4 rounded-xl border border-[#1e3a8a]/10 hover:border-[#1e3a8a]/30 transition-all">
                  <div className="text-[#1e3a8a] text-2xl font-bold mb-1">💬</div>
                  <p className="text-gray-400 text-xs font-medium leading-tight">{t.hero.consultation}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-slide" style={{ animationDelay: '0.5s' }}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white rounded-xl font-bold text-lg shadow-blue hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10">{t.hero.viewAllServices}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>

          {/* Right Content - Overlapping Image - Spans 5 columns */}
          <div className="md:col-span-5 relative animate-diagonal" style={{ animationDelay: '0.2s' }}>
            {/* Main Image with Technical Frame */}
            <div className="relative">
              {/* Corner Brackets - Technical Detail */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#3b82f6]"></div>
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#60a5fa]"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#60a5fa]"></div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#3b82f6]"></div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                  alt="Professional plumber with tools"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419]/80 via-transparent to-transparent"></div>

                {/* Technical Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#1a1d23]/90 backdrop-blur-md p-4 rounded-xl border border-[#3b82f6]/30">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse"></div>
                      <span className="text-[#60a5fa] text-xs font-bold uppercase tracking-wider">Live Status</span>
                    </div>
                    <p className="text-white font-semibold text-sm">Expert profesional activ</p>
                    <p className="text-gray-400 text-xs mt-1">Disponibil pentru urgențe 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent"></div>
    </section>
  );
};

export default HeroSection;
