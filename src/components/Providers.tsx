'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale="es">
      {children}
    </NextIntlClientProvider>
  );
}