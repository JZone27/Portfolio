import React from 'react';
import { ArrowRight, Sparkles, Mail, Bot, Layers, Terminal, FileText, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Warm Charcoal & Emerald Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-glow" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Degree / Institution Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-medium mb-6 shadow-xs hover:scale-105 transition-transform">
            <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Polytechnic University of the Philippines • Computer Engineering (BSCpE)</span>
          </div>

          {/* Headline with High Contrast */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mb-10 leading-relaxed font-normal">
            {personalInfo.tagline}
          </p>

          {/* CTAs with warm charcoal & emerald styling */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-12">
            <a
              href="#projects"
              className="px-6 py-3.5 text-base font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 text-base font-semibold text-zinc-800 dark:text-zinc-100 bg-white dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 hover:dark:border-emerald-500/50 rounded-xl shadow-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>View & Download Resume</span>
            </button>

            <a
              href="#ai-showcase"
              className="px-6 py-3.5 text-base font-semibold text-zinc-800 dark:text-zinc-100 bg-white dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 hover:dark:border-emerald-500/50 rounded-xl shadow-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-500 group-hover:rotate-12 transition-transform" />
              <span>AI Content Lab</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3.5 mb-16">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-emerald-400 bg-white dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 rounded-xl transition hover:scale-110 shadow-xs"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 bg-white dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 rounded-xl transition hover:scale-110 shadow-xs"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Floating Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-card text-center hover:border-emerald-500/40 transition-all hover:scale-[1.03] group shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Primary Capability Pills */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/70 font-medium">
              <Terminal className="w-4 h-4 text-emerald-500" /> Python, JavaScript & SQL
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/70 font-medium">
              <Layers className="w-4 h-4 text-teal-400" /> Raspberry Pi & IoT Systems
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/70 font-medium">
              <Bot className="w-4 h-4 text-cyan-400" /> Generative AI & Video Creation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
