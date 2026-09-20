'use client';

import { useState } from 'react';
import { unBotText } from '@/utils/cleaner';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [copied, setCopied] = useState(false);

  // Custom Processing Toggles
  const [options, setOptions] = useState({
    removeAsterisks: true,
    removeHeaders: true,
    removeCodeBlocks: false,
    removeBullets: true,
    removeLinks: true,
  });

  // Sample AI text for instant testing
  const sampleText = `***Here is the summary of your request:***

### **Key Features of the AI Model**
* **Speed & Efficiency**: Processes over *10,000 tokens* per second.
* **Accuracy**: High precision in ___data extraction___.

> "AI is not here to replace developers, but to empower them."

Here is a quick example in python:
\`\`\`python
print("Hello UnBotIt!")
\`\`\`

Feel free to check out [our website](https://unbotit.com) for more details!`;

  const handleClean = (text: string) => {
    return unBotText(text, options);
  };

  const cleanedText = handleClean(inputText);

  const wordCount = (text: string) => {
    const trimmed = text.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  };

  const charCount = (text: string) => text.length;

  const handleCopy = () => {
    if (!cleanedText) return;
    navigator.clipboard.writeText(cleanedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputText(text);
    } catch (err) {
      alert('Failed to paste from clipboard. Please paste manually using Ctrl+V.');
    }
  };

  const handleDownload = () => {
    if (!cleanedText) return;
    const blob = new Blob([cleanedText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cleaned-unbotit.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Glow Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Navigation Header */}
      <header className="relative z-10 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-cyan-500/20 text-lg">
              U
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
              UnBotIt
            </span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hidden sm:inline-block">
              v1.2 Pro
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a href="#features" className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#faq" className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors hidden sm:block">
              FAQ
            </a>
            <a
              href="https://github.com/chromadreamstudio-netizen/unbotit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-2 text-xs font-medium"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col gap-10">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            100% Client-Side • Zero Server Storage • Instant Regex Engine
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Strip AI Artifacts & Asterisks <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              In One Instant Click
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
            Clean raw text responses from ChatGPT, Claude, and DeepSeek. Remove markdown clutter, asterisks, headers, and code syntax before pasting into your emails or documents.
          </p>

          <button
            onClick={() => setInputText(sampleText)}
            className="mt-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 flex items-center gap-1 transition-colors"
          >
            ⚡ Load Sample AI Text to test
          </button>
        </div>

        {/* Options Toolbar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <span className="text-cyan-400">⚙️ Processing Rules:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <label className="flex items-center gap-2 cursor-pointer bg-slate-950/60 border border-slate-800 px-3 py-1.5 rounded-lg hover:border-slate-700 transition-colors">
              <input
                type="checkbox"
                checked={options.removeAsterisks}
                onChange={(e) => setOptions({ ...options, removeAsterisks: e.target.checked })}
                className="accent-cyan-500 rounded cursor-pointer"
              />
              <span className="text-slate-300">Strip Asterisks (`**`)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer bg-slate-950/60 border border-slate-800 px-3 py-1.5 rounded-lg hover:border-slate-700 transition-colors">
              <input
                type="checkbox"
                checked={options.removeHeaders}
                onChange={(e) => setOptions({ ...options, removeHeaders: e.target.checked })}
                className="accent-cyan-500 rounded cursor-pointer"
              />
              <span className="text-slate-300">Strip Headers (`#`)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer bg-slate-950/60 border border-slate-800 px-3 py-1.5 rounded-lg hover:border-slate-700 transition-colors">
              <input
                type="checkbox"
                checked={options.removeBullets}
                onChange={(e) => setOptions({ ...options, removeBullets: e.target.checked })}
                className="accent-cyan-500 rounded cursor-pointer"
              />
              <span className="text-slate-300">Remove Bullets (`-`, `*`)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer bg-slate-950/60 border border-slate-800 px-3 py-1.5 rounded-lg hover:border-slate-700 transition-colors">
              <input
                type="checkbox"
                checked={options.removeLinks}
                onChange={(e) => setOptions({ ...options, removeLinks: e.target.checked })}
                className="accent-cyan-500 rounded cursor-pointer"
              />
              <span className="text-slate-300">Clean Links `[Text](URL)`</span>
            </label>
          </div>
        </div>

        {/* Text Cleaner Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Input Panel */}
          <div className="flex flex-col bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden shadow-xl focus-within:border-slate-700 transition-all">
            <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Input (Raw AI Output)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePaste}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors border border-slate-700/60"
                >
                  📋 Paste Clipboard
                </button>
                {inputText && (
                  <button
                    onClick={() => setInputText('')}
                    className="px-2.5 py-1 text-xs font-medium bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg transition-colors border border-rose-500/20"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste raw response from ChatGPT, Claude, or DeepSeek here..."
              className="w-full h-80 lg:h-96 p-4 bg-transparent text-slate-200 placeholder-slate-600 focus:outline-none resize-none font-mono text-sm leading-relaxed"
            />

            <div className="bg-slate-950/60 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <span>Words: <strong className="text-slate-400">{wordCount(inputText)}</strong></span>
              <span>Characters: <strong className="text-slate-400">{charCount(inputText)}</strong></span>
            </div>
          </div>

          {/* Output Panel */}
          <div className="flex flex-col bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden shadow-xl border-cyan-500/20 transition-all">
            <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Output (Clean Text)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  disabled={!cleanedText}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 rounded-lg transition-colors border border-slate-700/60"
                >
                  💾 Download .txt
                </button>
                <button
                  onClick={handleCopy}
                  disabled={!cleanedText}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all shadow-md flex items-center gap-1.5 ${
                    copied
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 shadow-cyan-500/20'
                  }`}
                >
                  {copied ? '✓ Copied!' : '✨ Copy Clean Text'}
                </button>
              </div>
            </div>

            <textarea
              readOnly
              value={cleanedText}
              placeholder="Cleaned human-ready text will appear here automatically..."
              className="w-full h-80 lg:h-96 p-4 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none resize-none font-sans text-sm leading-relaxed"
            />

            <div className="bg-slate-950/60 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <span>Words: <strong className="text-emerald-400">{wordCount(cleanedText)}</strong></span>
              <span>Characters: <strong className="text-emerald-400">{charCount(cleanedText)}</strong></span>
            </div>
          </div>

        </div>

        {/* Features / Value Proposition */}
        <section id="features" className="py-8 border-t border-slate-800/80">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Why Use UnBotIt?</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Designed for creators, writers, software developers, and daily AI users.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-2xl flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg font-bold">
                🔒
              </div>
              <h3 className="font-semibold text-slate-200 text-sm">100% Private & Local</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your text never leaves your browser. All cleaning happens locally via ultra-fast client-side JavaScript regex.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-2xl flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-lg font-bold">
                ⚡
              </div>
              <h3 className="font-semibold text-slate-200 text-sm">Real-time Stripping</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zero waiting time or API latency. Text is cleaned instantly as you type, edit, or paste.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-2xl flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-lg font-bold">
                🎯
              </div>
              <h3 className="font-semibold text-slate-200 text-sm">Format Preservation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cleans artificial asterisks and markdown syntax while preserving natural paragraph breaks and text readability.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-6 border-t border-slate-800/80 max-w-3xl mx-auto w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">Frequently Asked Questions</h2>
          
          <div className="flex flex-col gap-4 text-xs sm:text-sm">
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
              <h3 className="font-semibold text-slate-200 mb-1">Why does ChatGPT add asterisks to text?</h3>
              <p className="text-slate-400 leading-relaxed">
                ChatGPT and other LLMs format text using Markdown. Double asterisks (`**bold**`) represent bold emphasis. When pasted into plain text fields (like emails or documents), the Markdown tags remain visible as clutter.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
              <h3 className="font-semibold text-slate-200 mb-1">Is my input data saved or analyzed?</h3>
              <p className="text-slate-400 leading-relaxed">
                No. UnBotIt processes everything inside your web browser. No server request is made, and no text is stored or logged.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
              <h3 className="font-semibold text-slate-200 mb-1">Which AI models are supported?</h3>
              <p className="text-slate-400 leading-relaxed">
                UnBotIt supports all LLMs that produce Markdown output, including ChatGPT (GPT-4o), Claude 3.5, DeepSeek R1/V3, Meta Llama, and Gemini.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 py-8 bg-slate-950/90 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            UnBotIt © {new Date().getFullYear()} — Client-side text cleaning.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium text-slate-400">
            <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="mailto:support@unbotit.com" className="hover:text-cyan-400 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>