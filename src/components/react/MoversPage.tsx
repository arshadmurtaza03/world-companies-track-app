import React, { useMemo, useState } from 'react';
import type { Company, CurrencyCode } from '../../types';
import { formatPercent, formatPrice, getCountryFlag } from '../../lib/format';
import { getSavedCurrency } from '../../lib/currency';
import { CompanyLogo } from './CompanyLogo';

interface Props {
  companies: Company[];
}

export const MoversPage: React.FC<Props> = ({ companies }) => {
  const [activeTab, setActiveTab] = useState<'gainers' | 'losers'>('gainers');
  const [selectedSector, setSelectedSector] = useState<string>('all');

  const currency: CurrencyCode = getSavedCurrency();

  const sectors = useMemo(() => {
    const set = new Set<string>();
    companies.forEach(c => set.add(c.sector));
    return Array.from(set).sort();
  }, [companies]);

  const gainers = useMemo(() => {
    let list = [...companies].sort((a, b) => b.priceChange1D - a.priceChange1D);
    if (selectedSector !== 'all') {
      list = list.filter(c => c.sector.toLowerCase() === selectedSector.toLowerCase());
    }
    return list.slice(0, 50);
  }, [companies, selectedSector]);

  const losers = useMemo(() => {
    let list = [...companies].sort((a, b) => a.priceChange1D - b.priceChange1D);
    if (selectedSector !== 'all') {
      list = list.filter(c => c.sector.toLowerCase() === selectedSector.toLowerCase());
    }
    return list.slice(0, 50);
  }, [companies, selectedSector]);

  const currentList = activeTab === 'gainers' ? gainers : losers;

  return (
    <div className="space-y-6">
      {/* Controls: Gainers / Losers Tabs + Sector Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('gainers')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'gainers'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border)]'
            }`}
          >
            ▲ Top 50 Gainers ({gainers.length})
          </button>
          <button
            onClick={() => setActiveTab('losers')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'losers'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border)]'
            }`}
          >
            ▼ Top 50 Losers ({losers.length})
          </button>
        </div>

        <select
          value={selectedSector}
          onChange={e => setSelectedSector(e.target.value)}
          className="px-3 py-1.5 text-xs rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        >
          <option value="all">All Sectors</option>
          {sectors.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] shadow-xs">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--color-bg-alt)] border-b border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] font-semibold">
              <th className="py-3 px-3 w-12 text-center">Rank</th>
              <th className="py-3 px-3">Company</th>
              <th className="py-3 px-3 text-right">Price</th>
              <th className="py-3 px-3 text-right">24h Change</th>
              <th className="py-3 px-3 text-right">Market Cap</th>
              <th className="py-3 px-3 text-center">Country</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)] font-sans">
            {currentList.map((c, idx) => (
              <tr key={c.ticker} className="hover:bg-[var(--color-surface)]/60 transition-colors">
                <td className="py-3.5 px-3 text-center font-mono text-xs text-[var(--color-text-muted)]">#{idx + 1}</td>
                <td className="py-3.5 px-3">
                  <a href={`/companies/${c.ticker.toLowerCase()}`} className="flex items-center gap-3 hover:underline">
                    <CompanyLogo ticker={c.ticker} domain={c.domain} name={c.name} size={32} />
                    <div>
                      <div className="font-bold text-[var(--color-text-primary)]">{c.name}</div>
                      <div className="text-xs text-[var(--color-text-muted)] font-mono">{c.ticker} • {c.sector}</div>
                    </div>
                  </a>
                </td>
                <td className="py-3.5 px-3 text-right font-mono font-bold text-[var(--color-text-primary)]">
                  {formatPrice(c.price, currency)}
                </td>
                <td className="py-3.5 px-3 text-right font-mono text-xs font-semibold">
                  <span className={c.priceChange1D >= 0 ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}>
                    {formatPercent(c.priceChange1D)}
                  </span>
                </td>
                <td className="py-3.5 px-3 text-right font-mono text-xs text-blue-600 dark:text-blue-400 font-bold">
                  ${(c.marketCap / 1e9).toFixed(1)}B
                </td>
                <td className="py-3.5 px-3 text-center text-base" title={c.country}>
                  {getCountryFlag(c.countryCode)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoversPage;
