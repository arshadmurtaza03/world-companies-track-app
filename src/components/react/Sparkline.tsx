import React from 'react';
import { generateSparklinePath } from '../../lib/sparkline';

interface Props {
  data: number[];
  width?: number;
  height?: number;
}

export const Sparkline: React.FC<Props> = ({ data, width = 80, height = 24 }) => {
  if (!data || data.length === 0) {
    return <div className="w-[80px] h-[24px] bg-gray-100/50 dark:bg-gray-800/50 rounded" />;
  }

  const d = generateSparklinePath(data, width, height);
  const isPositive = data[data.length - 1] >= data[0];
  const colorClass = isPositive ? 'stroke-emerald-500' : 'stroke-rose-500';

  return (
    <svg width={width} height={height} className="overflow-visible inline-block">
      <path
        d={d}
        fill="none"
        className={`${colorClass} transition-colors duration-200`}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
