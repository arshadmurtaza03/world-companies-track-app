import React, { useEffect, useMemo, useState } from 'react';
import type { Company, CurrencyCode, MetricKey } from '../../types';
import { METRICS } from '../../lib/metrics';
import { getCurrencySymbol, formatLargeNumber, formatPercent, formatPrice, getCountryFlag } from '../../lib/format';
import { getSavedCurrency } from '../../lib/currency';
import { CompanyLogo } from './CompanyLogo';
import { Sparkline } from './Sparkline';
import { WatchlistButton } from './WatchlistButton';
import { MetricTooltip } from './MetricTooltip';

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
  const [infiniteScroll, setInfiniteScroll] = useState<boolean>(false);
  const [compareTickers, setCompareTickers] = useState<string[]>([]);
  const itemsPerPage = 50;

  const toggleCompare = (ticker: string) => {
    const upper = ticker.toUpperCase();
    setCompareTickers(prev => {
      if (prev.includes(upper)) return prev.filter(t => t !== upper);
      if (prev.length >= 3) return [...prev.slice(1), upper];
      return [...prev, upper];
    });
  };

  const handleLaunchCompare = () => {
    if (compareTickers.length > 0) {
      window.location.href = `/compare?tickers=${compareTickers.join(',')}`;
    }
  };

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
    if (infiniteScroll) {
      return filteredAndSorted.slice(0, currentPage * itemsPerPage);
    }
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSorted.slice(start, start + itemsPerPage);
  }, [filteredAndSorted, currentPage, infiniteScroll]);

  const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);

  const activeMetricObj = METRICS.find(m => m.key === activeMetric) || METRICS[0];

  const exportData = (format: 'csv' | 'json') => {
    if (format === 'json') {
      const blob = new Blob([JSON.stringify(filteredAndSorted, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `world-companies-${activeMetric}.json`;
      a.click();
    } else {
      const headers = ['Rank', 'Ticker', 'Name', 'Country', 'Sector', activeMetricObj.label, 'Price', '1D Change %'];
      const rows = filteredAndSorted.map((c, idx) => [
        idx + 1,
        c.ticker,
        `"${c.name}"`,
        c.country,
        c.sector,
        c[activeMetric],
        c.price,
        c.priceChange1D
      ]);
      const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
      const encodedUri = encodeURI(csvContent);
      const a = document.createElement('a');
      a.href = encodedUri;
      a.download = `world-companies-${activeMetric}.csv`;
      a.click();
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* 1. Metric Pills Row */}
      <div className="overflow-x-auto pb-2 scrollbar-none flex items-center gap-2 border-b border-[var(--color-border)]">
        {METRICS.map(m => {
          const isActive = m.key === activeMetric;
          return (
            <button
              key={m.key}
              onClick={() => {
                setActiveMetric(m.key);
                setCurrentPage(1);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)] border border-[var(--color-border)]'
              }`}
            >
              {m.label}
            </button>
          );
        })}
      </div>

      {/* 2. Filter Controls & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-[var(--color-bg-alt)] p-3 rounded-xl border border-[var(--color-border)]">
        <div className="flex flex-wrap items-center gap-2">
          {/* Country Dropdown */}
          <select
            value={selectedCountry}
            onChange={e => { setSelectedCountry(e.target.value); setCurrentPage(1); }}
            className="px-3 py-1.5 text-xs rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="all">All Countries</option>
            {countries.map(c => (
              <option key={c} value={c}>
                {getCountryFlag(c)} {c}
              </option>
            ))}
          </select>

          {/* Sector Dropdown */}
          <select
            value={selectedSector}
            onChange={e => { setSelectedSector(e.target.value); setCurrentPage(1); }}
            className="px-3 py-1.5 text-xs rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="all">All Sectors</option>
            {sectors.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          {/* Sort Direction Toggle */}
          <button
            onClick={() => setSortDesc(!sortDesc)}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] cursor-pointer flex items-center gap-1"
          >
            <span>Sort: {sortDesc ? 'High to Low ↓' : 'Low to High ↑'}</span>
          </button>
        </div>

        {/* Search Input & Exports */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Filter table..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="px-3 py-1.5 text-xs rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-full md:w-48"
          />

          <button
            onClick={() => exportData('csv')}
            title="Download CSV"
            className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] cursor-pointer"
          >
            CSV
          </button>
          <button
            onClick={() => exportData('json')}
            title="Download JSON"
            className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] cursor-pointer"
          >
            JSON
          </button>
        </div>
      </div>

      {/* Info header */}
      <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] px-1">
        <div>
          Showing <span className="font-bold text-[var(--color-text-primary)]">{filteredAndSorted.length}</span> companies
          sorted by <span className="font-semibold text-blue-600 dark:text-blue-400">{activeMetricObj.label}</span>
        </div>
        <div>Updated: July 2026 (Snapshot)</div>
      </div>

      {/* 3. Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] shadow-xs">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--color-bg-alt)] border-b border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] font-semibold">
              <th className="py-3 px-3 w-10 text-center">Compare</th>
              <th className="py-3 px-3 w-12 text-center">#</th>
              <th className="py-3 px-3">Company</th>
              <th className="py-3 px-3 text-right">
                <span className="inline-flex items-center">
                  {activeMetricObj.label}
                  <MetricTooltip text={activeMetricObj.tooltip} />
                </span>
              </th>
              <th className="py-3 px-3 text-right">Price</th>
              <th className="py-3 px-3 text-right">24h %</th>
              <th className="py-3 px-3 text-center">7-Day Trend</th>
              <th className="py-3 px-3 text-center">Country</th>
              <th className="py-3 px-3 text-center w-10">★</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)] font-sans">
            {displayedCompanies.map((company, index) => {
              const displayRank = sortDesc ? index + 1 + (currentPage - 1) * itemsPerPage : company.rank;
              const val = company[activeMetric] as number;
              let formattedMetric = '';

              if (activeMetricObj.format === 'currency') {
                formattedMetric = formatLargeNumber(val, currency);
              } else if (activeMetricObj.format === 'percent') {
                formattedMetric = `${val}%`;
              } else if (activeMetricObj.format === 'ratio') {
                formattedMetric = `${val}x`;
              } else {
                formattedMetric = val.toLocaleString();
              }

              // Inline ad row placeholder insertion
              const isAdRow = index === 25;

              return (
                <React.Fragment key={company.ticker}>
                  {isAdRow && (
                    <tr className="bg-[var(--color-bg-alt)]/50">
                      <td colSpan={9} className="p-4 text-center">
                        <div className="border border-dashed border-[var(--color-border)] rounded-lg py-3 text-xs text-[var(--color-text-muted)] bg-[var(--color-surface)]/30">
                          Advertisement Placeholder (728×90 Responsive)
                        </div>
                      </td>
                    </tr>
                  )}
                  <tr className="hover:bg-[var(--color-surface)]/60 transition-colors group">
                    <td className="py-3.5 px-3 text-center">
                      <input
                        type="checkbox"
                        checked={compareTickers.includes(company.ticker.toUpperCase())}
                        onChange={() => toggleCompare(company.ticker)}
                        className="rounded border-[var(--color-border)] text-blue-600 focus:ring-blue-500 cursor-pointer"
                        title="Select for comparison (up to 3)"
                      />
                    </td>

                    <td className="py-3.5 px-3 text-center text-xs text-[var(--color-text-muted)] font-mono">
                      {displayRank}
                    </td>


                    <td className="py-3.5 px-3">
                      <a href={`/companies/${company.ticker.toLowerCase()}`} className="flex items-center gap-3 group-hover:underline">
                        <CompanyLogo ticker={company.ticker} domain={company.domain} name={company.name} size={32} />
                        <div>
                          <div className="font-bold text-[var(--color-text-primary)] flex items-center gap-1.5">
                            <span>{company.name}</span>
                            <span className="text-[11px] font-mono text-[var(--color-text-muted)] font-normal">
                              {company.ticker}
                            </span>
                          </div>
                          <div className="text-xs text-[var(--color-text-secondary)] font-normal">
                            {company.sector}
                          </div>
                        </div>
                      </a>
                    </td>

                    <td className="py-3.5 px-3 text-right font-bold font-mono text-[var(--color-text-primary)]">
                      {formattedMetric}
                    </td>

                    <td className="py-3.5 px-3 text-right font-mono text-xs text-[var(--color-text-secondary)]">
                      {formatPrice(company.price, currency)}
                    </td>

                    <td className="py-3.5 px-3 text-right font-mono text-xs font-semibold">
                      <span className={company.priceChange1D >= 0 ? 'text-emerald-500' : 'text-rose-500'}>
                        {formatPercent(company.priceChange1D)}
                      </span>
                    </td>

                    <td className="py-3.5 px-3 text-center">
                      <Sparkline data={company.priceChange7D} width={72} height={20} />
                    </td>

                    <td className="py-3.5 px-3 text-center text-base" title={company.country}>
                      {getCountryFlag(company.countryCode)}
                    </td>

                    <td className="py-3.5 px-3 text-center">
                      <WatchlistButton ticker={company.ticker} />
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 4. Mobile Card Stack Layout (< md breakpoint) */}
      <div className="block md:hidden space-y-3">
        {displayedCompanies.map((company, index) => {
          const displayRank = sortDesc ? index + 1 : company.rank;
          const val = company[activeMetric] as number;
          const formattedMetric = activeMetricObj.format === 'currency'
            ? formatLargeNumber(val, currency)
            : `${val}`;

          return (
            <div
              key={company.ticker}
              className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:scale-[1.01] transition-all shadow-xs flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--color-text-muted)] font-bold">#{displayRank}</span>
                  <CompanyLogo ticker={company.ticker} domain={company.domain} name={company.name} size={32} />
                  <div>
                    <a href={`/companies/${company.ticker.toLowerCase()}`} className="font-bold text-sm text-[var(--color-text-primary)] hover:underline">
                      {company.name}
                    </a>
                    <div className="text-xs text-[var(--color-text-secondary)] font-mono">{company.ticker} • {company.sector}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-lg">{getCountryFlag(company.countryCode)}</span>
                  <WatchlistButton ticker={company.ticker} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[var(--color-border-subtle)] text-xs font-mono">
                <div>
                  <div className="text-[10px] text-[var(--color-text-muted)] uppercase">{activeMetricObj.label}</div>
                  <div className="font-bold text-sm text-[var(--color-text-primary)]">{formattedMetric}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[var(--color-text-muted)] uppercase">Price & 24h</div>
                  <div className="font-bold text-sm text-[var(--color-text-primary)]">
                    {formatPrice(company.price, currency)}{' '}
                    <span className={company.priceChange1D >= 0 ? 'text-emerald-500 text-xs' : 'text-rose-500 text-xs'}>
                      ({formatPercent(company.priceChange1D)})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-xs rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              ← Previous
            </button>
            <span className="text-xs text-[var(--color-text-secondary)] font-mono">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-xs rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>

          <button
            onClick={() => setInfiniteScroll(!infiniteScroll)}
            className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium cursor-pointer"
          >
            {infiniteScroll ? 'Switch to Standard Pagination' : 'Show All / Infinite Scroll'}
          </button>
        </div>
      )}
      {/* Floating Compare Action Bar */}
      {compareTickers.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl rounded-2xl px-5 py-3 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="text-xs font-bold text-[var(--color-text-primary)]">
            Selected for Comparison: <span className="font-mono text-blue-600 dark:text-blue-400">{compareTickers.join(', ')}</span> ({compareTickers.length}/3)
          </div>
          <button
            onClick={handleLaunchCompare}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md cursor-pointer transition-transform scale-100 hover:scale-105"
          >
            Compare Selected ({compareTickers.length}) →
          </button>
          <button
            onClick={() => setCompareTickers([])}
            className="text-xs text-[var(--color-text-muted)] hover:text-rose-500 cursor-pointer"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default RankingTable;

