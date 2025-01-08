import { NextResponse } from 'next/server';

const locales = ['en', 'ru', 'tm'];
const defaultLocale = 'en';

export function middleware(req) {
  const pathname = req.nextUrl.pathname;

  // Skip locales already prefixed
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  const preferredLocale = matchLocale(req.headers.get('accept-language') || '', locales, defaultLocale);
  const url = req.nextUrl.clone();
  url.pathname = `/${preferredLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
