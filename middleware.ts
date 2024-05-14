import { NextResponse , NextRequest} from "next/server";
// import type { NextRequest } from "next/server";
import { cookies, headers } from "next/headers";
// import jwt from "jsonwebtoken"
// import { token } from "./actions/credentials";
import {
  authRoute,
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT,
  authPrefix,
  defaultAuthRoute,
} from "./routes";
// This function can be marked `async` if using `await` inside
import { AuthUser } from "@/lib/current-user";
import { unknown } from "zod";
export function middleware(request: NextRequest) {
  const { nextUrl } = request
  const response = NextResponse.next()
  const isApiAuthRoute = nextUrl.pathname.startsWith(authPrefix) 
  const isLoggedIn = cookies().get("token")?.valueOf()
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute =  authRoute.includes(nextUrl.pathname);
  const isErrorRoute =  nextUrl.href.includes("error")
  // const isPrivateRoute = nextUrl.pathname.startsWith(PRIVATEROUTES)
  if (isApiAuthRoute) {
    if (isLoggedIn && isApiAuthRoute) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    
    if (isPublicRoute) {
      return null
    }
    // return null;

    if (!isLoggedIn && !isPublicRoute) { 
      return Response.redirect(new URL("/", nextUrl))
    }


  
  }
  if (isErrorRoute) {
    return Response.redirect(new URL("/error", nextUrl))
  }
    if (!isLoggedIn && DEFAULT_LOGIN_REDIRECT) {
      return Response.redirect(new URL(defaultAuthRoute, nextUrl))
    }
    

    
    
    
  return null

  //   NextResponse.redirect(new URL(defaultAuthRoute, request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// const isLoggedIn = false
// const isAuthRoute = authRoute.includes(nextUrl.pathname)
// const isPublicRoute = nextUrl.pathname.startsWith(publicRoutes)
// if (isAuthRoute) {
//     if (isLoggedIn) {
//         return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
//     }
//     if (!isLoggedIn) {
//         return Response.redirect(new URL("/login", nextUrl))
//     }
// }
