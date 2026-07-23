import type { CurrencyCode, ExchangeRate } from '../types';
import fallbackRates from '../data/exchange-rates.json';

const CURRENCY_KEY = 'wcm_user_currency';

export function getSavedCurrency(): CurrencyCode {
  if (typeof window === 'undefined') return 'USD';
  const saved = localStorage.getItem(CURRENCY_KEY) as CurrencyCode;
  return ['USD', 'EUR', 'INR', 'GBP', 'JPY', 'AED'].includes(saved) ? saved : 'USD';
}

export function saveCurrency(currency: CurrencyCode): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CURRENCY_KEY, currency);
    window.dispatchEvent(new CustomEvent('wcm-currency-change', { detail: currency }));
  }
}

export async function fetchExchangeRates(): Promise<ExchangeRate> {
  try {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    if (!res.ok) throw new Error('API fetch failed');
    const data = await res.json();
    return {
      base: 'USD',
      rates: data.rates,
      fetchedAt: new Date().toISOString()
    };
  } catch {
    return fallbackRates as ExchangeRate;
  }
}
