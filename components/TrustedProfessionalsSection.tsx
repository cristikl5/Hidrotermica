"use client";

import { useLanguage } from "@/lib/i18n";
import Image from "next/image";

const TrustedProfessionalsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 technical-grid opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>

      {/* Flowing SVG Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradientBg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        <path d="M 0 300 Q 300 250 600 300 T 1200 300" stroke="url(#blueGradientBg)" strokeWidth="2" fill="none" />
        <path d="M 0 350 Q 400 300 800 350" stroke="url(#blueGradientBg)" strokeWidth="1.5" fill="none" opacity="0.6" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-slide">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-full mb-6">
            <svg className="w-4 h-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-[#1e3a8a] text-sm font-semibold uppercase tracking-wide">Profesionalism Garantat</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-[#0f1419] mb-6">
            {t.trustedProfessionals.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.trustedProfessionals.description}
          </p>
        </div>

        {/* Asymmetric Grid - 5:7 Split */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left Column - Image (5 cols) */}
          <div className="md:col-span-5 animate-diagonal" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Corner Brackets */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#3b82f6]"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#60a5fa]"></div>

              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80"
                  alt="Professional thermal installation - heating pipes and radiators"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419]/90 via-[#0f1419]/50 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/10 to-transparent opacity-50"></div>

                {/* Stats Badge */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-[#1a1d23]/95 backdrop-blur-md p-6 rounded-2xl border border-[#3b82f6]/30">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#2563eb] flex items-center justify-center shadow-blue">
                        <span className="text-white text-2xl font-bold">32</span>
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">Ani de Experiență</p>
                        <p className="text-gray-400 text-sm">Instalații termice profesionale</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                      <div>
                        <p className="text-[#3b82f6] text-2xl font-bold">2000+</p>
                        <p className="text-gray-400 text-xs">Proiecte finalizate</p>
                      </div>
                      <div>
                        <p className="text-[#60a5fa] text-2xl font-bold">24/7</p>
                        <p className="text-gray-400 text-xs">Disponibilitate urgențe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Services & Features (7 cols) */}
          <div className="md:col-span-7 space-y-8">
            {/* Services List */}
            <div className="animate-fade-slide" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] flex items-center justify-center shadow-blue">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#0f1419]">
                  {t.trustedProfessionals.servicesTitle}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {t.services.thermalInstallations.serviceList.map(
                  (service, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-[#3b82f6]/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center shrink-0 group-hover:bg-[#3b82f6]/20 transition-colors">
                        <svg className="w-4 h-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium leading-snug group-hover:text-[#0f1419] transition-colors">{service}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Features List */}
            <div className="animate-fade-slide" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#0f1419]">
                  {t.trustedProfessionals.featuresTitle}
                </h3>
              </div>

              <div className="space-y-3">
                {t.services.thermalInstallations.features.map(
                  (feature, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#60a5fa]/5 to-transparent border-l-4 border-[#60a5fa]/30 hover:border-[#60a5fa] hover:from-[#60a5fa]/10 transition-all duration-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#60a5fa] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed">{feature}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedProfessionalsSection;
