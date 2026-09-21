import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, Phone } from 'lucide-react';
import { FAQ_ITEMS, ADVISOR_PHONE, ADVISOR_TEL } from '../data/quizData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq-section" className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0906af] mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Foire Aux Questions</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold">
          Tout savoir sur les élixirs floraux
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Vous avez des interrogations sur la méthode du Dr Bach ou l'utilisation de votre duo d'élixirs ?
        </p>
      </div>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-base sm:text-lg font-semibold text-slate-900">
                  {item.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#0906af] text-white border-transparent' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <h4 className="font-serif text-lg font-bold text-slate-900">
          Une question spécifique sur votre profil émotionnel ?
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-5 max-w-xl mx-auto">
          Notre conseillère professionnelle est à votre écoute pour vous guider directement par téléphone et affiner le choix de votre posologie.
        </p>
        <a
          href={ADVISOR_TEL}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#0906af] text-white hover:bg-[#08059d] transition-all shadow-md active:scale-95"
        >
          <Phone className="w-4 h-4" />
          <span>Appeler notre conseillère au {ADVISOR_PHONE}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
