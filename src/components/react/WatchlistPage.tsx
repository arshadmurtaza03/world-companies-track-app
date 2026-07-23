import React, { useEffect, useState } from 'react';
import type { Company, CurrencyCode } from '../../types';
import { getWatchlist, toggleWatchlist } from '../../lib/watchlist';
import { formatPrice, formatPercent, getCountryFlag } from '../../lib/format';
import { getSavedCurrency } from '../../lib/currency';
import { CompanyLogo } from './CompanyLogo';

interface Props {
  allCompanies: Company[];
}

export const WatchlistPage: React.FC<Props> = ({ allCompanies }) => {
  const [watchlistTickers, setWatchlistTickers] = useState<string[]>([]);
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  useEffect(() => {
    setWatchlistTickers(getWatchlist());
    setCurrency(getSavedCurrency());

    const handleWatchlist = () => setWatchlistTickers(getWatchlist());
    const handleCurrency = (e: CustomEvent<CurrencyCode>) => setCurrency(e.detail);

    window.addEventListener('wcm-watchlist-change', handleWatchlist);
    window.addEventListener('wcm-currency-change', handleCurrency as EventListener);
    return () => {
      window.removeEventListener('wcm-watchlist-change', handleWatchlist);
      window.removeEventListener('wcm-currency-change', handleCurrency as EventListener);
    };
  }, []);

  const watchlistedCompanies = allCompanies.filter(c =>
    watchlistTickers.includes(c.ticker.toUpperCase())
  );

  const handleRemove = (ticker: string) => {
    toggleWatchlist(ticker);
    setWatchlistTickers(getWatchlist());
  };

  if (watchlistedCompanies.length === 0) {
    return (
      <div className="text-center py-16 px-4 space-y-4 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl mx-auto shadow-xs">
          ★
        </div>
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Your Watchlist is Empty</h2>
        <p class="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          Bookmark companies across ranking tables and profile pages to track your favorite equities in one spot. Zero login required — stored locally in your browser.
        </p>
        <a
          href="/ranking/global"
          className="inline-block px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-all scale-100 hover:scale-105"
        >
          Explore Global Rankings →
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
        <span>Saved Companies ({watchlistedCompanies.length})</span>
        <button
          onClick={() => {
            localStorage.removeItem('wcm_user_watchlist');
            setWatchlistTickers([]);
          }}
          className="text-rose-500 hover:underline cursor-pointer"
        >
          Clear All Watchlist
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] shadow-xs">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--color-bg-alt)] border-b border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] font-semibold">
              <th className="py-3 px-3">Company</th>
              <th className="py-3 px-3 text-right">Price</th>
              <th className="py-3 px-3 text-right">24h Change</th>
              <th className="py-3 px-3 text-right">Market Cap</th>
              <th className="py-3 px-3 text-center">Country</th>
              <th className="py-3 px-3 text-center w-16">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)] font-sans">
            {watchlistedCompanies.map(c => (
              <tr key={c.ticker} className="hover:bg-[var(--color-surface)]/60 transition-colors">
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
                  <span className={c.priceChange1D >= 0 ? 'text-emerald-500' : 'text-rose-500'}>
                    {formatPercent(c.priceChange1D)}
                  </span>
                </td>

                <td className="py-3.5 px-3 text-right font-mono text-xs text-blue-600 dark:text-blue-400 font-bold">
                  ${(c.marketCap / 1e9).toFixed(1)}B
                </td>

                <td className="py-3.5 px-3 text-center text-base" title={c.country}>
                  {getCountryFlag(c.countryCode)}
                </td>

                <td className="py-3.5 px-3 text-center">
                  <button
                    onClick={() => handleRemove(c.ticker)}
                    className="p-1 rounded bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 text-xs font-semibold cursor-pointer"
                    title="Remove from Watchlist"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchlistPage;
