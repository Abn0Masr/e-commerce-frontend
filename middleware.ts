import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import moment from "moment";

export const config = {
  matcher: [
    "/(ar|en)/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

const intlMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
});

export async function middleware(req: NextRequest) {
  const response = intlMiddleware(req);

  const pathname = req.nextUrl.pathname;

  // Set registration state based on the presence of 'st' or 'ct' cookies
  const st = req.cookies.has("st");
  const ct = req.cookies.has("ct");
  response.cookies.set("reg_state", st || ct ? "registered" : "unregistered", {
    httpOnly: true,
    path: "/",
    expires: moment().add(1, "year").toDate(),
  });

  if (!req.cookies.has("theme")) {
    response.cookies.set("theme", "light", {
      path: "/",
      expires: moment().add(1, "year").toDate(),
    });
  }

  // Check and set the 'cart' cookie if not already set
  if (!req.cookies.has("cart")) {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    const arr: object[] = [];
    const buffer = Buffer.from(JSON.stringify(arr), "utf-8");
    const base64 = buffer.toString("base64");
    response.cookies.set("cart", base64, {
      expires: moment().add(1, "year").toDate(),
    });
  }

  // Redirect logic for authenticated users
  if (st || ct) {
    if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return response;
}
