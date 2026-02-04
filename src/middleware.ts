import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const authPages = ["/login", "/register"];
const publicPages = ["/"];

const handleI18nRouting = createMiddleware(routing);

const authMiddleware = withAuth(
  function onSuccess(req) {
    return handleI18nRouting(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/login",
    },
  }
);

export default function middleware(req: NextRequest) {
  const { locales } = routing;
  const pathname = req.nextUrl.pathname;

  const buildRegex = (pages: string[]) =>
    RegExp(
      `^(/(${locales.join("|")}))?(${pages
        .flatMap((p) => (p === "/" ? ["", "/"] : p))
        .join("|")})/?$`,
      "i"
    );

  const isPublicPage = buildRegex(publicPages).test(pathname);
  const isAuthPage = buildRegex(authPages).test(pathname);
  console.log({ isPublicPage, isAuthPage });
  const token =
    req.cookies.get("next-auth.session-token")?.value ||
    req.cookies.get("__Secure-next-auth.session-token")?.value;

  if (token && isAuthPage) {
    const url = req.nextUrl.clone();
    url.pathname = `/product`;
    return NextResponse.redirect(url);
  }

  if (isPublicPage) {
    return handleI18nRouting(req);
  }

  if (isAuthPage) {
    return handleI18nRouting(req);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (authMiddleware as any)(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
