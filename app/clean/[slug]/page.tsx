'use client';

import { useState, use } from 'react';
import { programmaticPages, KeywordPageData } from '@/data/keywords';
import { unBotText } from '@/utils/cleaner';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProgrammaticLandingPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const pageData: KeywordPageData | undefined = programmaticPages.find(
    (p) => p.slug === resolvedParams.slug
  );

  const [inputText, setInputText] = useState('');
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState({
    removeAsterisks: true,
    removeHeaders: true,
    removeCodeBlocks: true,
    removeBullets: true,
    removeLinks: true,
  });

  if (!pageData) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-slate-400 mb-6">The cleaning page you are looking for does not exist.</p>
        <Link href="/" className="px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  const cleanedText = unBotText(inputText, options);

  const handleCopy = () => {
    if (!cleanedText) return;
    navigator.clipboard.writeText(cleanedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-cyan-500/20 text-lg">
              U
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">UnBotIt</span>
          </Link>
          <Link href="/" className="text-xs font-medium text-cyan-400 hover:underline">
            ← Go to Main App
          </Link>
        </div>
      </header>

      {/* Main SEO Content & Tool Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-12 flex flex-col gap-8">
        <div className="text-center flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 self-center">
            Targeted AI Solution
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            {pageData.heading}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {pageData.introText}
          </p>
        </div>

        {/* Interactive Workspace Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl">
          {/* Input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Paste Raw AI Text:</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your text with asterisks or markdown here..."
              className="w-full h-64 p-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono resize-none"
            />
          </div>

          {/* Output */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Clean Output Result:</label>
              <button
                onClick={handleCopy}
                disabled={!cleanedText}
                className="px-2.5 py-1 text-xs font-bold bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 rounded-lg transition-colors"
              >
                {copied ? '✓ Copied!' : 'Copy Clean Text'}
              </button>
            </div>
            <textarea
              readOnly
              value={cleanedText}
              placeholder="Cleaned text ready for Word or email..."
              className="w-full h-64 p-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none font-sans resize-none"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        UnBotIt Programmatic Engine © {new Date().getFullYear()}
      </footer>
    </div>
  );
}