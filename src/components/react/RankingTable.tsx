import React, { useEffect, useMemo, useState } from 'react';
import type { Company, CurrencyCode, MetricKey } from '../../types';
import { METRICS } from '../../lib/metrics';
import { getCurrencySymbol, formatLargeNumber, formatPercent, formatPrice, getCountryFlag } from '../../lib/format';
import { getSavedCurrency } from '../../lib/currency';
import { CompanyLogo } from './CompanyLogo';
import { Sparkline } from './Sparkline';
import { WatchlistButton } from './WatchlistButton';

interface Props {
  companies: Company[];
  initialCountry?: string;
  initialSector?: string;
}

export const RankingTable: React.FC<Props> = ({
  companies,
  initialCountry = 'all',
  initialSector = 'all'
}) => {
  const [activeMetric, setActiveMetric] = useState<MetricKey>('marketCap');
  const [selectedCountry, setSelectedCountry] = useState<string>(initialCountry);
  const [selectedSector, setSelectedSector] = useState<string>(initialSector);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortDesc, setSortDesc] = useState<boolean>(true);
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 50;

  useEffect(() => {
    setCurrency(getSavedCurrency());
    const handleCurrency = (e: CustomEvent<CurrencyCode>) => setCurrency(e.detail);
    window.addEventListener('wcm-currency-change', handleCurrency as EventListener);
    return () => window.removeEventListener('wcm-currency-change', handleCurrency as EventListener);
  }, []);

  const countries = useMemo(() => {
    const set = new Set<string>();
    companies.forEach(c => set.add(c.countryCode));
    return Array.from(set).sort();
  }, [companies]);

  const sectors = useMemo(() => {
    const set = new Set<string>();
    companies.forEach(c => set.add(c.sector));
    return Array.from(set).sort();
  }, [companies]);

  const filteredAndSorted = useMemo(() => {
    let result = [...companies];

    if (selectedCountry !== 'all') {
      result = result.filter(c => c.countryCode.toUpperCase() === selectedCountry.toUpperCase());
    }

    if (selectedSector !== 'all') {
      result = result.filter(c => c.sector.toLowerCase() === selectedSector.toLowerCase());
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        c => c.name.toLowerCase().includes(q) || c.ticker.toLowerCase().includes(q)
      );
    }

    result.sort((a, b) => {
      const valA = (a[activeMetric] as number) ?? 0;
      const valB = (b[activeMetric] as number) ?? 0;
      return sortDesc ? valB - valA : valA - valB;
    });

    return result;
  }, [companies, selectedCountry, selectedSector, searchQuery, activeMetric, sortDesc]);

  const displayedCompanies = useMemo(() => {
    return filteredAndSorted.slice(0, currentPage * itemsPerPage);
  }, [filteredAndSorted, currentPage]);

  const handleMetricChange = (metric: MetricKey) => {
    setActiveMetric(metric);
    setSortDesc(true);
  };

  const activeMetricObj = METRICS.find(m => m.key === activeMetric) || METRICS[0];

  return (
    <div className="space-y-4 font-sans">
      {/* Competitor-Style "Rank by" Oval Filter Pills */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-text-secondary)]">
          <span>Rank by</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {METRICS.slice(0, 8).map(m => {
            const isActive = activeMetric === m.key;
            return (
              <button
                key={m.key}
                onClick={() => handleMetricChange(m.key as MetricKey)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                  isActive
                    ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold shadow-xs'
                    : 'border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {m.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary Country & Sector Filters */}
      <div className="flex flex-wrap items-center gap-3 py-2 text-xs text-[var(--color-text-muted)] border-y border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <span>Country:</span>
          <select
            value={selectedCountry}
            onChange={e => setSelectedCountry(e.target.value)}
            className="px-2 py-1 rounded bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none"
          >
            <option value="all">All Countries ({countries.length})</option>
            {countries.map(c => (
              <option key={c} value={c}>{getCountryFlag(c)} {c}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span>Sector:</span>
          <select
            value={selectedSector}
            onChange={e => setSelectedSector(e.target.value)}
            className="px-2 py-1 rounded bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none"
          >
            <option value="all">All Sectors ({sectors.length})</option>
            {sectors.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="ml-auto text-xs text-[var(--color-text-muted)]">
          Showing <span className="font-mono font-bold text-[var(--color-text-primary)]">{displayedCompanies.length}</span> of <span className="font-mono">{filteredAndSorted.length}</span>
        </div>
      </div>

      {/* Competitor Hero Ranking Table: Star | Rank | Name | Market Cap | Price | Today | Price (30 days) | Country */}
      <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] shadow-xs">
        <table className="w-full text-left border-collapse text-xs md:text-sm">
          <thead>
            <tr className="bg-[var(--color-bg-alt)] border-b border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] font-semibold select-none">
              <th className="py-2.5 px-3 w-10 text-center">☆</th>
              <th
                onClick={() => setSortDesc(!sortDesc)}
                className="py-2.5 px-3 w-12 text-center cursor-pointer hover:text-[var(--color-text-primary)]"
              >
                Rank {sortDesc ? '↓' : '↑'}
              </th>
              <th className="py-2.5 px-3">Name</th>
              <th
                onClick={() => setSortDesc(!sortDesc)}
                className="py-2.5 px-3 text-right cursor-pointer hover:text-[var(--color-text-primary)]"
              >
                {activeMetricObj.label} {sortDesc ? '↓' : '↑'}
              </th>
              <th className="py-2.5 px-3 text-right">Price</th>
              <th className="py-2.5 px-3 text-right">Today</th>
              <th className="py-2.5 px-3 text-center w-32">Price (30 days)</th>
              <th className="py-2.5 px-3 text-center">Country</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)] font-sans">
            {displayedCompanies.map((company, index) => {
              const displayRank = index + 1;
              const formattedPrice = formatPrice(company.price, currency);

              let formattedMetric = '';
              const metricVal = company[activeMetric] as number;
              if (activeMetricObj.format === 'currency') {
                formattedMetric = formatLargeNumber(metricVal, currency);
              } else if (activeMetricObj.format === 'percent') {
                formattedMetric = `${metricVal}%`;
              } else if (activeMetricObj.format === 'ratio') {
                formattedMetric = `${metricVal}x`;
              } else {
                formattedMetric = metricVal.toLocaleString();
              }

              const isPositiveDay = company.priceChange1D >= 0;

              return (
                <tr key={company.ticker} className="hover:bg-[var(--color-surface)]/60 transition-colors group">
                  {/* Star Watchlist Column */}
                  <td className="py-2.5 px-3 text-center">
                    <WatchlistButton ticker={company.ticker} />
                  </td>

                  {/* Rank Column */}
                  <td className="py-2.5 px-3 text-center font-mono text-xs text-[var(--color-text-muted)] font-medium">
                    {displayRank}
                  </td>

                  {/* Name Column: Logo + Name + Ticker */}
                  <td className="py-2.5 px-3">
                    <a href={`/companies/${company.ticker.toLowerCase()}`} className="flex items-center gap-3 group-hover:underline">
                      <CompanyLogo ticker={company.ticker} domain={company.domain} name={company.name} size={32} />
                      <div>
                        <div className="font-bold text-[var(--color-text-primary)] leading-snug">{company.name}</div>
                        <div className="text-[11px] text-[var(--color-text-muted)] font-mono uppercase">{company.ticker}</div>
                      </div>
                    </a>
                  </td>

                  {/* Active Metric / Market Cap Column */}
                  <td className="py-2.5 px-3 text-right font-mono font-bold text-sm text-[var(--color-text-primary)]">
                    {formattedMetric}
                  </td>

                  {/* Price Column */}
                  <td className="py-2.5 px-3 text-right font-mono text-xs text-[var(--color-text-secondary)]">
                    {formattedPrice}
                  </td>

                  {/* Today Column: Direction Triangle + Percent */}
                  <td className="py-2.5 px-3 text-right font-mono text-xs font-bold">
                    <span className={isPositiveDay ? 'text-emerald-500' : 'text-rose-500'}>
                      {isPositiveDay ? '▲ ' : '▼ '}
                      {formatPercent(company.priceChange1D)}
                    </span>
                  </td>

                  {/* Price (30 days) Sparkline Column */}
                  <td className="py-2.5 px-3 text-center align-middle">
                    <div className="w-28 mx-auto">
                      <Sparkline data={company.priceChange7D} width={115} height={26} />
                    </div>
                  </td>


                  {/* Country Column: Flag + Abbreviation */}
                  <td className="py-2.5 px-3 text-center font-medium text-xs text-[var(--color-text-secondary)]">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="text-base">{getCountryFlag(company.countryCode)}</span>
                      <span>{company.countryCode === 'US' ? 'USA' : company.country}</span>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Load More Pagination */}
      {displayedCompanies.length < filteredAndSorted.length && (
        <div className="text-center pt-4">
          <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-6 py-2.5 rounded-xl bg-[var(--color-surface)] hover:bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-xs font-bold text-[var(--color-text-primary)] shadow-xs transition-all cursor-pointer"
          >
            Load More Companies ({filteredAndSorted.length - displayedCompanies.length} remaining) ↓
          </button>
        </div>
      )}
    </div>
  );
};

export default RankingTable;
