import React, { useState } from 'react';
import { getCleanLogoMeta } from '../../lib/logos';

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
  const [tier, setTier] = useState<1 | 2 | 3 | 4>(1);

  const { cleanDomain, cleanTicker } = getCleanLogoMeta(ticker, domain);

  // Production-Safe Fallback Chain:
  // Tier 1: Google Favicon CDN (64px high-res domain icon)
  // Tier 2: DuckDuckGo Icon CDN
  // Tier 3: Parqet Cleaned Symbol SVG
  // Tier 4: SVG Brand Initials Avatar
  const tier1Url = `https://www.google.com/s2/favicons?domain=${cleanDomain}&sz=64`;
  const tier2Url = `https://icons.duckduckgo.com/ip3/${cleanDomain}.ico`;
  const tier3Url = `https://assets.parqet.com/logos/symbol/${cleanTicker}?format=svg`;

  const sizeClass = size === 64 ? 'w-16 h-16 text-xl rounded-xl' : 'w-8 h-8 text-xs rounded-full';
  const pxSize = size;

  const handleImgError = () => {
    setTier(prev => (prev < 4 ? (prev + 1 as 1 | 2 | 3 | 4) : 4));
  };

  if (tier === 1) {
    return (
      <img
        src={tier1Url}
        alt={`${name} logo`}
        width={pxSize}
        height={pxSize}
        onError={handleImgError}
        className={`${sizeClass} object-contain bg-white p-1 border border-[var(--color-border)] shadow-xs inline-block shrink-0`}
        loading="lazy"
      />
    );
  }

  if (tier === 2) {
    return (
      <img
        src={tier2Url}
        alt={`${name} logo`}
        width={pxSize}
        height={pxSize}
        onError={handleImgError}
        className={`${sizeClass} object-contain bg-white p-1 border border-[var(--color-border)] shadow-xs inline-block shrink-0`}
        loading="lazy"
      />
    );
  }

  if (tier === 3) {
    return (
      <img
        src={tier3Url}
        alt={`${name} logo`}
        width={pxSize}
        height={pxSize}
        onError={handleImgError}
        className={`${sizeClass} object-contain bg-white p-1 border border-[var(--color-border)] shadow-xs inline-block shrink-0`}
        loading="lazy"
      />
    );
  }

  // Tier 4 Fallback: SVG Text Avatar with deterministic HSL background color
  const initials = cleanTicker.slice(0, 3).toUpperCase();
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
