'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/i18n';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { value: 'ro' as const, label: 'Română', flag: '🇷🇴' },
    { value: 'ru' as const, label: 'Русский', flag: '🇷🇺' },
  ];

  const currentLanguage = languages.find(lang => lang.value === language) || languages[0];

  const handleLanguageSelect = (lang: 'ro' | 'ru') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-[#3b82f6] hover:text-[#1e3a8a] transition-all duration-300 hover:shadow-md flex items-center gap-2 focus:outline-none focus:border-[#3b82f6]"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.label}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-50 min-w-[180px] transform transition-all duration-200 ease-out opacity-100 translate-y-0">
          {languages.map((lang) => (
            <button
              key={lang.value}
              onClick={() => handleLanguageSelect(lang.value)}
              className={`w-full px-6 py-3 hover:bg-[#3b82f6]/10 transition-colors cursor-pointer flex items-center gap-2 text-left ${
                language === lang.value ? 'bg-[#3b82f6]/10 text-[#1e3a8a] font-semibold' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
              {language === lang.value && (
                <svg
                  className="w-4 h-4 ml-auto text-[#3b82f6]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
