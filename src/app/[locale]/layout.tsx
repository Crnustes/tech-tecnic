import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from "next/font/google";
import Script from "next/script";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { locales, type Locale } from '@/i18n';
import { getGlobalSchema } from '@/utils/schema';

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  const isValidLocale = locales.includes(locale as Locale);
  if (!isValidLocale) {
    notFound();
  }

  // Load translations
  const messages = await getMessages();

  // Lang attribute based on locale
  const langAttr = locale === 'es' ? 'es' : 'en';
  const schemaData = getGlobalSchema(langAttr);

  return (
    <html lang={langAttr} suppressHydrationWarning>
      {/* Google Tag Manager - Head */}
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NG86LWF');`}
        </Script>
        <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(schemaData)}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F3PPTK46GT"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-F3PPTK46GT');`}
        </Script>
      </head>
      <body 
        className={`${inter.variable} font-sans bg-t_dark text-white antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) - Body */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NG86LWF" 
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>

        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <CookieBanner />
          <Footer />
          <FloatingWhatsApp />
          <LanguageSwitcher />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
