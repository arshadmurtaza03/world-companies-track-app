import type { Company } from '../types';

export function fuzzySearchCompanies(companies: Company[], query: string): Company[] {
  if (!query || query.trim() === '') return companies;
  const clean = query.trim().toLowerCase();

  return companies.filter(c => {
    const nameMatch = c.name.toLowerCase().includes(clean);
    const tickerMatch = c.ticker.toLowerCase().includes(clean);
    const countryMatch = c.country.toLowerCase().includes(clean);
    const sectorMatch = c.sector.toLowerCase().includes(clean);
    return nameMatch || tickerMatch || countryMatch || sectorMatch;
  });
}
