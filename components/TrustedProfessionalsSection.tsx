'use client';

import { useLanguage } from '@/lib/i18n';
import Image from 'next/image';

const TrustedProfessionalsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="w-full h-96 bg-gray-300 rounded-lg relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80"
              alt="Professional plumbing tools and work"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            {t.trustedProfessionals.title}
          </h2>

          <p className="text-gray-600">
            {t.trustedProfessionals.description}
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#004B87] flex items-center justify-center shrink-0 mt-1">
                <span className="text-white text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{t.trustedProfessionals.installation.title}</h4>
                <p className="text-sm text-gray-600">{t.trustedProfessionals.installation.description}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#004B87] flex items-center justify-center shrink-0 mt-1">
                <span className="text-white text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{t.trustedProfessionals.quality.title}</h4>
                <p className="text-sm text-gray-600">{t.trustedProfessionals.quality.description}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#004B87] flex items-center justify-center shrink-0 mt-1">
                <span className="text-white text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{t.trustedProfessionals.pricing.title}</h4>
                <p className="text-sm text-gray-600">{t.trustedProfessionals.pricing.description}</p>
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-sm text-gray-600">{t.trustedProfessionals.callUs}</p>
                <p className="text-xl font-bold text-[#004B87]">+012-345-6789</p>
              </div>
            </div>
          </div>

          <button className="bg-[#C4E538] text-white px-8 py-3 rounded-full font-bold hover:bg-[#b3d130] transition">
            {t.trustedProfessionals.scheduleService}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedProfessionalsSection;
