export { auth as middleware } from "@/lib/auth";

export const config = {
  // Protect all /admin routes except the login page and static assets
  matcher: ["/admin/((?!login|_next/static|_next/image|favicon.ico).*)"],
};
