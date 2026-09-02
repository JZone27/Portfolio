import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(experiences[0]?.id || '');
  const [hoveredExpId, setHoveredExpId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-zinc-100/40 dark:bg-[#161619]/40">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
            Professional Experience & Milestones
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal">
            A track record of shipping web platforms, managing technical communities, and building IoT systems.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline spine */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 -translate-x-1/2 hidden sm:block opacity-40 dark:opacity-50" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isSelected = selectedExpId === exp.id;
              const isHovered = hoveredExpId === exp.id;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12 group`}
                >
                  {/* Timeline Center Node */}
                  <div className="hidden sm:flex absolute left-1/2 top-6 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-4 border-emerald-500 dark:border-emerald-400 shadow-md group-hover:scale-125 transition-transform z-10">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div
                      onClick={() => setSelectedExpId(exp.id)}
                      onMouseEnter={() => setHoveredExpId(exp.id)}
                      onMouseLeave={() => setHoveredExpId(null)}
                      className={`relative p-6 sm:p-7 rounded-2xl glass-card transition-all duration-300 cursor-pointer overflow-hidden ${
                        isSelected || isHovered
                          ? 'border-emerald-500/80 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                          : 'hover:border-zinc-300 dark:hover:border-zinc-700 shadow-xs'
                      }`}
                    >
                      {/* Top Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {exp.type}
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors mb-1">
                        {exp.role}
                      </h3>

                      {/* Company & Link */}
                      <div className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-4 flex-wrap">
                        <Building2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                          >
                            <span>{exp.company}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="font-semibold">{exp.company}</span>
                        )}
                        <span className="text-zinc-400">•</span>
                        <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-xs">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Interactive Media / Guild Preview on Card */}
                      {exp.image && (
                        <div
                          className={`mb-5 rounded-2xl overflow-hidden border border-emerald-500/30 transition-all duration-500 bg-zinc-950 ${
                            isHovered
                              ? 'max-h-56 opacity-100 scale-100 shadow-md shadow-emerald-500/20'
                              : 'max-h-24 opacity-85 scale-[0.98]'
                          }`}
                        >
                          <div className="relative aspect-video sm:aspect-[2/1] overflow-hidden">
                            <img
                              src={exp.image}
                              alt={exp.company}
                              className={`w-full h-full object-cover transition-transform duration-700 ${
                                isHovered ? 'scale-110' : 'scale-100'
                              }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-3">
                              <span className="text-xs font-bold text-white flex items-center gap-1 bg-zinc-950/80 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10">
                                <span>{exp.company}</span>
                                <ExternalLink className="w-3 h-3 text-emerald-400" />
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bullet Highlights */}
                      <ul className="space-y-2.5 mb-5 text-sm text-zinc-600 dark:text-zinc-300">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
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
