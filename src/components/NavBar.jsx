
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Ícones para menu (usando SVG inline para visual financeiro)
const icons = {
  Home: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-7 9 7v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
  ),
  Ferramentas: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 01-5.6 5.6l-4.6 4.6a2 2 0 102.8 2.8l4.6-4.6a4 4 0 015.6-5.6z" /></svg>
  ),
  'Projetos Futuros': (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
  Planos: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" /></svg>
  ),
  Sobre: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" /></svg>
  ),
};

export default function HomeNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu com ícones e nomes
  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'Ferramentas', to: '/ferramentas' },
    { label: 'Projetos Futuros', href: '/projetos-futuros' },
    { label: 'Planos', to: '/subscriptions' },
    { label: 'Sobre', href: '/sobre' },
  ];

  return (
    <nav className="w-full bg-gradient-to-br from-[#0a1427] via-[#101c36] to-[#0e1a2f] shadow-xl border-b border-blue-800/40 mb-8 z-50 relative animate-fade-in-down">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="inline-flex items-center justify-center rounded-full shadow-lg p-1.5 group-hover:scale-105 transition-transform">
            <img src="/assets/PontoFino_Logo.png" alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" />
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-[#00e0ff] via-[#00b6fc] to-[#0057b8] bg-clip-text text-transparent drop-shadow-lg group-hover:opacity-90 transition-opacity">PontoFino</span>
        </Link>
        {/* Menu desktop */}
        <div className="hidden md:flex gap-1 items-center rounded-lg px-2 py-1">
          {menuItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-white/90 bg-gradient-to-tr from-blue-900/60 to-blue-700/60 hover:from-[#00e0ff]/30 hover:to-[#0057b8]/30 border border-blue-700/40 shadow-sm hover:shadow-lg transition-all duration-150 backdrop-blur-md text-base tracking-wide hover:text-[#00e0ff] focus:outline-none focus:ring-2 focus:ring-[#00e0ff] animate-fade-in"
              >
                <span className="opacity-80">{icons[item.label]}</span>
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-white/90 bg-gradient-to-tr from-blue-900/60 to-blue-700/60 hover:from-[#00e0ff]/30 hover:to-[#0057b8]/30 border border-blue-700/40 shadow-sm hover:shadow-lg transition-all duration-150 backdrop-blur-md text-base tracking-wide hover:text-[#00e0ff] focus:outline-none focus:ring-2 focus:ring-[#00e0ff] animate-fade-in"
              >
                <span className="opacity-80">{icons[item.label]}</span>
                {item.label}
              </a>
            )
          )}
        </div>
        {/* Botão hamburguer mobile */}
        <button
          className="md:hidden flex items-center justify-center p-3 rounded-xl text-white shadow-lg focus:outline-none transition-all duration-200 border border-blue-400/40"
          style={{ minWidth: 48, minHeight: 48 }}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <svg className={menuOpen ? 'hidden' : 'block'} width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          <svg className={menuOpen ? 'block' : 'hidden'} width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      {/* Dropdown mobile */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col bg-gradient-to-br from-[#0a1427] via-[#101c36] to-[#0057b8] animate-fade-in-down shadow-2xl rounded-b-3xl border-b-4 border-[#00e0ff]/60 mobile-menu-hamburger">
          <div className="flex items-center justify-between px-6 pt-6 pb-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full shadow-lg p-1">
                <img src="/assets/PontoFino_Logo.png" alt="Logo" className="h-9 w-9 rounded-full shadow-lg" />
              </span>
              <span className="text-xl font-black text-white drop-shadow">PontoFino</span>
            </div>
            <button
              className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-white/30 border border-blue-400/40 transition"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-7 py-4 flex-1">
            {menuItems.map((item, idx) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-lg font-bold text-lg text-white/90 bg-gradient-to-tr from-blue-900/60 to-blue-700/60 hover:from-[#00e0ff]/30 hover:to-[#0057b8]/30 border border-blue-700/40 shadow-sm hover:shadow-lg transition-all duration-150 backdrop-blur-md mb-1 animate-fade-in"
                  style={{ animationDelay: `${0.05 * idx + 0.1}s` }}
                >
                  <span className="opacity-80">{icons[item.label]}</span>
                  <span className="drop-shadow-lg">{item.label}</span>
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-lg font-bold text-lg text-white/90 bg-gradient-to-tr from-blue-900/60 to-blue-700/60 hover:from-[#00e0ff]/30 hover:to-[#0057b8]/30 border border-blue-700/40 shadow-sm hover:shadow-lg transition-all duration-150 backdrop-blur-md mb-1 animate-fade-in"
                  style={{ animationDelay: `${0.05 * idx + 0.1}s` }}
                >
                  <span className="opacity-80">{icons[item.label]}</span>
                  <span className="drop-shadow-lg">{item.label}</span>
                </a>
              )
            )}
            <div className="flex flex-col gap-2 mt-6 animate-fade-in-up"></div>
          </nav>
          <div className="text-center text-xs text-white/70 pb-3 pt-2 animate-fade-in-up tracking-wider">© {new Date().getFullYear()} PontoFino</div>
        </div>
      )}
    </nav>
  );
}