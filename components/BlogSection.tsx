'use client';

import { useLanguage } from '@/lib/i18n';
import Image from 'next/image';

const BlogSection = () => {
  const { t } = useLanguage();

  const articles = [
    {
      title: t.blog.articles.article1.title,
      date: '15 Dec 2024',
      category: t.blog.articles.article1.category,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80'
    },
    {
      title: t.blog.articles.article2.title,
      date: '12 Dec 2024',
      category: t.blog.articles.article2.category,
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80'
    },
    {
      title: t.blog.articles.article3.title,
      date: '10 Dec 2024',
      category: t.blog.articles.article3.category,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80'
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.blog.title}
            </h2>
            <p className="text-gray-600 mb-6 font-medium">
              {t.blog.description}
            </p>
            <button className="flex items-center gap-2 text-[#004B87] font-bold hover:gap-3 transition-all">
              {t.blog.readMore} <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer"
              >
                <div className="h-48 bg-gray-300 relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#C4E538] rounded-full flex items-center justify-center">
                    <span className="text-xl">→</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-2 font-semibold">{article.date}</p>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-medium">{article.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
