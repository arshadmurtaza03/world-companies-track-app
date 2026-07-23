import React, { useState, useEffect, useRef } from 'react';
import type { Company } from '../../types';
import { CompanyLogo } from './CompanyLogo';
import { formatLargeNumber } from '../../lib/format';
import { getSavedCurrency } from '../../lib/currency';

interface Props {
  companies: Company[];
}

export const HeaderSearch: React.FC<Props> = ({ companies }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const currency = getSavedCurrency();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const results = query.trim()
    ? companies
        .filter(
          c =>
            c.name.toLowerCase().includes(query.toLowerCase()) ||
            c.ticker.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 6)
    : [];

  return (
    <div ref={wrapperRef} className="relative w-full max-w-[240px] md:max-w-[300px]">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Company name, ticker..."
          className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all font-sans"
        />
        <svg
          className="w-3.5 h-3.5 absolute left-2.5 text-[var(--color-text-muted)] pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Auto-suggest dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-xl overflow-hidden z-50 divide-y divide-[var(--color-border-subtle)]">
          {results.map(c => (
            <a
              key={c.ticker}
              href={`/companies/${c.ticker.toLowerCase()}`}
              className="flex items-center gap-2.5 p-2 hover:bg-[var(--color-bg-alt)] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <CompanyLogo ticker={c.ticker} domain={c.domain} name={c.name} size={32} />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-[var(--color-text-primary)] truncate">{c.name}</div>
                <div className="text-[10px] font-mono text-[var(--color-text-muted)]">{c.ticker} • {c.sector}</div>
              </div>
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                {formatLargeNumber(c.marketCap, currency)}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
