import React, { useState } from 'react';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';
import { personalInfo, education, certifications, experiences, projects } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
${personalInfo.name}
${personalInfo.address}
Mobile: ${personalInfo.phone} | Email: ${personalInfo.email}

JOB OBJECTIVES
${personalInfo.objective}

SKILLS
• Customer Service & Communication: Skilled at building rapport, managing client relations, and communicating technical concepts clearly to diverse users.
• Office Productivity: Proficient in using Microsoft Office products including Word for documentation, Excel for data logs, and PowerPoint for presentations to organize tasks and manage workflows.
• Technical & Engineering: Proficient in Python, JavaScript, HTML/CSS, SQL, C++, hardware troubleshooting, and IoT development.
• Collaboration & Adaptability: Capable of performing well individually and as part of a collaborative team in fast-paced environments.

EXPERIENCES
${experiences.map(e => `${e.company} (${e.period})\n${e.role}\n${e.description.map(d => `• ${d}`).join('\n')}`).join('\n\n')}

PROJECTS
${projects.map(p => `${p.title} (${p.category})\n${p.description}\nKey Highlights: ${p.highlights.join('; ')}`).join('\n\n')}

EDUCATION
${education.map(ed => `${ed.institution} (${ed.period})\n${ed.degree}`).join('\n')}

SEMINARS ATTENDED / CERTIFICATIONS ACQUIRED
${certifications.map(c => `• ${c.issuer} (${c.date}) – ${c.title}`).join('\n')}

CHARACTER REFERENCE:
Joan R. Gaton
Workforce Forecasting and Capacity Planning Analyst – Alorica Teleservices Inc.
09953329514 | joangatoncb@yahoo.com
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/80 backdrop-blur-md animate-fadeIn">
      {/* Container */}
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#161619] text-zinc-900 dark:text-zinc-100 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-[#0E0E10]/80 shrink-0">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
            <FileText className="w-5 h-5" />
            <span>Curriculum Vitae / Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 transition flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-zinc-950 transition flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-[#161619] print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="text-center pb-6 border-b-2 border-zinc-900 dark:border-zinc-100">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white uppercase mb-1">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-2">
              {personalInfo.address}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-700 dark:text-zinc-300">
              <span className="flex items-center gap-1">
                <strong>Mobile:</strong> {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <strong>Email:</strong> {personalInfo.email}
              </span>
            </div>
          </div>

          {/* Job Objectives */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-2 pb-1 border-b border-zinc-300 dark:border-zinc-700">
              Job Objectives
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {personalInfo.objective}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-3 pb-1 border-b border-zinc-300 dark:border-zinc-700">
              Skills
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <strong>Customer Service & Communication:</strong> Skilled at building rapport, managing client relations, and communicating technical concepts clearly to diverse users.
              </li>
              <li>
                <strong>Office Productivity:</strong> Proficient in using Microsoft Office products including Word for documentation, Excel for data logs, and PowerPoint for presentations to organize tasks and manage workflows.
              </li>
              <li>
                <strong>Technical & Engineering:</strong> Proficient in Python, JavaScript, HTML/CSS, SQL, C++, hardware troubleshooting, and IoT development.
              </li>
              <li>
                <strong>Collaboration & Adaptability:</strong> Capable of performing well individually and as part of a collaborative team in fast-paced environments.
              </li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4 pb-1 border-b border-zinc-300 dark:border-zinc-700">
              Experiences
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm mb-0.5">
                    <span className="font-bold text-zinc-900 dark:text-white">{exp.company}</span>
                    <span className="font-medium text-zinc-600 dark:text-zinc-400">{exp.period}</span>
                  </div>
                  <div className="italic text-xs text-zinc-700 dark:text-zinc-300 mb-2">
                    {exp.role}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-4 pb-1 border-b border-zinc-300 dark:border-zinc-700">
              Key Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="font-bold text-zinc-900 dark:text-white">
                    {proj.title} <span className="font-normal italic text-zinc-500">| {proj.category}</span>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-1">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1 text-[11px] text-zinc-600 dark:text-zinc-400">
                    <strong>Stack:</strong> {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-3 pb-1 border-b border-zinc-300 dark:border-zinc-700">
              Education
            </h2>
            {education.map((ed, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">{ed.institution}</div>
                  <div className="italic text-zinc-700 dark:text-zinc-300">{ed.degree}</div>
                </div>
                <div className="font-medium text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-0">
                  {ed.period}
                </div>
              </div>
            ))}
          </div>

          {/* Seminars & Certifications */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-3 pb-1 border-b border-zinc-300 dark:border-zinc-700">
              Seminars Attended / Certifications Acquired
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              {certifications.map((cert) => (
                <li key={cert.id}>
                  <strong>{cert.issuer} ({cert.date})</strong> – {cert.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Character Reference */}
          <div className="pt-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-2 pb-1 border-b border-zinc-300 dark:border-zinc-700">
              Character Reference
            </h2>
            <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              <div className="font-bold text-zinc-900 dark:text-white">Joan R. Gaton</div>
              <div>Workforce Forecasting and Capacity Planning Analyst – Alorica Teleservices Inc.</div>
              <div className="text-zinc-600 dark:text-zinc-400 mt-0.5">09953329514 | joangatoncb@yahoo.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
