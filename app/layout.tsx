import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UnBotIt — Strip AI Formatting & Markdown Instantly',
  description: 'Clean and strip asterisks, markdown headers, and formatting from ChatGPT, Claude, and DeepSeek text.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}