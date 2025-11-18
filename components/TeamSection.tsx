'use client';

import { useLanguage } from '@/lib/i18n';
import Image from 'next/image';

const TeamSection = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: t.team.members.john.name,
      role: t.team.members.john.role,
      bgColor: 'bg-[#004B87]',
      textColor: 'text-white',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
    },
    {
      name: t.team.members.mike.name,
      role: t.team.members.mike.role,
      bgColor: 'bg-[#004B87]',
      textColor: 'text-white',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    {
      name: t.team.members.david.name,
      role: t.team.members.david.role,
      bgColor: 'bg-[#C4E538]',
      textColor: 'text-gray-900',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
    },
    {
      name: t.team.members.tom.name,
      role: t.team.members.tom.role,
      bgColor: 'bg-[#004B87]',
      textColor: 'text-white',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80'
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.team.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            {t.team.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="w-full h-80 bg-gray-300 rounded-lg mb-4 overflow-hidden relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={`${member.bgColor} ${member.textColor} p-4 rounded-lg text-center`}>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className={`text-sm font-medium ${member.bgColor === 'bg-[#C4E538]' ? 'text-gray-700' : 'text-gray-300'}`}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
