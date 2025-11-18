"use client";

import { useLanguage } from "@/lib/i18n";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.thermalInstallations.title,
      description: t.services.thermalInstallations.description,
      bgColor: "bg-gradient-to-br from-[#004B87] to-[#003a6e]",
      textColor: "text-white",
      icon: "🔥",
      gradient: "from-orange-300 to-red-400",
      featured: true,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#C4E538]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#004B87]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#004B87] to-[#006BB8] bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium text-lg">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 max-w-2xl mx-auto gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} ${
                service.textColor
              } p-6 rounded-2xl shadow-lg hover:shadow-3xl transition-all duration-500 relative overflow-hidden group card-3d border cursor-pointer ${
                service.featured ? "border-[#C4E538]/30" : "border-gray-100"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
              ></div>

              {/* Icon with Animation */}
              <div
                className={`text-5xl mb-4 transform origin-center group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 ${
                  service.featured
                    ? ""
                    : "opacity-70 grayscale group-hover:grayscale-0"
                }`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 relative z-10">
                {service.title}
              </h3>
              <p
                className={`text-sm mb-4 relative z-10 ${
                  service.featured ? "text-gray-200" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>

              {/* Glassmorphism Badge on Hover */}
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Popular
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Table Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-[#004B87] to-[#006BB8] bg-clip-text text-transparent">
              {t.services.thermalInstallations.pricing.title}
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#004B87] to-[#006BB8] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-sm uppercase tracking-wider">
                      {t.services.thermalInstallations.pricing.serviceColumn}
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-sm uppercase tracking-wider">
                      {t.services.thermalInstallations.pricing.costColumn}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {t.services.thermalInstallations.pricing.services.map(
                    (service, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900">
                            {service.name}
                          </div>
                          {service.note && (
                            <div className="text-sm text-gray-600 mt-1">
                              {service.note}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-bold text-[#004B87]">
                            {service.price}
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
