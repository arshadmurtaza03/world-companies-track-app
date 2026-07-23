import React, { useEffect, useState } from 'react';
import { isWatchlisted, toggleWatchlist } from '../../lib/watchlist';

interface Props {
  ticker: string;
}

export const WatchlistButton: React.FC<Props> = ({ ticker }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(isWatchlisted(ticker));

    const handleEvent = (e: CustomEvent) => {
      if (e.detail?.ticker === ticker.toUpperCase()) {
        setActive(e.detail.isWatchlisted);
      }
    };

    window.addEventListener('wcm-watchlist-change', handleEvent as EventListener);
    return () => window.removeEventListener('wcm-watchlist-change', handleEvent as EventListener);
  }, [ticker]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = toggleWatchlist(ticker);
    setActive(nextState);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="p-1 rounded-md hover:bg-[var(--color-surface-hover)] transition-colors cursor-pointer"
      title={active ? 'Remove from Watchlist' : 'Add to Watchlist'}
      aria-label="Toggle Watchlist"
    >
      <svg
        className={`w-4 h-4 ${active ? 'fill-amber-400 stroke-amber-500' : 'fill-none stroke-gray-400 hover:stroke-amber-400'}`}
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    </button>
  );
};
