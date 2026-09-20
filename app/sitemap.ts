import { MetadataRoute } from 'next';
import { programmaticPages } from '@/data/keywords';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://unbotit.vercel.app';

  // الصفحات الثابتة الأساسية
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
  ];

  // الصفحات الديناميكية الخاصة بـ Programmatic SEO
  const dynamicPages = programmaticPages.map((page) => ({
    url: `${baseUrl}/clean/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...dynamicPages];
}