"use client";

import { useLanguage } from "@/lib/i18n";
import Image from "next/image";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none z-[100]"
        aria-label="Toggle menu"
      >
        <div className="w-6 flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Overlay - Always rendered but conditionally visible */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-md z-[90] md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Slide-in Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-white z-[95] transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-white">
          {/* Menu Header */}
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white">
            <Image
              src="/logo.png"
              alt="ECOTEHNICA - Servicii Sanitare Profesionale"
              width={140}
              height={47}
              className="h-auto w-auto"
            />
            <button
              onClick={closeMenu}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6 bg-white">
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                onClick={closeMenu}
                className="px-5 py-3 bg-[#C4E538] text-white rounded-full font-bold text-center hover:bg-[#b3d130] transition-all shadow-sm active:scale-95"
              >
                {t.header.home}
              </a>
              <a
                href="#services"
                onClick={closeMenu}
                className="px-5 py-3 border-2 border-gray-200 text-gray-700 rounded-full font-semibold text-center hover:border-[#C4E538] hover:text-[#004B87] transition-all active:scale-95"
              >
                {t.header.services}
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="px-5 py-3 border-2 border-gray-200 text-gray-700 rounded-full font-semibold text-center hover:border-[#C4E538] hover:text-[#004B87] transition-all active:scale-95"
              >
                {t.header.about}
              </a>
              <a
                href="#pages"
                onClick={closeMenu}
                className="px-5 py-3 border-2 border-gray-200 text-gray-700 rounded-full font-semibold text-center hover:border-[#C4E538] hover:text-[#004B87] transition-all active:scale-95"
              >
                {t.header.pages}
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="px-5 py-3 border-2 border-gray-200 text-gray-700 rounded-full font-semibold text-center hover:border-[#C4E538] hover:text-[#004B87] transition-all active:scale-95"
              >
                {t.header.contact}
              </a>
            </div>
          </nav>

          {/* Footer CTA */}
          <div className="px-6 py-5 border-t border-gray-100 bg-gray-50">
            <button
              onClick={closeMenu}
              className="w-full bg-gradient-to-r from-[#C4E538] to-[#b3d130] text-white px-6 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
