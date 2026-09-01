import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Sparkles, Code2, Briefcase, FolderGit2, Cpu, Mail, FileText, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'AI Showcase', href: '#ai-showcase', icon: Sparkles, badge: 'Hot' },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 backdrop-blur-md bg-white/85 dark:bg-gray-950/85 border-b border-gray-200/60 dark:border-gray-800/60 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 font-bold text-lg sm:text-xl tracking-tight text-gray-900 dark:text-white transition-transform hover:scale-105"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:rotate-6 transition-transform">
            <Sparkles className="w-5 h-5" />
          </span>
          <span>
            {personalInfo.shortName.split(' ')[0]}
            <span className="text-indigo-600 dark:text-indigo-400">.cabus</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 rounded-lg transition-all flex items-center gap-1.5"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="px-1.5 py-0.2 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume View/Download Button */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200/80 dark:border-indigo-800/80 rounded-xl transition-all hover:scale-105 cursor-pointer shadow-xs"
            title="View or Download Resume"
          >
            <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Resume</span>
            <Download className="w-3.5 h-3.5 opacity-70 hidden sm:inline" />
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle theme"
            className="p-2 sm:p-2.5 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-gray-100/80 dark:bg-gray-800/80 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-pointer shadow-xs"
          >
            {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />}
          </button>

          {/* Contact Me CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-md shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 lg:hidden rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span>{link.name}</span>
                  </div>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-xs font-bold uppercase bg-pink-500 text-white rounded-full">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mt-2 w-full py-2.5 px-4 rounded-lg text-center font-semibold text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View / Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
