// src/middleware.ts

export const onRequest = async ({ request }, next) => {
  try {
    const originalUrl = new URL(request.url);

    // Only clean the URL for the homepage
    if (originalUrl.pathname === '/' || originalUrl.pathname === '/index.html') {
      const baseUrl = import.meta.env.BASE_URL || 'https://mattbirch.co';
      const cleanUrl = new URL(baseUrl);
      cleanUrl.pathname = '/';
      cleanUrl.search = originalUrl.search;
      const cleanHeaders = new Headers(request.headers);
      cleanHeaders.set('Host', cleanUrl.hostname);
      cleanHeaders.set('X-Forwarded-Proto', 'https');
      cleanHeaders.set('X-Forwarded-Port', '443');

      const cleanedRequest = new Request(cleanUrl.toString(), {
        method: request.method,
        headers: cleanHeaders,
        body: request.body,
      });

      return next(cleanedRequest);
    }

    // For all other routes, pass the request unchanged
    return next();
  } catch (error) {
    console.error('Middleware - Error:', error);
    return next(request);
  }
};
