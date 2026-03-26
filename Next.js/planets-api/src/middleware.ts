import { NextRequest, MiddlewareConfig } from "next/server";

export const config: MiddlewareConfig = {
  matcher: ["/planets", "/about"],
};

export default function middleware(req: NextRequest) {
  console.log("middlware executado");

  if (req.nextUrl.pathname.startsWith("/planets")) {
    console.log("Autenticar usuário")
  }
}
