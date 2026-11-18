import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://abhinandandyavathi.github.io/radarseq12/sitemap.xml',
  };
}
