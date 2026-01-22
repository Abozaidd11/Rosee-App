import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const publicPages = ["/", "/login"];
const privatePage = ["/product"];

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const { locales } = routing;

  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );

  const privatePathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${privatePage
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );

  const isPublicPage = publicPathnameRegex.test(request.nextUrl.pathname);
  const isPrivatePage = privatePathnameRegex.test(request.nextUrl.pathname);

  if (isPublicPage && token) {
    return NextResponse.redirect(new URL(`product`, request.nextUrl.origin));
  }

  // isPrivatePage
  if (isPrivatePage && !token) {
    return NextResponse.redirect(new URL(`login`, request.nextUrl.origin));
  }

  // isPublicPage
  if (isPublicPage || privatePage) {
    const response = createMiddleware(routing)(request);

    return response;
  }

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
    "/((?!api|_next/static|_next/image|favicon.ico|trpc|_next|_vercel|.*\\..*).*)",
  ],
};
