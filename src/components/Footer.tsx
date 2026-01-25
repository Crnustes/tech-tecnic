'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { buildLocalizedUrl } from '@/utils/seo';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const services = [
    { name: t('services.developmentWeb'), href: '/servicios/desarrollo-web' },
    { name: t('services.seoPositioning'), href: '/servicios/seo-geo' },
    { name: t('services.iaAutomation'), href: '/servicios/automatizacion-ia' },
    { name: t('services.chatbotWhatsApp'), href: '/servicios/chatbot-wp-ia' },
    { name: t('services.integrations'), href: '/servicios/integraciones' },
    { name: t('services.mobileApps'), href: '/servicios/apps-moviles' },
    { name: t('services.maintenance'), href: '/servicios/mantenimiento' },
  ];

  const company = [
    { name: t('footer.aboutUs'), href: '/nosotros' },
    { name: t('nav.projects'), href: '/proyectos' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/contacto' },
  ];

  const social = [
    { name: 'Instagram', href: 'https://instagram.com/techtecnic', icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com/techtecnic', icon: Facebook },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/techtecnic', icon: Linkedin },
    { name: 'WhatsApp', href: 'https://wa.me/573337151064', icon: MessageCircle },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href={buildLocalizedUrl('/', locale)} className="inline-block mb-6">
              <div className="relative w-48 h-12">
                <Image
                  src="/logo.png"
                  alt="Tech Tecnic"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>

            <div className="space-y-3">
              <a
                href="mailto:contacto@techtecnic.com"
                className="flex items-center gap-3 text-gray-400 hover:text-t_primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-t_primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contacto@techtecnic.com</span>
              </a>

              <a
                href="tel:+573337151064"
                className="flex items-center gap-3 text-gray-400 hover:text-t_primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-t_primary/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+57 333 715 1064</span>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={buildLocalizedUrl(item.href, locale)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={buildLocalizedUrl(item.href, locale)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">{t('footer.followUs')}</h4>
              <div className="flex gap-3">
                {social.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-t_primary/10 flex items-center justify-center text-gray-400 hover:text-t_primary transition-all hover:scale-110"
                      aria-label={item.name}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            {currentYear} Tech Tecnic. {t('footer.allRightsReserved')}.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
            <Link href={buildLocalizedUrl('/politica-de-privacidad', locale)} className="text-gray-500 hover:text-white transition-colors">{t('footer.privacyPolicy')}</Link>
            <Link href={buildLocalizedUrl('/terminos-y-condiciones', locale)} className="text-gray-500 hover:text-white transition-colors">{t('footer.termsConditions')}</Link>
            <Link href={buildLocalizedUrl('/politica-de-cookies', locale)} className="text-gray-500 hover:text-white transition-colors">{t('footer.cookiePolicy')}</Link>
            <Link href={buildLocalizedUrl('/aviso-legal', locale)} className="text-gray-500 hover:text-white transition-colors">{t('footer.legalNotice')}</Link>
            <Link href={buildLocalizedUrl('/politica-de-tratamiento-de-datos', locale)} className="text-gray-500 hover:text-white transition-colors">{t('footer.dataProcessing')}</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-t_primary to-transparent opacity-50" />
    </footer>
  );
}
