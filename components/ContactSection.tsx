'use client';

import { useLanguage } from '@/lib/i18n';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-[#004B87] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#004B87] rounded-lg text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
          <button className="bg-[#C4E538] text-white px-8 py-3 rounded-full font-bold hover:bg-[#b3d130] transition">
            {t.contact.contactButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
