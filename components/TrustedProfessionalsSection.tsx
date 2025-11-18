"use client";

import { useLanguage } from "@/lib/i18n";
import Image from "next/image";

const TrustedProfessionalsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#004B87] to-[#006BB8] bg-clip-text text-transparent">
            {t.trustedProfessionals.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.trustedProfessionals.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Service List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t.trustedProfessionals.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {t.services.thermalInstallations.serviceList.map(
                (service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#004B87] flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">{service}</p>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80"
              alt="Professional thermal installation - heating pipes and radiators"
              fill
              className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#004B87]/90 via-[#004B87]/40 to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="text-sm font-semibold mb-1">Instalații Termice</p>
                <p className="text-xs opacity-90">32 de ani de experiență</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t.trustedProfessionals.featuresTitle}
            </h3>
            <ul className="space-y-3">
              {t.services.thermalInstallations.features.map(
                (feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#C4E538] flex items-center justify-center shrink-0 mt-1">
                      <span className="text-gray-900 text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedProfessionalsSection;
