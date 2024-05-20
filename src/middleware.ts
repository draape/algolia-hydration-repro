import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|fonts/|images/|[\\w-]+\\.\\w+).*)"],
};

export async function middleware(request: NextRequest) {
  const { csp, nonce } = generateCsp();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("content-security-policy", csp);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Also set the CSP so that it is outputted to the browser
  response.headers.set("content-security-policy", csp);

  return response;
}

export const generateCsp = () => {
  const nonce = crypto.randomUUID();

  const csp = [
    { name: "default-src", values: ["'none'"] },
    {
      name: "script-src",
      values: [
        "'self'",
        ...localhostRules(),
        `'nonce-${nonce}'`,
        "'strict-dynamic'",
      ],
    },
    {
      name: "connect-src",
      values: [
        "'self'",
        "*.api.sanity.io",
        "https://*.algolia.net",
        "https://*.algolianet.com",
        "https://*.algolia.io",
      ],
    },
    { name: "font-src", values: ["'self'", "data:"] },
    {
      name: "style-src",
      values: ["'self'", "'unsafe-inline'"],
    },
    {
      name: "img-src",
      values: ["'self'", "data:"],
    },
  ];

  const cspString = csp
    .map((directive) => `${directive.name} ${directive.values.join(" ")}`)
    .join("; ");

  return { csp: cspString, nonce };
};

const localhostRules = (): string[] =>
  process.env.NODE_ENV === "development" ? ["'unsafe-eval'"] : [];
