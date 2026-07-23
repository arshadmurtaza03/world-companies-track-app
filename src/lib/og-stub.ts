/**
 * Dynamic OG Image Generator Stub (v2 Roadmap)
 * 
 * Note: Dynamic per-company OG image rendering using Satori + @resvg/resvg-wasm
 * is deferred to v2. For production launch, a lightweight static OG image 
 * (/og-default.svg) is served to minimize Cloudflare Worker bundle footprint 
 * and avoid WASM compilation overhead on initial static deployment.
 */

export interface OgImageParams {
  title: string;
  subtitle?: string;
  ticker?: string;
  marketCap?: string;
}

export function generateDynamicOgUrl(params: OgImageParams): string {
  // Returns static fallback OG image until Satori worker route is deployed
  const searchParams = new URLSearchParams();
  searchParams.set('title', params.title);
  if (params.ticker) searchParams.set('ticker', params.ticker);
  
  // TODO: v2 endpoint - /api/og?${searchParams.toString()}
  return '/og-default.svg';
}
