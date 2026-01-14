"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_COOKIE = "tt_cookie_consent";
const ANALYTICS_COOKIE = "tt_cookie_analytics";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

export default function GTMConsent() {
  const [canLoadGTM, setCanLoadGTM] = useState(false);

  useEffect(() => {
    const consent = getCookie(CONSENT_COOKIE);
    const analytics = getCookie(ANALYTICS_COOKIE);
    const allow = consent === "accepted" && analytics !== "denied"; // default allow unless explicitly denied
    setCanLoadGTM(allow);
  }, []);

  // Also listen to changes if user accepts during session
  useEffect(() => {
    const handler = () => {
      const consent = getCookie(CONSENT_COOKIE);
      const analytics = getCookie(ANALYTICS_COOKIE);
      const allow = consent === "accepted" && analytics !== "denied";
      setCanLoadGTM(allow);
    };
    // Observe localStorage changes as a simple cross-tab signal
    const listener = () => handler();
    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  }, []);

  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  if (!GTM_ID || !canLoadGTM) return null;

  return (
    <>
      {/* GTM script injected only with consent */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      {/* Optional noscript iframe */}
      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
      </noscript>
    </>
  );
}
