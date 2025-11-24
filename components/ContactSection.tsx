"use client";

import { useLanguage } from "@/lib/i18n";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative bg-[#0f1419] py-24 px-6 overflow-hidden noise-texture"
    >
      {/* Technical Grid */}
      <div className="absolute inset-0 technical-grid"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-[#1e3a8a]/15 to-[#1e40af]/10 rounded-full blur-3xl"></div>

      {/* Diagonal Accent Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="accentGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0.8 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#60a5fa", stopOpacity: 0.6 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#2563eb", stopOpacity: 0.8 }}
            />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="url(#accentGradient)"
          strokeWidth="2"
        />
        <line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          stroke="url(#accentGradient)"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="relative">
          {/* Corner Brackets */}
          <div className="absolute -top-6 -left-6 w-20 h-20 border-t-4 border-l-4 border-[#3b82f6]"></div>
          <div className="absolute -top-6 -right-6 w-20 h-20 border-t-4 border-r-4 border-[#60a5fa]"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 border-b-4 border-l-4 border-[#60a5fa]"></div>
          <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-4 border-r-4 border-[#3b82f6]"></div>

          <div className="bg-gradient-to-br from-[#1a1d23] via-[#1a1d23] to-[#0f1419] rounded-3xl p-12 md:p-16 border border-[#3b82f6]/30 shadow-2xl animate-fade-slide">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-full">
                <svg
                  className="w-5 h-5 text-[#60a5fa]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-[#60a5fa] text-sm font-bold uppercase tracking-wider">
                  Contact Direct
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-6 leading-tight">
              {t.contact.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              {t.contact.description}
            </p>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Phone Card */}
              <div className="group relative bg-gradient-to-br from-[#3b82f6]/10 to-transparent p-6 rounded-2xl border border-[#3b82f6]/20 hover:border-[#3b82f6]/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6]/5 rounded-full blur-2xl group-hover:bg-[#3b82f6]/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] flex items-center justify-center mb-4 shadow-blue group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm mb-1">Telefon urgent</p>
                  <p className="text-white text-2xl font-bold">
                    24/7 Disponibil
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="group relative bg-gradient-to-br from-[#60a5fa]/10 to-transparent p-6 rounded-2xl border border-[#60a5fa]/20 hover:border-[#60a5fa]/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#60a5fa]/5 rounded-full blur-2xl group-hover:bg-[#60a5fa]/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm mb-1">Email contact</p>
                  <p className="text-white text-2xl font-bold">Răspuns rapid</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#3b82f6] bg-size-200 text-white rounded-xl font-bold text-lg shadow-blue hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden animate-shimmer">
                <span className="relative z-10">{t.contact.contactButton}</span>
                <svg
                  className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <p className="text-gray-400 text-sm mt-4">
                Consultație gratuită • Răspuns în 24h
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className="mt-12 grid grid-cols-3 gap-6 animate-fade-slide"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/10 border border-[#3b82f6]/30 mb-3">
              <svg
                className="w-8 h-8 text-[#3b82f6]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-white text-3xl font-bold mb-1"> 2h</p>
            <p className="text-gray-400 text-sm">Timp de răspuns</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#60a5fa]/20 to-[#3b82f6]/10 border border-[#60a5fa]/30 mb-3">
              <svg
                className="w-8 h-8 text-[#60a5fa]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-white text-3xl font-bold mb-1">100%</p>
            <p className="text-gray-400 text-sm">Garanție calitate</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e3a8a]/20 to-[#1e40af]/10 border border-[#1e3a8a]/30 mb-3">
              <svg
                className="w-8 h-8 text-[#1e3a8a]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <p className="text-white text-3xl font-bold mb-1">32</p>
            <p className="text-gray-400 text-sm">Ani experiență</p>
          </div>
        </div>
      </div>

      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent"></div>
    </section>
  );
};

export default ContactSection;
