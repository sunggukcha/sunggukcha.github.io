import type { APIRoute } from 'astro';

const routes = ['/', '/cv/', '/talks/', '/beyond/'];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://sunggukcha.github.io');
  const urls = routes.map((route) => `  <url><loc>${new URL(route, base).href}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
