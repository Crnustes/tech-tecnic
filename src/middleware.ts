// Middleware para optimización de rendimiento
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Agregar headers de rendimiento
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  
  // Early hints para recursos críticos
  if (request.nextUrl.pathname === '/') {
    response.headers.set(
      'Link',
      '</fonts/inter.woff2>; rel=preload; as=font; type=font/woff2; crossorigin=anonymous'
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
