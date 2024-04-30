/**
 * ALL PUBLIC ROUTES THAT ARE ACCESSIBLE
 * THESE ROUTES DO NOT REQUIRE AUTHENTICATION
 * @type {string}
 */

export const publicRoutes = [
    "/",
    "/api/auth/login",
    "/api/auth/signup"
  ];
  

/**
 * ALL PUBLIC ROUTES THAT ARE ACCESSIBLE
 * THESE ROUTES DO NOT REQUIRE AUTHENTICATION
 * @type {Array}
 */
export const authRoute = [
    "/api/auth/login",
    "/api/auth/signup"
]

export const defaultAuthRoute = "/api/auth/login"

export const authPrefix = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = "/dashboard"