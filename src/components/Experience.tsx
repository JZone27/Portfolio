import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(experiences[0]?.id || '');

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-gray-900/30">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Professional Experience & Milestones
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            A track record of shipping production-grade applications, spearheading AI workflow integrations, and building scalable UI architectures.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline spine */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 -translate-x-1/2 hidden sm:block opacity-30 dark:opacity-40" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isSelected = selectedExpId === exp.id;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12 group`}
                >
                  {/* Timeline Center Node */}
                  <div className="hidden sm:flex absolute left-1/2 top-6 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-4 border-indigo-600 dark:border-indigo-400 shadow-md group-hover:scale-125 transition-transform z-10">
                    <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div
                      onClick={() => setSelectedExpId(exp.id)}
                      className={`p-6 sm:p-7 rounded-2xl glass-card transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border-indigo-500 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/20'
                          : 'hover:border-gray-300 dark:hover:border-gray-600 shadow-xs'
                      }`}
                    >
                      {/* Top Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                          {exp.type}
                        </span>
                      </div>

                      {/* Job Title & Company */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
                        <Building2 className="w-4 h-4 text-indigo-500" />
                        <span>{exp.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2.5 mb-5 text-sm text-gray-600 dark:text-gray-300">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-gray-800/80">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
