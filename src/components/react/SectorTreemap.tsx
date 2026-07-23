import React, { useMemo } from 'react';
import { computeTreemap, type TreemapItem } from '../../lib/treemap';
import { formatLargeNumber } from '../../lib/format';

interface SectorInfo {
  name: string;
  count: number;
  totalCap: number;
}

interface Props {
  sectors: SectorInfo[];
}

const SECTOR_COLORS: Record<string, string> = {
  'Technology': 'bg-blue-600 dark:bg-blue-700 text-white',
  'Financial Services': 'bg-emerald-600 dark:bg-emerald-700 text-white',
  'Energy': 'bg-amber-600 dark:bg-amber-700 text-white',
  'Healthcare': 'bg-purple-600 dark:bg-purple-700 text-white',
  'Consumer Cyclical': 'bg-rose-600 dark:bg-rose-700 text-white',
  'Communication Services': 'bg-indigo-600 dark:bg-indigo-700 text-white',
  'Consumer Defensive': 'bg-teal-600 dark:bg-teal-700 text-white',
  'Industrials': 'bg-cyan-600 dark:bg-cyan-700 text-white',
  'Basic Materials': 'bg-orange-600 dark:bg-orange-700 text-white',
  'Real Estate': 'bg-lime-600 dark:bg-lime-700 text-white',
  'Utilities': 'bg-sky-600 dark:bg-sky-700 text-white'
};

export const SectorTreemap: React.FC<Props> = ({ sectors }) => {
  const totalMarketCap = useMemo(() => sectors.reduce((sum, s) => sum + s.totalCap, 0), [sectors]);

  const items: TreemapItem[] = useMemo(() => {
    return sectors.map(s => ({
      id: s.name.toLowerCase().replace(/\s+/g, '-'),
      label: s.name,
      value: s.totalCap,
      formattedValue: formatLargeNumber(s.totalCap),
      count: s.count
    }));
  }, [sectors]);

  const rects = useMemo(() => computeTreemap(items, 1000, 420), [items]);

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] font-mono">
        <span>Interactive Sector Market Weightings</span>
        <span>Total Sector Cap: {formatLargeNumber(totalMarketCap)}</span>
      </div>

      <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-alt)] shadow-md">
        {rects.map(rect => {
          const colorClass = SECTOR_COLORS[rect.label] || 'bg-slate-700 text-white';
          const percentShare = ((rect.value / totalMarketCap) * 100).toFixed(1);
          const slug = rect.label.toLowerCase().replace(/\s+/g, '-');

          // Relative percentage positioning inside container
          const left = `${(rect.x / 1000) * 100}%`;
          const top = `${(rect.y / 420) * 100}%`;
          const width = `${(rect.width / 1000) * 100}%`;
          const height = `${(rect.height / 420) * 100}%`;

          return (
            <a
              key={rect.id}
              href={`/sectors/${slug}`}
              style={{ left, top, width, height }}
              className={`absolute p-3 rounded-lg ${colorClass} transition-all duration-200 hover:scale-[1.01] hover:z-20 shadow-sm flex flex-col justify-between overflow-hidden group border border-white/10`}
              title={`${rect.label}: ${rect.formattedValue} (${percentShare}% share)`}
            >
              <div>
                <div className="font-extrabold text-sm md:text-base leading-tight group-hover:underline truncate">
                  {rect.label}
                </div>
                <div className="text-xs opacity-90 font-mono mt-0.5">
                  {percentShare}% Global Share
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono opacity-85 pt-2">
                <span className="font-bold">{rect.formattedValue}</span>
                <span>{rect.count} {rect.count === 1 ? 'co.' : 'cos.'}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SectorTreemap;
