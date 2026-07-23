import React, { useEffect, useState } from 'react';
import type { Company, CurrencyCode } from '../../types';
import { METRICS } from '../../lib/metrics';
import { formatLargeNumber, formatPercent, getCountryFlag } from '../../lib/format';
import { getSavedCurrency } from '../../lib/currency';
import { CompanyLogo } from './CompanyLogo';

interface Props {
  allCompanies: Company[];
}

export const ComparePage: React.FC<Props> = ({ allCompanies }) => {
  const [selectedTickers, setSelectedTickers] = useState<string[]>(['AAPL', 'MSFT', 'NVDA']);
  const currency: CurrencyCode = getSavedCurrency();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const queryTickers = params.get('tickers');
      if (queryTickers) {
        const parsed = queryTickers.split(',').map(t => t.trim().toUpperCase()).slice(0, 3);
        if (parsed.length > 0) setSelectedTickers(parsed);
      }
    }
  }, []);

  const selectedCompanies = selectedTickers
    .map(t => allCompanies.find(c => c.ticker.toUpperCase() === t))
    .filter((c): c is Company => c !== undefined);

  const handleSelectChange = (index: number, newTicker: string) => {
    const updated = [...selectedTickers];
    updated[index] = newTicker;
    setSelectedTickers(updated);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('tickers', updated.join(','));
      window.history.replaceState({}, '', url.toString());
    }
  };

  return (
    <div className="space-y-8">
      {/* Company Selector Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[0, 1, 2].map(idx => {
          const company = selectedCompanies[idx];
          return (
            <div key={idx} className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] space-y-3">
              <div className="text-xs text-[var(--color-text-muted)] font-mono font-semibold">
                Company {idx + 1}
              </div>

              <select
                value={company?.ticker || ''}
                onChange={e => handleSelectChange(idx, e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                {allCompanies.map(c => (
                  <option key={c.ticker} value={c.ticker}>
                    {c.name} ({c.ticker})
                  </option>
                ))}
              </select>

              {company && (
                <div className="flex items-center gap-3 pt-2">
                  <CompanyLogo ticker={company.ticker} domain={company.domain} name={company.name} size={32} />
                  <div>
                    <div className="font-bold text-sm text-[var(--color-text-primary)]">{company.name}</div>
                    <div className="text-xs text-[var(--color-text-muted)] font-mono">
                      {getCountryFlag(company.countryCode)} {company.country} • {company.sector}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Side-by-side Metric Comparison Table */}
      <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] shadow-xs">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--color-bg-alt)] border-b border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] font-semibold">
              <th className="py-3 px-4 w-1/4">Financial Metric</th>
              {selectedCompanies.map(c => (
                <th key={c.ticker} className="py-3 px-4 text-center font-mono font-bold text-blue-600 dark:text-blue-400">
                  {c.ticker}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)] font-sans">
            {METRICS.map(m => {
              // Find max value among selected to highlight highest
              const values = selectedCompanies.map(c => (c[m.key] as number) ?? 0);
              const maxVal = Math.max(...values);

              return (
                <tr key={m.key} className="hover:bg-[var(--color-surface)]/60 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-xs text-[var(--color-text-secondary)]">
                    {m.label}
                  </td>
                  {selectedCompanies.map((c, i) => {
                    const val = (c[m.key] as number) ?? 0;
                    const isMax = val === maxVal && values.filter(v => v === maxVal).length === 1;

                    let formatted = '';
                    if (m.format === 'currency') formatted = formatLargeNumber(val, currency);
                    else if (m.format === 'percent') formatted = `${val}%`;
                    else if (m.format === 'ratio') formatted = `${val}x`;
                    else formatted = val.toLocaleString();

                    return (
                      <td key={c.ticker} className="py-3.5 px-4 text-center font-mono font-bold">
                        <span className={`px-2 py-1 rounded ${isMax ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' : 'text-[var(--color-text-primary)]'}`}>
                          {formatted} {isMax ? '🏆' : ''}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparePage;
