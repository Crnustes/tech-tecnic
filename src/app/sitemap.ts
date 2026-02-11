import { MetadataRoute } from "next";
import { getBlogPosts } from "@/config/blog-posts";
import {
  buildAlternates,
  buildAlternatesForLocales,
  buildLocalizedUrl,
  SUPPORTED_LOCALES,
} from "@/utils/seo";

type ChangeFrequency = "daily" | "weekly" | "monthly" | "yearly";

const createLocalizedEntries = (
  path: string,
  lastModified: Date | string,
  changeFrequency: ChangeFrequency,
  priority: number
) =>
  SUPPORTED_LOCALES.map((locale) => ({
    url: buildLocalizedUrl(path, locale),
    lastModified,
    changeFrequency,
    priority,
    alternates: buildAlternates(path),
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticEntries = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/contacto", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/proyectos", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/servicios/desarrollo-web", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/seo-geo", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/automatizaciones", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/automatizacion-ia", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/servicios/integraciones", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/servicios/mantenimiento", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/servicios/apps-moviles", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/servicios/chatbot-wp-ia", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/aviso-legal", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/politica-de-privacidad", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/politica-de-cookies", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/politica-de-tratamiento-de-datos", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terminos-y-condiciones", changeFrequency: "yearly" as const, priority: 0.3 },
  ].flatMap((entry) =>
    createLocalizedEntries(entry.path, currentDate, entry.changeFrequency, entry.priority)
  );

  const blogPostsEs = getBlogPosts("es");
  const blogPostsEn = getBlogPosts("en");
  const blogPostsEnById = new Map(blogPostsEn.map((post) => [post.id, post.slug]));

  const blogEntries = blogPostsEs.flatMap((post) => {
    const pathEs = `/blog/${post.slug}`;
    const pathEn = `/blog/${blogPostsEnById.get(post.id) ?? post.slug}`;
    const alternates = buildAlternatesForLocales({
      es: pathEs,
      en: pathEn,
    });

    return SUPPORTED_LOCALES.map((locale) => ({
      url: buildLocalizedUrl(locale === "es" ? pathEs : pathEn, locale),
      lastModified: post.date,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates,
    }));
  });

  return [...staticEntries, ...blogEntries];
}
