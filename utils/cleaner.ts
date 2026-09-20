export function unBotText(text: string): string {
  if (!text) return '';

  return text
    // 1. إزالة التنسيقات العريضة والمائلة (***, **, *, ___, __, _)
    .replace(/\*\*\*(.*?)\*\*\*/g, '$1')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/___(.*?)___/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')

    // 2. إزالة العناوين (#, ##, ###, إلخ)
    .replace(/^#{1,6}\s+/gm, '')

    // 3. إزالة علامات الاقتباس (>)
    .replace(/^>\s+/gm, '')

    // 4. إزالة حزم الأكواد البرمجية (Code Blocks & Inline Code)
    .replace(/```[\s\S]*?```/g, (match) => {
      return match.replace(/```[a-zA-Z]*\n?/g, '').replace(/```$/g, '');
    })
    .replace(/`(.*?)`/g, '$1')

    // 5. إزالة القوائم النقطية (-, *, +)
    .replace(/^[\s]*[-*+]\s+/gm, '')

    // 6. إزالة الروابط [text](url) مع الإبقاء على النص فقط
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')

    // 7. توحيد المسافات والأسطر الفارغة الزائدة
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}