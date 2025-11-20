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
    <header className="bg-white/95 backdrop-blur-sm py-3 px-6 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={e => handleSmoothScroll(e, "home")}
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="ECOTEHNICA - Servicii Termice Profesionale"
            width={200}
            height={60}
            priority
          />
        </a>

        {/* Desktop Navigation - Pill Shaped Buttons */}
        <nav className="hidden md:flex items-center gap-3">
          <a
            href="#home"
            onClick={e => handleSmoothScroll(e, "home")}
            className="px-6 py-2.5 bg-[#3b82f6] text-white rounded-full font-semibold hover:bg-[#2563eb] transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {t.header.home}
          </a>
          <a
            href="#services"
            onClick={e => handleSmoothScroll(e, "services")}
            className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-[#3b82f6] hover:text-[#1e3a8a] transition-all duration-300 hover:shadow-md"
          >
            {t.header.services}
          </a>
          <a
            href="#contact"
            onClick={e => handleSmoothScroll(e, "contact")}
            className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-[#3b82f6] hover:text-[#1e3a8a] transition-all duration-300 hover:shadow-md"
          >
            {t.header.contact}
          </a>
        </nav>

        {/* Right Side - Language Selector + CTA (Desktop) / Language + Burger (Mobile) */}
        <div className="flex items-center gap-4">
          <LanguageSwitch />

          {/* CTA Button - Hidden on Mobile */}
          <button className="hidden md:block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
            {t.header.bookAppointment}
          </button>

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
