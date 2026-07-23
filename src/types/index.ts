export interface Company {
  rank: number;
  ticker: string;
  name: string;
  domain: string;
  country: string;
  countryCode: string;       // ISO 3166-1 alpha-2 (e.g. US, SA, IN, CN, DE)
  sector: string;
  ipoYear: number;
  marketCap: number;
  price: number;
  allTimeHigh: number;
  priceChange1D: number;
  priceChange7D: number[];   // 7 values for sparkline
  earnings: number;
  revenue: number;
  employees: number;
  peRatio: number;
  dividendYield: number;
  operatingMargin: number;
  totalAssets: number;
  netAssets: number;
  totalLiabilities: number;
  totalDebt: number;
  cashOnHand: number;
  priceToBook: number;
  costToBorrow: number;
  lastUpdated: string;       // ISO 8601
}

export interface ETF {
  rank: number;
  ticker: string;
  name: string;
  aum: number;
  expenseRatio: number;
  category: string;
  country: string;
  price: number;
  priceChange1D: number;
}

export interface ValuationHistory {
  ticker: string;
  history: { date: string; marketCap: number; price: number }[];
}

export interface ExchangeRate {
  base: string;
  rates: Record<string, number>;
  fetchedAt: string;
}

export interface WatchlistEntry {
  ticker: string;
  addedAt: string;
}

export type MetricKey = keyof Pick<Company,
  'marketCap' | 'earnings' | 'revenue' | 'employees' | 'peRatio' |
  'dividendYield' | 'operatingMargin' | 'totalAssets' | 'netAssets' |
  'totalLiabilities' | 'totalDebt' | 'cashOnHand' | 'priceToBook' | 'costToBorrow'
>;

export type CurrencyCode = 'USD' | 'EUR' | 'INR' | 'GBP' | 'JPY' | 'AED';

export interface MetricDefinition {
  key: MetricKey;
  label: string;
  tooltip: string;
  format: 'currency' | 'number' | 'percent' | 'ratio';
}

export interface FilterOptions {
  metric: MetricKey;
  country: string;
  sector: string;
  searchQuery: string;
  sortDirection: 'asc' | 'desc';
}
