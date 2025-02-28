import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { authRoutes, DEFAULT_LOGIN_REDIRECT_URL, protectedRoutes, publicRoutes } from './routes'
import { createClient } from '@/utils/supabase/server'
import { redirectUrl } from './utils/middleware'

export async function middleware(request: NextRequest) {
  // Update session based on cookies and Supabase auth
  let response = await updateSession(request)
  const { pathname } = request.nextUrl
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const isProtectedRoute = protectedRoutes.includes(pathname)
  const isPublicRoute = publicRoutes.includes(pathname)
  const isAuthRoute = authRoutes.includes(pathname)

  const lynk = pathname.split('/').pop()

  if (isPublicRoute) {
    return response
  }

  if (pathname.startsWith('/auth')) {
    return response
  }

  if (isAuthRoute && user) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT_URL, request.url))
  }

  if (!user && isProtectedRoute) {
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  if (!isPublicRoute && !isProtectedRoute && !isAuthRoute) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const getDataApi = await redirectUrl(lynk!)

    if (getDataApi.redirect404) {
      console.log('Error - Redirect 404: ', lynk)
    }

    if (getDataApi.error) {
      return NextResponse.json({ error: getDataApi.message }, { status: 500 })
    }

    if (getDataApi.url) {
      return NextResponse.redirect(new URL(getDataApi.url).toString())
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
