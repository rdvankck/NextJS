import { auth } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl, auth: session } = req;

  const protectedRoutes = ["/admin", "/dashboard"];
  const isProtected = protectedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
