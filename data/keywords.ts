export interface KeywordPageData {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  heading: string;
  introText: string;
}

export const programmaticPages: KeywordPageData[] = [
  {
    slug: 'remove-asterisks-from-chatgpt-text',
    keyword: 'remove asterisks from chatgpt text',
    title: 'Remove Asterisks from ChatGPT Text Instantly | UnBotIt',
    description: 'Easily strip bold markdown asterisks (**), italics, and formatting clutter from ChatGPT and AI outputs with one click.',
    heading: 'How to Remove Asterisks from ChatGPT Text',
    introText: 'When you copy text from ChatGPT, it often comes packed with annoying double asterisks (**). Use our instant tool below to clean them up in milliseconds.'
  },
  {
    slug: 'clean-markdown-from-claude-output',
    keyword: 'clean markdown from claude output',
    title: 'Clean Markdown & Formatting from Claude AI | UnBotIt',
    description: 'Instantly remove markdown headers, bullets, and symbols from Anthropic Claude text responses.',
    heading: 'Clean Markdown Formatting from Claude Output',
    introText: 'Claude AI responses include markdown syntax that breaks plain text documents. Paste your text below to strip all formatting instantly.'
  },
  {
    slug: 'remove-grey-background-copy-paste',
    keyword: 'remove grey background copy paste',
    title: 'Remove Grey Background from Copied Text | UnBotIt',
    description: 'Strip annoying grey background highlights when copying code blocks or text from AI chats into Word or Gmail.',
    heading: 'Remove Grey Background from Copied AI Text',
    introText: 'Tired of the ugly grey code-block highlights when pasting into Microsoft Word or emails? Clean your text formatting here instantly.'
  }
];