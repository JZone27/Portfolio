import React, { useState } from 'react';
import {
  Copy,
  Check,
  Video,
  Terminal,
  Maximize2,
  X,
  Film
} from 'lucide-react';
import { aiContentShowcase } from '../data/portfolioData';
import type { AIContentItem } from '../data/portfolioData';

export const AIShowcase: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<AIContentItem | null>(null);

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="ai-showcase" className="py-24 relative overflow-hidden bg-zinc-100/40 dark:bg-[#161619]/40">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Video className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Generative AI Video Production</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
            AI Video Creation & Commercial Vault
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal">
            Direct-response commercial spots, UGC video ads with kinetic dynamic captions, and generative product showcases.
          </p>
        </div>

        {/* Video Vault Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiContentShowcase.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl glass-card overflow-hidden hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-emerald-500/10 group"
            >
              <div>
                {/* HTML5 Native Video Player */}
                <div className="relative bg-black rounded-t-3xl overflow-hidden aspect-[9/13] max-h-[480px] flex items-center justify-center">
                  <video
                    src={item.videoUrl}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain bg-black"
                  />

                  {/* Top Overlay Badge */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-950/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30 shadow-md">
                      <Film className="w-3.5 h-3.5 text-emerald-400" />
                      <span>AI Commercial</span>
                    </span>
                  </div>

                  {/* Fullscreen Expand Cinema Mode */}
                  <button
                    onClick={() => setActiveVideoModal(item)}
                    className="absolute top-3 right-3 p-2 rounded-xl bg-zinc-950/70 hover:bg-emerald-600 text-white backdrop-blur-md transition cursor-pointer shadow-md"
                    title="Expand Cinema View"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors mb-1.5">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                    Pipeline: {item.tool}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Creative Prompt Box */}
                  <div className="relative rounded-2xl bg-zinc-950 p-4 mb-2 border border-zinc-800 text-zinc-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                        <Terminal className="w-3 h-3" />
                        Prompt / Creative Direction
                      </span>
                      <button
                        onClick={() => handleCopyPrompt(item.id, item.prompt)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition active:scale-95 cursor-pointer"
                        title="Copy prompt"
                      >
                        {copiedId === item.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs font-mono text-zinc-300 line-clamp-3 leading-relaxed whitespace-pre-wrap">
                      {item.prompt}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="px-6 pb-6 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Video Cinema Expand Modal */}
        {activeVideoModal && activeVideoModal.videoUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md animate-fadeIn">
            <div
              className="relative w-full max-w-4xl bg-[#161619] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-zinc-800 bg-[#0E0E10]">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Video className="w-4 h-4 text-emerald-400" />
                  <span>{activeVideoModal.title}</span>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="p-1.5 rounded-full text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cinema Player */}
              <div className="relative aspect-[9/14] max-h-[70vh] mx-auto bg-black flex items-center justify-center">
                <video
                  src={activeVideoModal.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Creative Direction */}
              <div className="p-5 px-6 bg-[#0E0E10] border-t border-zinc-800 text-xs text-zinc-300">
                <div className="font-bold text-white mb-1">Creative Direction & Prompt:</div>
                <div className="font-mono text-emerald-300/80 leading-relaxed">
                  {activeVideoModal.prompt}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
