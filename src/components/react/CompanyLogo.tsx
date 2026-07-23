import React, { useState } from 'react';

interface Props {
  ticker: string;
  domain?: string;
  name: string;
  size?: 32 | 64;
}

function stringToHslColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  return `hsl(${h}, 65%, 42%)`;
}

export const CompanyLogo: React.FC<Props> = ({ ticker, domain, name, size = 32 }) => {
  const [tier, setTier] = useState<1 | 2 | 3>(domain ? 1 : 2);

  const cleanDomain = domain ? domain.replace(/^https?:\/\//, '').split('/')[0] : '';
  const primaryUrl = `https://logo.clearbit.com/${cleanDomain}`;
  const fallback1Url = `https://assets.parqet.com/logos/symbol/${ticker}?format=svg`;

  const sizeClass = size === 64 ? 'w-16 h-16 text-xl rounded-xl' : 'w-8 h-8 text-xs rounded-full';
  const pxSize = size;

  const handlePrimaryError = () => {
    if (tier === 1) setTier(2);
    else if (tier === 2) setTier(3);
  };

  if (tier === 1 && cleanDomain) {
    return (
      <img
        src={primaryUrl}
        alt={`${name} logo`}
        width={pxSize}
        height={pxSize}
        onError={handlePrimaryError}
        className={`${sizeClass} object-contain bg-white p-0.5 border border-[var(--color-border)] shadow-xs inline-block shrink-0`}
        loading="lazy"
      />
    );
  }

  if (tier === 2 || (!cleanDomain && tier === 1)) {
    return (
      <img
        src={fallback1Url}
        alt={`${name} logo`}
        width={pxSize}
        height={pxSize}
        onError={() => setTier(3)}
        className={`${sizeClass} object-contain bg-white p-0.5 border border-[var(--color-border)] shadow-xs inline-block shrink-0`}
        loading="lazy"
      />
    );
  }

  // Tier 3 Fallback: SVG Text Avatar with deterministic HSL background color
  const initials = ticker.slice(0, 3).toUpperCase();
  const bgColor = stringToHslColor(ticker);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`${sizeClass} flex items-center justify-center font-bold text-white shadow-xs shrink-0 border border-white/20 select-none`}
      title={name}
    >
      {initials}
    </div>
  );
};
