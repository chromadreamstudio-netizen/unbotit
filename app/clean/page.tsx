import Link from 'next/link';
import { programmaticPages } from '@/data/keywords';

export default function CleanIndexPage() {
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
            ← Back to Main Tool
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-12 flex flex-col gap-8">
        <div className="text-center flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 self-center">
            Directory & Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            AI Formatting & Text Cleaning Solutions
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore our specialized tools designed to instantly fix, strip, and format raw AI outputs from ChatGPT, Claude, and DeepSeek.
          </p>
        </div>

        {/* Grid of Solutions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {programmaticPages.map((page) => (
            <Link
              key={page.slug}
              href={`/clean/${page.slug}`}
              className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 p-5 rounded-2xl transition-all flex flex-col gap-2 group shadow-lg"
            >
              <h2 className="font-bold text-white group-hover:text-cyan-400 transition-colors text-base">
                {page.heading}
              </h2>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {page.introText}
              </p>
              <span className="text-xs text-cyan-400 font-semibold mt-2 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Open Tool →
              </span>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        UnBotIt Solutions Directory © {new Date().getFullYear()}
      </footer>
    </div>
  );
}