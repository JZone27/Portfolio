import React from 'react';
import { Sparkles, Layout, Database, Palette, Cpu } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-teal-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
            Skills, Frameworks & Tooling
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal">
            A comprehensive spectrum spanning web application engineering, hardware IoT systems, office productivity, and generative AI creation.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="p-7 rounded-3xl glass-card hover:border-emerald-500/40 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-emerald-500/5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
                <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 shadow-xs">
                  {getIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {category.name}
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {category.skills.length} core competencies
                  </span>
                </div>
              </div>

              {/* Skills Bars */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        {skill.name}
                        {skill.highlight && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                            Core
                          </span>
                        )}
                      </span>
                      <span className="font-mono text-zinc-500 dark:text-zinc-400">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
