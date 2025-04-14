import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { isAdminDomain, isPublicDomain, getAdminUrl, getPublicUrl } from '@/config/domains';

export async function middleware(request: NextRequest) {
    const { pathname, host } = request.nextUrl;

    // Skip middleware for API routes and static files
    if (
        pathname.startsWith('/api/') ||
        pathname.startsWith('/_next/') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Handle admin domain
    if (isAdminDomain(request)) {
        const token = await getToken({ req: request });
        
        // Allow access to login page and API routes
        if (pathname === '/admin/login' || pathname.startsWith('/api/')) {
            return NextResponse.next();
        }

        // Redirect to login if no session
        if (!token) {
            const loginUrl = new URL('/admin/login', getAdminUrl());
            loginUrl.searchParams.set('callbackUrl', pathname);
            return NextResponse.redirect(loginUrl);
        }

        // If on admin domain but not in admin section, redirect to admin dashboard
        if (!pathname.startsWith('/admin')) {
            return NextResponse.redirect(new URL('/admin/leads', getAdminUrl()));
        }

        return NextResponse.next();
    }

    // Handle public domain
    if (isPublicDomain(request)) {
        // If trying to access admin paths on public domain, redirect to admin domain
        if (pathname.startsWith('/admin')) {
            const adminUrl = new URL(pathname, getAdminUrl());
            return NextResponse.redirect(adminUrl);
        }
        return NextResponse.next();
    }

    // Unknown domain, redirect to public domain
    return NextResponse.redirect(getPublicUrl());
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