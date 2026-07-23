# DESIGN SYSTEM — WORLD COMPANIES BY MARKET CAP

## Overview
Dual-mode financial analytics application with Light Mode as default. Built using Tailwind CSS v4 CSS-first tokens (`@theme`) in `src/styles/global.css`.

---

## 1. Color Palettes

### Light Mode (Default)
- **Background**: `#FFFFFF` (Primary), `#F9FAFB` (Subtle background/stripes)
- **Surface Cards**: `#F3F4F6`, border `#E5E7EB`
- **Text**: `#111827` (Primary), `#6B7280` (Secondary), `#9CA3AF` (Muted)
- **Accent**: `#2563EB` (Royal Blue), `#1D4ED8` (Hover), `#DBEAFE` (Subtle pill fill)
- **Positive/Negative**: `#16A34A` (Green gain), `#DC2626` (Red loss)
- **Borders**: `#E5E7EB` (Hairline 1px)

### Dark Mode (`.dark` class / `prefers-color-scheme: dark`)
- **Background**: `#000000` (Pure pitch black), `#0A0A0A` (Alt)
- **Surface Cards**: `#111111` / `#1A1A1A`
- **Text**: `#FFFFFF` (Primary), `#A1A1AA` (Secondary), `#71717A` (Muted)
- **Glassmorphism**: `backdrop-blur-md bg-white/5 border border-white/10`
- **Accent**: `#2563EB` (Same blue), `#3B82F6` (Hover text)
- **Borders**: `#222222` (Hairline 1px)

---

## 2. Typography
- **Primary Font**: Inter (`'Inter', system-ui, -apple-system, sans-serif`) loaded from Google Fonts.
- **Headings**:
  - `h1`: 2.25rem (36px), font-weight 800 (ExtraBold), tracking tight
  - `h2`: 1.5rem (24px), font-weight 700 (Bold)
  - `h3`: 1.125rem (18px), font-weight 600 (SemiBold)
- **Numbers / Financial Data**: `font-variant-numeric: tabular-nums` for aligned columns.

---

## 3. Global UI Rules
- **Sticky Top Navbar**: Logo + Light/Dark toggle + Currency Switcher + Cmd+K search trigger
- **Market Pulse Bar**: Thin sticky ticker below navbar showing global aggregate metrics & FX rates
- **Transitions**: `200ms ease` on all theme switches (`background-color`, `border-color`, `color`)
- **Hairline Borders**: `1px solid var(--color-border)` everywhere for sharp Vercel-like aesthetics
- **Card Hovers**: `hover:scale-[1.01] transition-transform duration-200 shadow-sm hover:shadow-md`
- **Data Disclaimer**: Persistent banner on data-rich pages:
  `⚠️ Market data is delayed up to 24 hours. For educational/informational use only — not for trading or investment decisions.`

---

## 4. Components & Metric Pills
- **Metric Filter Pills**: Horizontal scrollable tab row.
  - Active pill: `bg-blue-600 text-white font-medium shadow-sm`
  - Inactive pill: `bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-blue-500`
- **Tables**: Clean scannable layout. Desktop table $\rightarrow$ Mobile card stack below `md` breakpoint.
- **Logos**: 32px rounded-full in tables, 64px rounded-md on profile pages with 3-tier cascade fallback.
