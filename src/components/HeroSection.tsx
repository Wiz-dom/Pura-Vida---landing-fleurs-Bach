import React from 'react';
import { ArrowDown, CheckCircle2, Clock, Sparkles, HeartHandshake, Phone, Tag } from 'lucide-react';
import autumnBanner from '../assets/images/autumn_botanical_flowers_1790016894878.jpg';
import { ADVISOR_PHONE, ADVISOR_TEL, PROMO_CODE } from '../data/quizData';

interface HeroSectionProps {
  onStartQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartQuiz }) => {
  return (
    <section id="hero-section" className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16">
      {/* Decorative subtle blue/amber background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badges bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0906af] text-xs font-bold tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Mini-Test Émotionnel • Rentrée & Saison d'Automne</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Tag className="w-3 h-3 text-emerald-600" />
            <span>Code <strong>{PROMO_CODE}</strong> (-5%)</span>
          </div>
        </div>

        {/* Main Headings */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15] mb-4">
          De quel <span className="text-[#0906af] italic font-semibold">élixir floral</span> avez-vous le plus besoin ?
        </h1>

        <p className="font-serif text-xl sm:text-2xl text-slate-700 italic mb-6">
          Votre duo de fleurs de l'automne en 1 minute
        </p>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Changement de saison, rentrée rythmée, baisse de lumière ou anxiété ambiante... 
          Nos émotions sont sollicitées. Répondez à 5 affirmations simples pour identifier 
          votre duo de fleurs de Bach sur-mesure pour retrouver calme, énergie et sérénité.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
          <button
            id="start-quiz-hero-button"
            onClick={onStartQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-[#0906af] hover:bg-[#08059d] active:scale-[0.98] transition-all shadow-md hover:shadow-lg text-base cursor-pointer"
          >
            <span>Faire le test gratuit (1 min)</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <a
            id="advisor-hero-link"
            href={ADVISOR_TEL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white border border-slate-300 hover:border-[#0906af] hover:text-[#0906af] transition-all text-sm shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#0906af]" />
            <span>Conseillère dédiée : {ADVISOR_PHONE}</span>
          </a>
        </div>

        {/* 3 reassuring pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-xs">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span><strong>1 minute chrono</strong> : 5 questions simples</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong>Duo personnalisé</strong> & posologie immédiate</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-xs">
            <HeartHandshake className="w-4 h-4 text-[#0906af] shrink-0" />
            <span><strong>100% naturel</strong> selon le Dr Bach</span>
          </div>
        </div>

        {/* Botanical Visual Banner */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group max-w-3xl mx-auto">
          <img
            src={autumnBanner}
            alt="Élixirs floraux d'automne et fleurs de Bach"
            className="w-full h-48 sm:h-64 object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent flex items-end p-4 sm:p-6 text-white text-left">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-amber-300 block">
                Harmonie Automnale • L'Espace Puravida
              </span>
              <p className="font-serif text-base sm:text-lg italic text-slate-50">
                « La nature nous offre à chaque saison la réponse végétale à nos états d'âme. »
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
