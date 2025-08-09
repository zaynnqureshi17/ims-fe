import { NextRequest, NextResponse } from "next/server";

import { IsCurrentURLMatchesListOfURLs } from "./utils/urls/IsCurrentURLMatchesListOfURLs";
import { AuthRoutes, AuthUrls } from "./utils/urls/urls";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (IsCurrentURLMatchesListOfURLs(request.url, AuthRoutes)) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    // For any protected page: if no token, redirect to sign-in page
    if (!token) {
      return NextResponse.redirect(new URL(AuthUrls.signIn, request.url));
    }
  }

  // Allow request to continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
