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
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-glow" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Degree / Institution Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-xs hover:scale-105 transition-transform">
            <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Polytechnic University of the Philippines • Computer Engineering (BSCpE)</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 text-base font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-800 rounded-xl shadow-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>View & Download Resume</span>
            </button>

            <a
              href="#ai-showcase"
              className="px-6 py-3.5 text-base font-semibold text-gray-800 dark:text-white bg-white/90 dark:bg-gray-900/90 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700/80 rounded-xl shadow-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95 group"
            >
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:rotate-12 transition-transform" />
              <span>AI Content Lab</span>
            </a>
          </div>

          {/* Social Links & Quick Contact */}
          <div className="flex items-center gap-4 mb-16">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition hover:scale-110 shadow-xs"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition hover:scale-110 shadow-xs"
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
                className="p-5 rounded-2xl glass-card text-center hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all hover:scale-[1.03] group shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Primary Capability Pills */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800/80 font-medium">
              <Terminal className="w-4 h-4 text-indigo-500" /> Python, JavaScript & SQL
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800/80 font-medium">
              <Layers className="w-4 h-4 text-purple-500" /> Raspberry Pi & IoT Systems
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800/80 font-medium">
              <Bot className="w-4 h-4 text-pink-500" /> Generative AI & Prompt Design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
