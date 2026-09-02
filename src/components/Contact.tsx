import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', projectType: 'Full-Stack Web App', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-100/40 dark:bg-[#161619]/40">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-emerald-500/10 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
            Let’s Build Something Extraordinary
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal">
            Have a project in mind, an IoT/web system requirement, or want to collaborate? Send a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl glass-card">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                Feel free to email me directly or explore my open-source code and social profiles.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 hover:border-emerald-500/50 group transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-700 text-emerald-600 dark:text-emerald-400 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Email</div>
                      <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                        {personalInfo.email}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 hover:border-emerald-500/50 group transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-xs">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">GitHub</div>
                      <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                        @JZone27
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-700 text-teal-600 dark:text-teal-400 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Location</div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-800/40">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Response Time</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Typically replying within 24 hours for project inquiries, freelance engineering, and collaborations.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl glass-card">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                Send a Message
              </h3>

              {isSuccess ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-950/40 border border-emerald-500/30 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-emerald-300 mb-1">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-400/90">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0E0E10] border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-zinc-900 dark:text-white text-sm outline-none transition"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0E0E10] border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-zinc-900 dark:text-white text-sm outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Inquiry / Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0E0E10] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm outline-none cursor-pointer"
                    >
                      <option value="Full-Stack Web App">Full-Stack Web Application</option>
                      <option value="IoT & Hardware Firmware">IoT & Hardware Firmware</option>
                      <option value="AI Video & Content Creation">AI Video & Content Creation</option>
                      <option value="PC Building & Hardware Consulting">PC Building & Hardware Consulting</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your vision, timeline, or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0E0E10] border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-zinc-900 dark:text-white text-sm outline-none transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-300 hover:to-teal-300 shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
