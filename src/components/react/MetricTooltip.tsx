import React, { useState } from 'react';

interface Props {
  text: string;
}

export const MetricTooltip: React.FC<Props> = ({ text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-flex items-center ml-1 cursor-help group"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}
      aria-label="Metric info"
    >
      <span className="text-[10px] w-3.5 h-3.5 rounded-full border border-[var(--color-text-muted)] text-[var(--color-text-muted)] group-hover:text-blue-500 group-hover:border-blue-500 flex items-center justify-center font-serif leading-none font-bold">
        i
      </span>

      {visible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-2.5 text-xs rounded-lg bg-gray-900 dark:bg-gray-800 text-white shadow-xl z-50 pointer-events-none border border-gray-700 leading-normal">
          {text}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-800" />
        </div>
      )}
    </div>
  );
};
