export interface CleanerOptions {
  removeAsterisks?: boolean;
  removeHeaders?: boolean;
  removeCodeBlocks?: boolean;
  removeBullets?: boolean;
  removeLinks?: boolean;
}

export function unBotText(text: string, options: CleanerOptions = {}): string {
  if (!text) return '';

  const {
    removeAsterisks = true,
    removeHeaders = true,
    removeCodeBlocks = false,
    removeBullets = true,
    removeLinks = true,
  } = options;

  let cleaned = text;

  // 1. Remove Bold / Italic asterisks and underscores
  if (removeAsterisks) {
    cleaned = cleaned
      .replace(/\*\*\*(.*?)\*\*\*/g, '$1')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/___(.*?)___/g, '$1')
      .replace(/__(.*?)__/g, '$1')
      .replace(/_(.*?)_/g, '$1');
  }

  // 2. Remove Markdown Headers (#, ##, ###)
  if (removeHeaders) {
    cleaned = cleaned.replace(/^#{1,6}\s+/gm, '');
  }

  // 3. Remove Quotes (>)
  cleaned = cleaned.replace(/^>\s+/gm, '');

  // 4. Handle Code Blocks
  if (removeCodeBlocks) {
    cleaned = cleaned.replace(/```[\s\S]*?```/g, '');
  } else {
    cleaned = cleaned
      .replace(/```[a-zA-Z]*\n?/g, '')
      .replace(/```$/g, '')
      .replace(/`(.*?)`/g, '$1');
  }

  // 5. Remove Bullets (-, *, +)
  if (removeBullets) {
    cleaned = cleaned.replace(/^[\s]*[-*+]\s+/gm, '');
  }

  // 6. Remove Markdown Links [text](url) -> text
  if (removeLinks) {
    cleaned = cleaned.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
  }

  // 7. Normalize line breaks and trailing spaces
  return cleaned.replace(/\n{3,}/g, '\n\n').trim();
}