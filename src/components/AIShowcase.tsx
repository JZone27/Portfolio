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
        return <Video className="w-4 h-4 text-purple-500" />;
      case 'Image Generation':
        return <ImageIcon className="w-4 h-4 text-pink-500" />;
      case 'Prompt Engineering':
        return <Terminal className="w-4 h-4 text-indigo-500" />;
      case 'AI Copywriting':
        return <FileText className="w-4 h-4 text-emerald-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <section id="ai-showcase" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-gray-900/40">
      {/* Background glow effects */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Generative AI Portfolio & Videos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            AI Content Creation & Video Vault
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Explore commercial AI video ads, captioned UGC clips, generative visual artworks, and interactive prompt chains.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-md inline-flex gap-1 shadow-inner">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 shadow-md scale-[1.02]'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Video & AI Content Vault ({aiContentShowcase.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('playground')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'playground'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 scale-[1.02]'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Wand2 className="w-4 h-4" />
              <span>Interactive AI Studio</span>
              <span className="px-1.5 py-0.2 text-[10px] uppercase font-bold bg-pink-500 text-white rounded-full">
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
                  className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    categoryFilter === cat
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                      : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
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
                  className="rounded-3xl glass-card overflow-hidden hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-indigo-500/10 group"
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
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-950/80 text-white backdrop-blur-md border border-white/15 shadow-md">
                            <Video className="w-3.5 h-3.5 text-pink-400" />
                            <span>AI Commercial Video</span>
                          </span>
                        </div>

                        {/* Fullscreen Expand Button */}
                        <button
                          onClick={() => setActiveVideoModal(item)}
                          className="absolute top-3 right-3 p-2 rounded-xl bg-gray-950/70 hover:bg-indigo-600 text-white backdrop-blur-md transition cursor-pointer shadow-md"
                          title="Expand Video"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    ) : item.image ? (
                      /* Image Card */
                      <div className="relative aspect-video overflow-hidden bg-gray-950">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/90 text-white backdrop-blur-md border border-white/10 shadow-xs">
                            {getCategoryIcon(item.category)}
                            {item.tool}
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Text/Prompt Card */
                      <div className="p-6 pb-2 border-b border-gray-100 dark:border-gray-800/80 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                          {getCategoryIcon(item.category)}
                          {item.tool}
                        </span>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          {item.category}
                        </span>
                      </div>
                    )}

                    {/* Content Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                        Tool / Pipeline: {item.tool}
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Prompt Snippet with Copy */}
                      <div className="relative rounded-2xl bg-gray-900 p-4 mb-4 border border-gray-800 text-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1">
                            <Terminal className="w-3 h-3" />
                            Prompt / Creative Direction
                          </span>
                          <button
                            onClick={() => handleCopyPrompt(item.id, item.prompt)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-200 transition active:scale-95 cursor-pointer"
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
                        <p className="text-xs font-mono text-gray-300 line-clamp-3 leading-relaxed whitespace-pre-wrap">
                          {item.prompt}
                        </p>
                      </div>

                      {/* Output Sample Snippet if available */}
                      {item.outputSample && (
                        <div className="p-3.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/50 text-xs text-gray-700 dark:text-gray-300 mb-4 font-mono whitespace-pre-wrap">
                          <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-1 text-[11px] uppercase tracking-wider">
                            Output Result:
                          </div>
                          {item.outputSample}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-800/80 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
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
          <div className="max-w-5xl mx-auto rounded-3xl glass-card p-6 sm:p-10 shadow-2xl border border-indigo-500/30">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800 mb-8">
              <div>
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Wand2 className="w-4 h-4" />
                  <span>Real-Time Prompt Lab & Simulator</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                  Interactive AI Generator Studio
                </h3>
              </div>

              {/* Presets dropdown/pill */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-500 font-medium">Presets:</span>
                {promptSimulatorPresets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handlePresetSelect(preset.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                      selectedPresetId === preset.id
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
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
                    <label className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-indigo-500" />
                      Input Prompt / Instructions
                    </label>
                    <span className="text-xs text-gray-400">
                      {promptInput.length} chars
                    </span>
                  </div>
                  <textarea
                    rows={6}
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    placeholder="Enter your customized prompt or task instructions here..."
                    className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-gray-900 dark:text-gray-100 text-sm font-mono outline-none transition resize-none"
                  />
                </div>

                {/* Model & Parameter Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Model Selector */}
                  <div>
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5 block">
                      Target Engine / Model
                    </label>
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white text-xs font-semibold outline-none cursor-pointer"
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
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5 block">
                      Creative Tone & Persona
                    </label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white text-xs font-semibold outline-none cursor-pointer"
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
                  <div className="flex items-center justify-between text-xs font-bold mb-1.5 text-gray-700 dark:text-gray-300">
                    <span className="flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-purple-500" />
                      Creativity (Temperature):
                    </span>
                    <span className="font-mono text-indigo-600 dark:text-indigo-400">{temperature}</span>
                  </div>
                  <input
                    type="range"
                    min={0.1}
                    max={1.0}
                    step={0.1}
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                    <span>Deterministic (0.1)</span>
                    <span>Balanced (0.5)</span>
                    <span>High Creativity (1.0)</span>
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleSimulateRun}
                  disabled={isGenerating}
                  className="w-full py-3.5 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Synthesizing Output...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-white" />
                      <span>Run Generative Simulation</span>
                    </>
                  )}
                </button>
              </div>

              {/* Right Column: Output Terminal */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-pink-500" />
                    Generated AI Result
                  </label>
                  <button
                    onClick={handleCopyPlaygroundOutput}
                    disabled={!simulatedOutput}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer disabled:opacity-40"
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
                <div className="flex-1 min-h-[300px] p-5 rounded-2xl bg-gray-950 border border-gray-800 text-gray-100 font-mono text-xs sm:text-sm overflow-y-auto leading-relaxed shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800/80 text-[11px] text-gray-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      Engine: {selectedModel}
                    </span>
                    <span>T={temperature}</span>
                  </div>

                  {simulatedOutput ? (
                    <div className="whitespace-pre-wrap text-emerald-300/90 leading-relaxed">
                      {simulatedOutput}
                      {isGenerating && <span className="inline-block w-2 h-4 ml-1 bg-emerald-400 animate-pulse align-middle" />}
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-500 text-xs italic">
                      Click "Run Generative Simulation" to synthesize output...
                    </div>
                  )}
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400">
                  <Info className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Demonstrates prompt conditioning, structured output schemas, and video storyboard formatting.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Cinema Expand Modal */}
        {activeVideoModal && activeVideoModal.videoUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/85 backdrop-blur-md animate-fadeIn">
            <div
              className="relative w-full max-w-4xl bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Modal Header */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-gray-800 bg-gray-950/60">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Video className="w-4 h-4 text-pink-500" />
                  <span>{activeVideoModal.title}</span>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="p-1.5 rounded-full text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 transition cursor-pointer"
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
              <div className="p-5 px-6 bg-gray-950 border-t border-gray-800 text-xs text-gray-300">
                <div className="font-bold text-white mb-1">Creative Direction & Prompt:</div>
                <div className="font-mono text-gray-400 leading-relaxed">
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
