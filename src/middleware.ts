import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
    return NextResponse.next();
  const cookiesList = cookies();
  const cookie = cookiesList.get('cookies')?.value;

  const path = request.nextUrl.pathname;
  if (cookie) {
    if (path == '/auth/login') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next({
      request,
    });
  } else if (path != '/auth/login') {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next({
    request,
  });
}

export const config = {
  matcher: [
    // '/',
    // '/auth/login/:path*',
    // '/users/:path*',
    // '/events/:path*',
    // '/reports/:path*',
    // '/users/request/:path*',
  ],
};
