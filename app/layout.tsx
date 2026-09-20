import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UnBotIt - Free AI Text Cleaner & Formatter',
  description: 'Instantly strip AI artifacts, markdown, asterisks, and code blocks from ChatGPT, Claude, and DeepSeek outputs. 100% free and client-side.',
  keywords: ['AI text cleaner', 'remove asterisks chatgpt', 'chatgpt formatting remover', 'unbot text', 'markdown cleaner'],
  authors: [{ name: 'UnBotIt Team' }],
  openGraph: {
    title: 'UnBotIt - Strip AI Artifacts Instantly',
    description: 'Clean raw text responses from ChatGPT, Claude, and DeepSeek before pasting into emails or documents.',
    url: 'https://unbotit.vercel.app', // استبدله بالدومين الخاص بك لاحقاً
    siteName: 'UnBotIt',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnBotIt - Free AI Text Cleaner',
    description: 'Remove markdown clutter and asterisks from AI text instantly.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}