"use client";

import { useLanguage } from "@/lib/i18n";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#0f1419] text-white py-16 px-6 border-t border-[#1a1d23]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 technical-grid opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#3b82f6] to-[#2563eb] rounded-full"></div>
              {t.footer.contactUs}
            </h3>
            <div className="space-y-4">
              <div className="group flex items-start gap-3 hover:translate-x-1 transition-transform">
                <div className="w-8 h-8 rounded-lg bg-[#1a1d23] flex items-center justify-center shrink-0 group-hover:bg-[#3b82f6]/10 transition-colors">
                  <svg className="w-4 h-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{t.footer.address}</p>
              </div>
              <div className="group flex items-start gap-3 hover:translate-x-1 transition-transform">
                <div className="w-8 h-8 rounded-lg bg-[#1a1d23] flex items-center justify-center shrink-0 group-hover:bg-[#60a5fa]/10 transition-colors">
                  <svg className="w-4 h-4 text-[#60a5fa]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">{t.footer.email}</p>
              </div>
              <div className="group flex items-start gap-3 hover:translate-x-1 transition-transform">
                <div className="w-8 h-8 rounded-lg bg-[#1a1d23] flex items-center justify-center shrink-0 group-hover:bg-[#3b82f6]/10 transition-colors">
                  <svg className="w-4 h-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">{t.footer.phone}</p>
              </div>
            </div>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#60a5fa] to-[#3b82f6] rounded-full"></div>
              {t.footer.popularServices}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#3b82f6] transition-colors"></div>
                  {t.footer.bathroomService}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#3b82f6] transition-colors"></div>
                  {t.footer.heatingService}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#3b82f6] transition-colors"></div>
                  {t.footer.kitchenService}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#3b82f6] transition-colors"></div>
                  {t.footer.plumbingService}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#1e3a8a] to-[#1e40af] rounded-full"></div>
              {t.footer.companyFaq}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-[#60a5fa] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#60a5fa] transition-colors"></div>
                  {t.footer.aboutUs}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-[#60a5fa] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#60a5fa] transition-colors"></div>
                  {t.footer.plumbingService}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-[#60a5fa] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#60a5fa] transition-colors"></div>
                  {t.footer.emergencyServiceLink}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-[#60a5fa] transition-colors flex items-center gap-2 group">
                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#60a5fa] transition-colors"></div>
                  {t.footer.testimonials}
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency CTA */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#2563eb] to-[#3b82f6] rounded-full"></div>
              {t.footer.emergencyService}
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-400">{t.footer.emergency24}</p>
              <div className="group relative bg-gradient-to-br from-[#3b82f6] to-[#2563eb] p-4 rounded-xl shadow-blue hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">{t.footer.callNow}</p>
                    <p className="text-white font-bold text-lg">{t.footer.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1a1d23] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">{t.footer.copyright}</p>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="#"
              className="group w-10 h-10 bg-[#1a1d23] rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#3b82f6] hover:to-[#2563eb] transition-all duration-300 hover:scale-110"
            >
              <span className="text-gray-400 group-hover:text-white font-bold text-sm transition-colors">f</span>
            </a>
            <a
              href="#"
              className="group w-10 h-10 bg-[#1a1d23] rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#60a5fa] hover:to-[#3b82f6] transition-all duration-300 hover:scale-110"
            >
              <span className="text-gray-400 group-hover:text-white font-bold text-sm transition-colors">t</span>
            </a>
            <a
              href="#"
              className="group w-10 h-10 bg-[#1a1d23] rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#1e3a8a] hover:to-[#1e40af] transition-all duration-300 hover:scale-110"
            >
              <span className="text-gray-400 group-hover:text-white font-bold text-sm transition-colors">in</span>
            </a>
            <a
              href="#"
              className="group w-10 h-10 bg-[#1a1d23] rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#2563eb] hover:to-[#3b82f6] transition-all duration-300 hover:scale-110"
            >
              <span className="text-gray-400 group-hover:text-white font-bold text-sm transition-colors">yt</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
