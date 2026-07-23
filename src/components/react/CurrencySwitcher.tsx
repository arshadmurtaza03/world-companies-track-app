import React, { useEffect, useState } from 'react';
import type { CurrencyCode } from '../../types';
import { getSavedCurrency, saveCurrency } from '../../lib/currency';

const CURRENCIES: { code: CurrencyCode; label: string; symbol: string }[] = [
  { code: 'USD', label: 'USD ($)', symbol: '$' },
  { code: 'EUR', label: 'EUR (€)', symbol: '€' },
  { code: 'INR', label: 'INR (₹)', symbol: '₹' },
  { code: 'GBP', label: 'GBP (£)', symbol: '£' },
  { code: 'JPY', label: 'JPY (¥)', symbol: '¥' },
  { code: 'AED', label: 'AED', symbol: 'AED ' }
];

export const CurrencySwitcher: React.FC = () => {
  const [current, setCurrent] = useState<CurrencyCode>('USD');

  useEffect(() => {
    setCurrent(getSavedCurrency());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value as CurrencyCode;
    setCurrent(code);
    saveCurrency(code);
  };

  return (
    <div className="relative inline-block">
      <select
        value={current}
        onChange={handleChange}
        className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-blue-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        aria-label="Currency Switcher"
      >
        {CURRENCIES.map(c => (
          <option key={c.code} value={c.code}>
            {c.label}
          </option>
        ))}
      </select>
    </div>
  );
};
