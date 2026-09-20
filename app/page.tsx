'use client';

import { useState } from 'react';
import { unBotText } from '@/utils/cleaner';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleClean = (text: string) => {
    setInputText(text);
    setOutputText(unBotText(text));
  };

  const handleCopy = async () => {
    if (!outputText) return;
    await navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    handleClean(text);
  };

  const wordCount = (text: string) =>
    text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        
        {/* Header */}
        <header className="text-center space-y-2 py-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            UnBotIt
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            Strip Markdown, formatting, and asterisks from AI text instantly.
          </p>
        </header>

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Input Box */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center text-xs text-slate-400 px-1">
              <span>Input (AI Raw Text)</span>
              <button
                onClick={handlePaste}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Paste from Clipboard
              </button>
            </div>
            <textarea
              value={inputText}
              onChange={(e) => handleClean(e.target.value)}
              placeholder="Paste text from ChatGPT, Claude, or DeepSeek here..."
              className="w-full h-80 p-4 bg-slate-900 border border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none text-sm text-slate-200 placeholder-slate-600"
            />
            <div className="text-xs text-slate-500 text-right px-1">
              Words: {wordCount(inputText)}
            </div>
          </div>

          {/* Output Box */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center text-xs text-slate-400 px-1">
              <span>Output (Clean Text)</span>
              <button
                onClick={handleCopy}
                disabled={!outputText}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 disabled:cursor-not-allowed'
                }`}
              >
                {copied ? 'Copied!' : 'Copy Clean Text'}
              </button>
            </div>
            <textarea
              readOnly
              value={outputText}
              placeholder="Cleaned text will appear here automatically..."
              className="w-full h-80 p-4 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none resize-none text-sm text-slate-200 placeholder-slate-600"
            />
            <div className="text-xs text-slate-500 text-right px-1">
              Words: {wordCount(outputText)}
            </div>
          </div>

        </div>

        {/* Clear Button */}
        {inputText && (
          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                setInputText('');
                setOutputText('');
              }}
              className="text-xs text-slate-500 hover:text-slate-300 underline"
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-600 py-4">
        UnBotIt &copy; {new Date().getFullYear()} — Client-side processing. No data is stored or transmitted.
      </footer>
    </main>
  );
}