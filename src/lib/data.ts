import snapshotData from '../data/snapshot.json';
import etfData from '../data/etfs.json';
import historyData from '../data/valuation-history.json';
import type { Company, ETF, MetricKey, ValuationHistory } from '../types';

export function getAllCompanies(): Company[] {
  return snapshotData as Company[];
}

export function getCompanyByTicker(ticker: string): Company | undefined {
  if (!ticker) return undefined;
  const upper = ticker.toUpperCase();
  return (snapshotData as Company[]).find(c => c.ticker.toUpperCase() === upper);
}

export function getCompaniesByCountry(countryCode: string): Company[] {
  if (!countryCode || countryCode === 'all') return snapshotData as Company[];
  return (snapshotData as Company[]).filter(c => c.countryCode.toUpperCase() === countryCode.toUpperCase());
}

export function getCompaniesBySector(sector: string): Company[] {
  if (!sector || sector === 'all') return snapshotData as Company[];
  return (snapshotData as Company[]).filter(c => c.sector.toLowerCase() === sector.toLowerCase());
}

export function getTopMovers(direction: 'gainers' | 'losers', limit: number = 5): Company[] {
  const sorted = [...(snapshotData as Company[])].sort((a, b) => {
    return direction === 'gainers'
      ? b.priceChange1D - a.priceChange1D
      : a.priceChange1D - b.priceChange1D;
  });
  return sorted.slice(0, limit);
}

export function getAllETFs(): ETF[] {
  return etfData as ETF[];
}

export function getValuationHistory(ticker: string): ValuationHistory | undefined {
  const upper = ticker.toUpperCase();
  return (historyData as ValuationHistory[]).find(h => h.ticker.toUpperCase() === upper);
}

export function getUniqueCountries(): { code: string; name: string; count: number; totalCap: number }[] {
  const map = new Map<string, { code: string; name: string; count: number; totalCap: number }>();
  for (const c of snapshotData as Company[]) {
    const existing = map.get(c.countryCode);
    if (existing) {
      existing.count += 1;
      existing.totalCap += c.marketCap;
    } else {
      map.set(c.countryCode, {
        code: c.countryCode,
        name: c.country,
        count: 1,
        totalCap: c.marketCap
      });
    }
  }
  return Array.from(map.values()).sort((a, b) => b.totalCap - a.totalCap);
}

export function getUniqueSectors(): { name: string; count: number; totalCap: number }[] {
  const map = new Map<string, { name: string; count: number; totalCap: number }>();
  for (const c of snapshotData as Company[]) {
    const existing = map.get(c.sector);
    if (existing) {
      existing.count += 1;
      existing.totalCap += c.marketCap;
    } else {
      map.set(c.sector, {
        name: c.sector,
        count: 1,
        totalCap: c.marketCap
      });
    }
  }
  return Array.from(map.values()).sort((a, b) => b.totalCap - a.totalCap);
}

export function getSimilarCompanies(company: Company, limit: number = 3): Company[] {
  const sameSector = (snapshotData as Company[]).filter(
    c => c.sector === company.sector && c.ticker !== company.ticker
  );
  sameSector.sort((a, b) => Math.abs(a.marketCap - company.marketCap) - Math.abs(b.marketCap - company.marketCap));
  return sameSector.slice(0, limit);
}
