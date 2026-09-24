import React from 'react';
import { Sparkles, Phone, ShoppingBag, ExternalLink, Tag } from 'lucide-react';
import { PURAVIDA_SHOP_URL, PURAVIDA_LOGO_URL, ADVISOR_PHONE, ADVISOR_TEL, PROMO_CODE } from '../data/quizData';

export const Header: React.FC = () => {
  return (
    <header id="site-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top emergency announcement bar (from magasin.espacepuravida.fr) */}
      <div id="top-announcement-bar" className="bg-[#f86300] text-white text-xs py-2 px-4 text-center tracking-wide font-medium flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <span className="inline-flex items-center gap-1.5 bg-[#07db75] text-[#0f2e1e] font-bold px-2.5 py-0.5 rounded-full text-[11px] shadow-xs">
          <Tag className="w-3 h-3" />
          <span>Remise 5% code {PROMO_CODE}</span>
        </span>
        <span className="text-white/95 font-medium hidden sm:inline">•</span>
        <span className="text-white font-medium text-[11px] sm:text-xs">
          Livraison Offerte dès 30€ d'achat
        </span>
        <span className="text-white/95 font-medium hidden md:inline">•</span>
        <a
          href={ADVISOR_TEL}
          className="text-white hover:text-amber-200 underline font-semibold text-[11px] sm:text-xs inline-flex items-center gap-1"
        >
          <Phone className="w-3 h-3" />
          <span>Conseillère : {ADVISOR_PHONE}</span>
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand with real logo image */}
        <a
          id="brand-logo-link"
          href={PURAVIDA_SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
          title="Aller sur la boutique Espace Pura Vida"
        >
          <img
            src={PURAVIDA_LOGO_URL}
            alt="L'Espace Pura Vida - Magasin"
            className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-95 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            id="header-advisor-button"
            href={ADVISOR_TEL}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#0906af] text-white hover:bg-[#08059d] active:scale-95 transition-all shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Conseillère : {ADVISOR_PHONE}</span>
            <span className="sm:hidden">{ADVISOR_PHONE}</span>
          </a>

          <a
            id="header-shop-link"
            href={PURAVIDA_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-slate-700 hover:text-[#0906af] border border-slate-200 hover:border-[#0906af]/40 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#0906af]" />
            <span>Boutique Pura Vida</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </header>
  );
};
