import React, { useEffect, useState } from 'react';
import type { Company } from '../../types';
import { fuzzySearchCompanies } from '../../lib/search';
import { getCountryFlag } from '../../lib/format';
import { CompanyLogo } from './CompanyLogo';

interface Props {
  companies: Company[];
}

export const CommandPalette: React.FC<Props> = ({ companies }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const results = fuzzySearchCompanies(companies, query).slice(0, 8);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(o => !o);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    const handleOpenEvent = () => setOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wcm-open-search', handleOpenEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wcm-open-search', handleOpenEvent);
    };
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleNav = (index: number) => {
    const selected = results[index];
    if (selected) {
      window.location.href = `/companies/${selected.ticker.toLowerCase()}`;
      setOpen(false);
    }
  };

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(i => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(i => (i - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleNav(selectedIndex);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 px-4">
      <div
        className="w-full max-w-2xl rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onKeyDown={handleListKeyDown}
      >
        {/* Search Input */}
        <div className="p-4 border-b border-[var(--color-border)] flex items-center gap-3">
          <svg className="w-5 h-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by company, ticker, sector, or country... (e.g. AAPL, Apple, Technology)"
            className="w-full bg-transparent text-sm text-[var(--color-text-primary)] focus:outline-none placeholder-[var(--color-text-muted)]"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-xs px-2 py-1 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-[var(--color-border-subtle)]">
          {results.length === 0 ? (
            <div className="p-8 text-center text-sm text-[var(--color-text-muted)]">
              No matching companies found for "{query}"
            </div>
          ) : (
            results.map((company, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={company.ticker}
                  onClick={() => handleNav(idx)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-[var(--color-surface)] text-[var(--color-text-primary)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CompanyLogo ticker={company.ticker} domain={company.domain} name={company.name} size={32} />
                    <div>
                      <div className="font-semibold text-sm flex items-center gap-1.5">
                        <span>{company.name}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded font-mono ${isSelected ? 'bg-blue-700 text-white' : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)]'}`}>
                          {company.ticker}
                        </span>
                      </div>
                      <div className={`text-xs flex items-center gap-2 mt-0.5 ${isSelected ? 'text-blue-100' : 'text-[var(--color-text-secondary)]'}`}>
                        <span>{company.sector}</span>
                        <span>•</span>
                        <span>{getCountryFlag(company.countryCode)} {company.country}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right font-mono text-xs">
                    <div className="font-bold">${(company.marketCap / 1e9).toFixed(1)}B</div>
                    <div className={isSelected ? 'text-blue-100' : company.priceChange1D >= 0 ? 'text-emerald-500 font-semibold' : 'text-rose-500 font-semibold'}>
                      {company.priceChange1D >= 0 ? '+' : ''}{company.priceChange1D.toFixed(2)}%
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-2.5 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)] text-[11px] text-[var(--color-text-muted)] flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1 py-0.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">↵</kbd> Select</span>
          </div>
          <span>Showing {results.length} of {companies.length} companies</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;

