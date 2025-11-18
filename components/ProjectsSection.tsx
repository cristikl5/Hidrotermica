"use client";

import { useLanguage } from "@/lib/i18n";
import Image from "next/image";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      height: "h-64",
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&q=80",
    },
    {
      id: 2,
      height: "h-64",
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80",
    },
    {
      id: 3,
      height: "h-64",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
    },
    {
      id: 4,
      height: "h-64",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80",
    },
    {
      id: 5,
      height: "h-64",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80",
    },
    {
      id: 6,
      height: "h-64",
      image:
        "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400&q=80",
    },
    {
      id: 7,
      height: "h-64",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    },
    { id: 8, height: "h-64", special: true },
  ];

  return (
    <section id="pages" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-[#C4E538] px-4 py-1 rounded-full mb-4">
            <p className="text-sm font-bold text-gray-900">
              {t.projects.badge}
            </p>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.projects.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map(project => (
            <div
              key={project.id}
              className={`${project.height} ${
                project.special ? "bg-[#004B87]" : "bg-gray-300"
              } rounded-lg overflow-hidden relative group cursor-pointer hover:shadow-xl transition`}
            >
              {project.special ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {t.projects.kitchenPlumbing}
                  </h3>
                  <p className="text-sm text-center text-gray-200 mb-4 font-medium">
                    {t.projects.kitchenDescription}
                  </p>
                  <button className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    {t.projects.viewMore} <span>→</span>
                  </button>
                </div>
              ) : (
                <div className="w-full h-full relative">
                  <Image
                    src={project.image || ""}
                    alt={`Plumbing project ${project.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
