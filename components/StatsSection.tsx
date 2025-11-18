'use client';

import { useLanguage } from '@/lib/i18n';
import Image from 'next/image';

const StatsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#004B87] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            {t.stats.title}
          </h2>
          <p className="text-gray-200 font-medium">
            {t.stats.description}
          </p>

          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <h3 className="text-5xl font-bold mb-2">999+</h3>
              <p className="text-sm text-gray-300 font-medium">{t.stats.totalProjects}</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">25</h3>
              <p className="text-sm text-gray-300 font-medium">{t.stats.teamMembers}</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">102</h3>
              <p className="text-sm text-gray-300 font-medium">{t.stats.bookings}</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-80 h-96 bg-gray-300 rounded-lg relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
              alt="Professional plumbing team"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
