import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://markmind.xyz',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: 'https://markmind.xyz/privacy',
    lastModified: new Date('2026-03-01'),
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: 'https://markmind.xyz/terms',
    lastModified: new Date('2026-03-01'),
    changeFrequency: 'yearly',
    priority: 0.3,
  },
]

export default sitemap
