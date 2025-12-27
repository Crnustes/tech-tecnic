// config/admin.ts
export const ADMIN_CONFIG = {
  blog: {
    maxTitleLength: 100,
    minTitleLength: 10,
    maxExcerptLength: 300,
    minExcerptLength: 50,
    minContentLength: 500,
    maxTags: 10,
    minTags: 1,
    maxSlugLength: 100,
    minSlugLength: 3,
    maxSeoTitleLength: 60,
    maxSeoDescriptionLength: 160,
    maxSeoKeywords: 10,
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    endpoints: {
      blog: {
        create: '/admin/blog',
        update: '/admin/blog/[id]',
        delete: '/admin/blog/[id]',
        list: '/admin/blog',
      },
    },
  },
  features: {
    autoSlugGeneration: true,
    seoOptimization: true,
    previewMode: true,
    draftSaving: true,
    scheduledPublishing: false, // Próxima funcionalidad
    imageUpload: false, // Próxima funcionalidad
    richTextEditor: false, // Próxima funcionalidad
  },
} as const;

export type AdminConfig = typeof ADMIN_CONFIG;