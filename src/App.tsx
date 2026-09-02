import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { AIShowcase } from './components/AIShowcase';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true; // Default to sleek dark mode
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-[#121214] text-zinc-100 selection:bg-emerald-500 selection:text-zinc-950' : 'bg-zinc-50 text-zinc-900 selection:bg-emerald-500 selection:text-white'}`}>
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenResume={() => setIsResumeOpen(true)}
      />
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Experience />
        <Projects />
        <AIShowcase />
        <Skills />
        <Contact />
      </main>
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
