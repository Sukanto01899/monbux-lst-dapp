    // middleware.ts
    import { NextResponse } from 'next/server';
    import type { NextRequest } from 'next/server';

    export function middleware(req: NextRequest) {
      const hostname = req.headers.get('host');

      if (hostname?.startsWith('stake.')) {
        return NextResponse.rewrite(new URL(`/stake${req.nextUrl.pathname}`, req.url));
      }
      if (hostname?.startsWith('swap.')) {
        return NextResponse.rewrite(new URL(`/swap${req.nextUrl.pathname}`, req.url));
      }
      if (hostname?.startsWith('api.')) {
        return NextResponse.rewrite(new URL(`/api${req.nextUrl.pathname}`, req.url));
      }
      // Add more conditions for other subdomains
      return NextResponse.next();
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