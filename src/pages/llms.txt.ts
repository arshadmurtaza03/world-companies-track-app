import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# World Companies by Market Cap (worldcompaniesmarketcap.com)

> Real-time global market capitalization rankings, valuation metrics, sector treemaps, and ETF data.

## Core Directories & Rankings
- /: Homepage featuring market pulse ticker, top 10 companies, gainers/losers preview, and quick search.
- /ranking/global: Global market cap ranking table supporting 16 metrics, multi-currency switching, and custom filters.
- /movers: Top 50 daily stock price gainers and top 50 losers categorized by percentage movement and sector.
- /compare: Side-by-side financial comparison matrix evaluating up to 3 companies across all 16 metrics.
- /watchlist: Personal local-storage stock watchlist tracking saved equities without login or backend tracking.
- /etfs: Top exchange-traded funds ranked by Assets Under Management (AUM), expense ratios, and asset class.

## Geographic & Industry Directories
- /countries: Directory of 22 global countries ranked by total market capitalization and listed corporate count.
- /countries/[countrySlug]: Detailed ranking table for companies headquartered in specific countries (e.g. /countries/india, /countries/switzerland).
- /sectors: Industry sector directory featuring zero-dependency squarified treemap visualizer and 11 sector breakdowns.
- /sectors/[sectorSlug]: Industry sector ranking table filtering companies by GICS sector (e.g. /sectors/technology, /sectors/energy).

## Company Profiles
- /companies/[ticker]: Full financial profile for individual companies (e.g. /companies/aapl, /companies/nvda) featuring 16 financial metrics, 7-day sparkline charts, valuation ratios, and corporate metadata.

## Information & Disclosures
- /methodology: Complete methodology for market cap calculations, FX conversions, valuation ratios, and sector standards.
- /about: Platform mission, technology stack architecture, and data sources overview.
- /privacy: Privacy policy detailing local storage usage, cookie policies, and advertising disclosures.
- /terms: Terms of service and non-financial advice disclaimers.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
