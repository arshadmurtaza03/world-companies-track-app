const WATCHLIST_KEY = 'wcm_user_watchlist';

export function getWatchlist(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(WATCHLIST_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function isWatchlisted(ticker: string): boolean {
  const list = getWatchlist();
  return list.includes(ticker.toUpperCase());
}

export function toggleWatchlist(ticker: string): boolean {
  if (typeof window === 'undefined') return false;
  const list = getWatchlist();
  const upper = ticker.toUpperCase();
  const index = list.indexOf(upper);
  let isNowAdded = false;

  if (index >= 0) {
    list.splice(index, 1);
    isNowAdded = false;
  } else {
    list.push(upper);
    isNowAdded = true;
  }

  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(list));
  window.dispatchEvent(new CustomEvent('wcm-watchlist-change', { detail: { ticker: upper, isWatchlisted: isNowAdded } }));
  return isNowAdded;
}
