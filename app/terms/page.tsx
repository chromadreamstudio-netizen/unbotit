import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm mb-6 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1. Acceptance of Terms</h2>
            <p>By accessing and using UnBotIt, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2. Use of Service</h2>
            <p>UnBotIt is provided "as is" for the purpose of cleaning text formats. We are not responsible for any lost data or formatting issues that occur while using this tool. The processing is done locally on your device.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3. Prohibited Uses</h2>
            <p>You agree not to use the site for any unlawful purpose or in any way that interrupts, damages, or impairs the service.</p>
          </section>
        </div>
      </div>
    </div>
  );
}