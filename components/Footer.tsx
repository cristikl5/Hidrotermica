"use client";

import { useLanguage } from "@/lib/i18n";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#004B87] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.contactUs}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span>📍</span>
                <p className="text-gray-300">{t.footer.address}</p>
              </div>
              <div className="flex items-start gap-2">
                <span>📧</span>
                <p className="text-gray-300">{t.footer.email}</p>
              </div>
              <div className="flex items-start gap-2">
                <span>📞</span>
                <p className="text-gray-300">{t.footer.phone}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              {t.footer.popularServices}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#C4E538] transition">
                  {t.footer.bathroomService}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C4E538] transition">
                  {t.footer.heatingService}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C4E538] transition">
                  {t.footer.kitchenService}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C4E538] transition">
                  {t.footer.plumbingService}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.companyFaq}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#C4E538] transition">
                  {t.footer.aboutUs}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C4E538] transition">
                  {t.footer.plumbingService}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C4E538] transition">
                  {t.footer.emergencyServiceLink}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C4E538] transition">
                  {t.footer.testimonials}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              {t.footer.emergencyService}
            </h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-300">{t.footer.emergency24}</p>
              <div className="flex items-center gap-2 bg-white text-[#004B87] p-3 rounded-lg">
                <span>📞</span>
                <div>
                  <p className="text-xs">{t.footer.callNow}</p>
                  <p className="font-bold">{t.footer.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">{t.footer.copyright}</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 h-8 bg-white text-[#004B87] rounded-full flex items-center justify-center hover:bg-[#C4E538] transition"
            >
              f
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white text-[#004B87] rounded-full flex items-center justify-center hover:bg-[#C4E538] transition"
            >
              t
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white text-[#004B87] rounded-full flex items-center justify-center hover:bg-[#C4E538] transition"
            >
              in
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white text-[#004B87] rounded-full flex items-center justify-center hover:bg-[#C4E538] transition"
            >
              yt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
