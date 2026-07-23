import type { CurrencyCode } from '../types';
import exchangeRatesData from '../data/exchange-rates.json';

const COUNTRY_FLAGS: Record<string, string> = {
  US: '🇺🇸',
  SA: '🇸🇦',
  TW: '🇹🇼',
  DK: '🇩🇰',
  FR: '🇫🇷',
  IN: '🇮🇳',
  CN: '🇨🇳',
  NL: '🇳🇱',
  JP: '🇯🇵',
  DE: '🇩🇪',
  GB: '🇬🇧',
  KR: '🇰🇷',
  CA: '🇨🇦',
  AU: '🇦🇺',
  CH: '🇨🇭'
};

export function getCountryFlag(countryCode: string): string {
  return COUNTRY_FLAGS[countryCode] || '🌐';
}

export function formatLargeNumber(
  valueInUSD: number,
  currency: CurrencyCode = 'USD',
  customRate?: number
): string {
  if (valueInUSD === 0 || valueInUSD === null || valueInUSD === undefined) return 'N/A';
  
  const rates = exchangeRatesData.rates as Record<string, number>;
  const rate = customRate || rates[currency] || 1.0;
  const converted = valueInUSD * rate;
  
  const symbol = getCurrencySymbol(currency);
  const absVal = Math.abs(converted);

  let formatted = '';
  if (absVal >= 1e12) {
    formatted = `${(converted / 1e12).toFixed(3)} T`;
  } else if (absVal >= 1e9) {
    formatted = `${(converted / 1e9).toFixed(2)} B`;
  } else if (absVal >= 1e6) {
    formatted = `${(converted / 1e6).toFixed(2)} M`;
  } else {
    formatted = converted.toLocaleString('en-US', { maximumFractionDigits: 0 });
  }

  return `${symbol}${formatted}`;
}

export function formatPrice(
  priceInUSD: number,
  currency: CurrencyCode = 'USD',
  customRate?: number
): string {
  const rates = exchangeRatesData.rates as Record<string, number>;
  const rate = customRate || rates[currency] || 1.0;
  const converted = priceInUSD * rate;
  const symbol = getCurrencySymbol(currency);

  if (converted >= 100) {
    return `${symbol}${converted.toFixed(2)}`;
  }
  return `${symbol}${converted.toFixed(2)}`;
}

export function formatPercent(value: number): string {
  if (value === undefined || value === null) return '0.00%';
  const prefix = value > 0 ? '+' : '';
  return `${prefix}${value.toFixed(2)}%`;
}

export function formatNumber(value: number): string {
  if (value >= 1e6) {
    return `${(value / 1e6).toFixed(2)}M`;
  }
  return value.toLocaleString('en-US');
}

export function getCurrencySymbol(currency: CurrencyCode): string {
  switch (currency) {
    case 'EUR': return '€';
    case 'INR': return '₹';
    case 'GBP': return '£';
    case 'JPY': return '¥';
    case 'AED': return 'AED ';
    case 'USD':
    default: return '$';
  }
}
