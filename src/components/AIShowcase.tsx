import React, { useState } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  Wand2,
  Sliders,
  Play,
  Layers,
  Terminal,
  Image as ImageIcon,
  Video,
  FileText,
  RefreshCw,
  Zap,
  Info,
  Maximize2,
  X
} from 'lucide-react';
import { aiContentShowcase, promptSimulatorPresets } from '../data/portfolioData';
import type { AIContentItem } from '../data/portfolioData';

export const AIShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'playground'>('gallery');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<AIContentItem | null>(null);

  // Playground state
  const [selectedPresetId, setSelectedPresetId] = useState<string>(promptSimulatorPresets[0].id);
  const [promptInput, setPromptInput] = useState<string>(promptSimulatorPresets[0].defaultPrompt);
  const [selectedModel, setSelectedModel] = useState<string>(promptSimulatorPresets[0].model);
  const [temperature, setTemperature] = useState<number>(promptSimulatorPresets[0].temperature);
  const [tone, setTone] = useState<string>('Commercial & High-Converting');
  const [simulatedOutput, setSimulatedOutput] = useState<string>(promptSimulatorPresets[0].sampleOutput);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copiedPlayground, setCopiedPlayground] = useState<boolean>(false);

  const categories = ['All', 'Multimodal & Video', 'Image Generation', 'Prompt Engineering', 'AI Copywriting'];

  const filteredItems = categoryFilter === 'All'
    ? aiContentShowcase
    : aiContentShowcase.filter((item) => item.category === categoryFilter);

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePresetSelect = (presetId: string) => {
    const preset = promptSimulatorPresets.find((p) => p.id === presetId);
    if (preset) {
      setSelectedPresetId(preset.id);
      setPromptInput(preset.defaultPrompt);
      setSelectedModel(preset.model);
      setTemperature(preset.temperature);
      setSimulatedOutput(preset.sampleOutput);
    }
  };

  const handleSimulateRun = () => {
    setIsGenerating(true);
    setSimulatedOutput('');

    const preset = promptSimulatorPresets.find((p) => p.id === selectedPresetId);
    const fullText = preset ? preset.sampleOutput : `[Simulated ${selectedModel} Output with tone: ${tone}]\n\nSynthesizing prompt:\n"${promptInput}"\n\n✓ Structured output successfully generated with high semantic fidelity.\n✓ Parameters: Model=${selectedModel}, Temperature=${temperature}, Creative Tone=${tone}.`;

    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setSimulatedOutput((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 12);
  };

  const handleCopyPlaygroundOutput = () => {
    if (!simulatedOutput) return;
    navigator.clipboard.writeText(simulatedOutput);
    setCopiedPlayground(true);
    setTimeout(() => setCopiedPlayground(false), 2000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Multimodal & Video':
        return <Video className="w-4 h-4 text-emerald-400" />;
      case 'Image Generation':
        return <ImageIcon className="w-4 h-4 text-teal-400" />;
      case 'Prompt Engineering':
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'AI Copywriting':
        return <FileText className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="ai-showcase" className="py-24 relative overflow-hidden bg-zinc-100/40 dark:bg-[#161619]/40">
      {/* Background glow effects */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Generative AI Portfolio & Videos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
            AI Content Creation & Video Vault
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal">
            Explore commercial AI video ads, captioned UGC clips, generative visual artworks, and interactive prompt chains.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-zinc-200/80 dark:bg-zinc-800/80 backdrop-blur-md inline-flex gap-1 shadow-inner">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-white dark:bg-[#121214] text-emerald-600 dark:text-emerald-400 shadow-md scale-[1.02]'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Video & AI Content Vault ({aiContentShowcase.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('playground')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'playground'
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 shadow-md shadow-emerald-500/20 scale-[1.02]'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Wand2 className="w-4 h-4" />
              <span>Interactive AI Studio</span>
              <span className="px-1.5 py-0.2 text-[10px] uppercase font-bold bg-emerald-500 text-zinc-950 rounded-full">
                Simulator
              </span>
            </button>
          </div>
        </div>

        {/* VIEW 1: GALLERY & VIDEO VAULT */}
        {activeTab === 'gallery' && (
          <div>
            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    categoryFilter === cat
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 shadow-md shadow-emerald-500/20 scale-105'
                      : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl glass-card overflow-hidden hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-emerald-500/10 group"
                >
                  <div>
                    {/* Video Player Card */}
                    {item.videoUrl ? (
                      <div className="relative bg-black rounded-t-3xl overflow-hidden aspect-[9/12] sm:aspect-[9/13] max-h-[460px] flex items-center justify-center">
                        <video
                          src={item.videoUrl}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-contain bg-black"
                        />
                        {/* Overlay Category Tag */}
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-950/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30 shadow-md">
                            <Video className="w-3.5 h-3.5 text-emerald-400" />
                            <span>AI Commercial Video</span>
                          </span>
                        </div>

                        {/* Fullscreen Expand Button */}
                        <button
                          onClick={() => setActiveVideoModal(item)}
                          className="absolute top-3 right-3 p-2 rounded-xl bg-zinc-950/70 hover:bg-emerald-600 text-white backdrop-blur-md transition cursor-pointer shadow-md"
                          title="Expand Video"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    ) : item.image ? (
                      /* Image Card */
                      <div className="relative aspect-video overflow-hidden bg-zinc-950">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900/90 text-white backdrop-blur-md border border-white/10 shadow-xs">
                            {getCategoryIcon(item.category)}
                            {item.tool}
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Text/Prompt Card */
                      <div className="p-6 pb-2 border-b border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/50">
                          {getCategoryIcon(item.category)}
                          {item.tool}
                        </span>
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                          {item.category}
                        </span>
                      </div>
                    )}

                    {/* Content Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                        Tool / Pipeline: {item.tool}
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Prompt Snippet with Copy */}
                      <div className="relative rounded-2xl bg-zinc-950 p-4 mb-4 border border-zinc-800 text-zinc-200">
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

                      {/* Output Sample Snippet if available */}
                      {item.outputSample && (
                        <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-zinc-300 mb-4 font-mono whitespace-pre-wrap">
                          <div className="font-bold text-emerald-400 mb-1 text-[11px] uppercase tracking-wider">
                            Output Result:
                          </div>
                          {item.outputSample}
                        </div>
                      )}
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
          </div>
        )}

        {/* VIEW 2: INTERACTIVE AI PROMPT STUDIO SIMULATOR */}
        {activeTab === 'playground' && (
          <div className="max-w-5xl mx-auto rounded-3xl glass-card p-6 sm:p-10 shadow-2xl border border-emerald-500/30">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800 mb-8">
              <div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Wand2 className="w-4 h-4" />
                  <span>Real-Time Prompt Lab & Simulator</span>
                </div>
                <h3 className="text-2xl font-black text-zinc-900 dark:text-white">
                  Interactive AI Generator Studio
                </h3>
              </div>

              {/* Presets dropdown/pill */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-zinc-500 font-medium">Presets:</span>
                {promptSimulatorPresets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handlePresetSelect(preset.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                      selectedPresetId === preset.id
                        ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-zinc-950 shadow-sm'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700'
                    }`}
                  >
                    {preset.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Prompt Controls & Input */}
              <div className="lg:col-span-6 space-y-6">
                {/* Prompt Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-500" />
                      Input Prompt / Instructions
                    </label>
                    <span className="text-xs text-zinc-400">
                      {promptInput.length} chars
                    </span>
                  </div>
                  <textarea
                    rows={6}
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    placeholder="Enter your customized prompt or task instructions here..."
                    className="w-full p-4 rounded-2xl bg-zinc-50 dark:bg-[#0E0E10] border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-zinc-900 dark:text-zinc-100 text-sm font-mono outline-none transition resize-none"
                  />
                </div>

                {/* Model & Parameter Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Model Selector */}
                  <div>
                    <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5 block">
                      Target Engine / Model
                    </label>
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full p-3 rounded-xl bg-zinc-50 dark:bg-[#0E0E10] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-semibold outline-none cursor-pointer"
                    >
                      <option value="GPT-4o">GPT-4o (Video & Scripting)</option>
                      <option value="Gemini 1.5 Pro">Gemini 1.5 Pro</option>
                      <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet</option>
                      <option value="Midjourney v6.1">Midjourney v6.1</option>
                      <option value="Flux.1 Schnell">Flux.1 Schnell</option>
                    </select>
                  </div>

                  {/* Creative Tone */}
                  <div>
                    <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5 block">
                      Creative Tone & Persona
                    </label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-zinc-50 dark:bg-[#0E0E10] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-semibold outline-none cursor-pointer"
                    >
                      <option value="Commercial & High-Converting">Commercial & High-Converting</option>
                      <option value="Technical & Visionary">Technical & Visionary</option>
                      <option value="Cinematic & Atmospheric">Cinematic & Atmospheric</option>
                      <option value="Concise & Systematic">Concise & Systematic</option>
                    </select>
                  </div>
                </div>

                {/* Temperature Slider */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-1.5 text-zinc-700 dark:text-zinc-300">
                    <span className="flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                      Creativity (Temperature):
                    </span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400">{temperature}</span>
                  </div>
                  <input
                    type="range"
                    min={0.1}
                    max={1.0}
                    step={0.1}
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                    <span>Deterministic (0.1)</span>
                    <span>Balanced (0.5)</span>
                    <span>High Creativity (1.0)</span>
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleSimulateRun}
                  disabled={isGenerating}
                  className="w-full py-3.5 px-6 rounded-2xl font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-zinc-950" />
                      <span>Synthesizing Output...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-zinc-950" />
                      <span>Run Generative Simulation</span>
                    </>
                  )}
                </button>
              </div>

              {/* Right Column: Output Terminal */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    Generated AI Result
                  </label>
                  <button
                    onClick={handleCopyPlaygroundOutput}
                    disabled={!simulatedOutput}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition cursor-pointer disabled:opacity-40"
                  >
                    {copiedPlayground ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Output</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Terminal Console */}
                <div className="flex-1 min-h-[300px] p-5 rounded-2xl bg-[#0B0B0D] border border-zinc-800 text-zinc-100 font-mono text-xs sm:text-sm overflow-y-auto leading-relaxed shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80 text-[11px] text-zinc-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      Engine: {selectedModel}
                    </span>
                    <span>T={temperature}</span>
                  </div>

                  {simulatedOutput ? (
                    <div className="whitespace-pre-wrap text-emerald-300 leading-relaxed">
                      {simulatedOutput}
                      {isGenerating && <span className="inline-block w-2 h-4 ml-1 bg-emerald-400 animate-pulse align-middle" />}
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-zinc-500 text-xs italic">
                      Click "Run Generative Simulation" to synthesize output...
                    </div>
                  )}
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                  <Info className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Demonstrates prompt conditioning, structured output schemas, and video storyboard formatting.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Cinema Expand Modal */}
        {activeVideoModal && activeVideoModal.videoUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md animate-fadeIn">
            <div
              className="relative w-full max-w-4xl bg-[#161619] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Modal Header */}
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

              {/* Video Cinema Player */}
              <div className="relative aspect-[9/14] max-h-[70vh] mx-auto bg-black flex items-center justify-center">
                <video
                  src={activeVideoModal.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Footer Description */}
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
