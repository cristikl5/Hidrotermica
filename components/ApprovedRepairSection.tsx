'use client';

import { useLanguage } from '@/lib/i18n';
import Image from 'next/image';

const ApprovedRepairSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="w-full h-96 bg-gray-300 rounded-lg relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
              alt="Professional handyman at work"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-6 rounded-lg shadow-xl text-center min-w-[250px]">
            <p className="text-sm text-gray-600 font-semibold">{t.approvedRepair.approved}</p>
            <p className="text-2xl font-bold text-[#004B87]">{t.approvedRepair.handymanRepair}</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            {t.approvedRepair.title}
          </h2>

          <p className="text-gray-600">
            {t.approvedRepair.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#C4E538] flex items-center justify-center shrink-0">
                <span className="text-xs">✓</span>
              </div>
              <p className="text-sm text-gray-700">{t.approvedRepair.feature1}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#C4E538] flex items-center justify-center shrink-0">
                <span className="text-xs">✓</span>
              </div>
              <p className="text-sm text-gray-700">{t.approvedRepair.feature2}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#C4E538] flex items-center justify-center shrink-0">
                <span className="text-xs">✓</span>
              </div>
              <p className="text-sm text-gray-700">{t.approvedRepair.feature3}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#C4E538] flex items-center justify-center shrink-0">
                <span className="text-xs">✓</span>
              </div>
              <p className="text-sm text-gray-700">{t.approvedRepair.feature4}</p>
            </div>
          </div>

          <button className="bg-[#C4E538] text-white px-8 py-3 rounded-full font-bold hover:bg-[#b3d130] transition">
            {t.approvedRepair.viewAllServices}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApprovedRepairSection;
