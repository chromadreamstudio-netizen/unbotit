import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm mb-6 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1. Information We Do Not Collect</h2>
            <p>UnBotIt operates 100% on the client-side (in your browser). We do not collect, store, or transmit any text you input into our tool. We do not have servers that store your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2. Analytics and Advertising (Cookies)</h2>
            <p>We may use third-party services like Google Analytics and Google AdSense. These third parties use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google Ads Settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at support@unbotit.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}