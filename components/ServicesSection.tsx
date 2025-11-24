"use client";

import { useLanguage } from "@/lib/i18n";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.thermalInstallations.title,
      description: t.services.thermalInstallations.description,
      icon: "🔥",
      featured: true,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative Elements - Increased Opacity */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#1e3a8a]/10 rounded-full blur-3xl"></div>

      {/* Geometric Accent Lines */}
      <div className="absolute top-0 right-0 w-1 h-32 bg-gradient-to-b from-[#3b82f6] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1 h-32 bg-gradient-to-t from-[#1e3a8a] to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3b82f6]/10 border border-[#3b82f6]/30 rounded-full mb-6 animate-fade-slide">
            <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse"></div>
            <span className="text-[#1e3a8a] text-sm font-semibold uppercase tracking-wide">Servicii Premium</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-[#0f1419] mb-6 animate-fade-slide" style={{ animationDelay: '0.1s' }}>
            {t.services.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-slide" style={{ animationDelay: '0.2s' }}>
            {t.services.description}
          </p>
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] p-8 md:p-12 rounded-3xl shadow-2xl border border-[#3b82f6]/30 hover:border-[#3b82f6]/60 transition-all duration-500 card-3d overflow-hidden animate-fade-slide"
              style={{ animationDelay: '0.3s' }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, #60a5fa 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl group-hover:bg-[#3b82f6]/20 transition-colors duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl mb-6 shadow-lg text-3xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#60a5fa]/40 group-hover:border-[#60a5fa]/70 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Pricing Table Section */}
        <div className="animate-fade-slide" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#0f1419] mb-3">
              {t.services.thermalInstallations.pricing.title}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Table Header with Gradient */}
            <div className="bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] px-8 py-6 border-b-4 border-[#3b82f6]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-bold text-lg uppercase tracking-wider flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#60a5fa]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                    </svg>
                    {t.services.thermalInstallations.pricing.serviceColumn}
                  </h4>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg uppercase tracking-wider flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#60a5fa]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                    </svg>
                    {t.services.thermalInstallations.pricing.costColumn}
                  </h4>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {t.services.thermalInstallations.pricing.services.map(
                (service, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-4 px-8 py-5 hover:bg-[#3b82f6]/5 transition-all duration-200 group"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 mb-1 group-hover:text-[#1e3a8a] transition-colors">
                        {service.name}
                      </div>
                      {service.note && (
                        <div className="text-sm text-gray-500 leading-snug">
                          {service.note}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3b82f6]/10 to-[#2563eb]/10 border border-[#3b82f6]/20 rounded-lg">
                        <span className="font-bold text-[#1e3a8a] text-lg">
                          {service.price}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Table Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t-2 border-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">
                  * Prețurile pot varia în funcție de complexitatea lucrării
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Solicită Ofertă
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
