"use client";

import { useLanguage } from "@/lib/i18n";
import Image from "next/image";
import LanguageSwitch from "./LanguageSwitch";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { t } = useLanguage();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="bg-white/98 backdrop-blur-md py-4 px-6 border-b border-gray-100 sticky top-0 z-40 shadow-technical">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={e => handleSmoothScroll(e, "home")}
          className="flex items-center cursor-pointer group transition-all"
        >
          <div className="relative">
            <Image
              src="/logo.png"
              alt="ECOTEHNICA - Servicii Termice Profesionale"
              width={200}
              height={60}
              priority
              className="group-hover:opacity-90 transition-opacity"
            />
          </div>
        </a>

        {/* Desktop Navigation - Refined Buttons */}
        <nav className="hidden md:flex items-center gap-2">
          <a
            href="#home"
            onClick={e => handleSmoothScroll(e, "home")}
            className="px-5 py-2 text-gray-700 rounded-lg font-medium hover:text-[#1e3a8a] hover:bg-[#3b82f6]/5 transition-all duration-200"
          >
            {t.header.home}
          </a>
          <a
            href="#services"
            onClick={e => handleSmoothScroll(e, "services")}
            className="px-5 py-2 text-gray-700 rounded-lg font-medium hover:text-[#1e3a8a] hover:bg-[#3b82f6]/5 transition-all duration-200"
          >
            {t.header.services}
          </a>
          <a
            href="#contact"
            onClick={e => handleSmoothScroll(e, "contact")}
            className="px-5 py-2 text-gray-700 rounded-lg font-medium hover:text-[#1e3a8a] hover:bg-[#3b82f6]/5 transition-all duration-200"
          >
            {t.header.contact}
          </a>
        </nav>

        {/* Right Side - Language Selector + CTA (Desktop) / Language + Burger (Mobile) */}
        <div className="flex items-center gap-4">
          <LanguageSwitch />

          {/* CTA Button - Hidden on Mobile */}
          <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-6 py-2.5 rounded-lg font-semibold shadow-blue hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden">
            <span className="relative z-10">{t.header.bookAppointment}</span>
            <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
