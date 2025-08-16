import React, { useEffect, useRef } from 'react';

/**
 * MarketTicker
 * Props:
 * - items: array of strings like 'IBOV: +0.8%'
 * - className: additional container classes
 */
export default function MarketTicker({ items, className = '' }) {
  const defaults = ['IBOV: +0.8%', 'S&P500: +0.4%', 'NASDAQ: +1.2%', 'Dólar: R$5.12', 'Selic: 11.75%'];
  const list = Array.isArray(items) && items.length ? items : defaults;

  const containerRef = useRef(null);
  const pausedRef = useRef(false);
  const frameRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const speed = 0.6; // pixels per frame (tweak for faster/slower)

    const step = () => {
      if (!pausedRef.current) {
        // advance scroll
        el.scrollLeft += speed;
        // when we've scrolled past the first copy, jump back to start for seamless loop
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [list]);

  const renderItem = (t, i) => {
    const parts = String(t).split(':');
    const label = parts[0] ?? '';
    const value = parts.slice(1).join(':')?.trim() ?? '';
    const positive = value.includes('+');

    return (
      <div key={i} className="min-w-[140px] flex items-center justify-between bg-black/20 px-3 py-2 rounded-md">
        <div className="text-xs text-blue-100">{label}</div>
        <div className={`text-sm font-medium ${positive ? 'text-emerald-400' : 'text-red-400'}`}>{value}</div>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`flex gap-4 overflow-x-auto py-2 px-3 bg-white/3 rounded-md border border-white/10 no-scrollbar ${className}`}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      aria-label="Market ticker carousel"
    >
      {/* render two copies of the list for seamless looping */}
      <div className="flex gap-4">{list.map((t, i) => renderItem(t, i))}</div>
      <div aria-hidden className="flex gap-4">{list.map((t, i) => renderItem(t, `dup-${i}`))}</div>
    </div>
  );
}
