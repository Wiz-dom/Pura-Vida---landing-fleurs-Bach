import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, PackageCheck, Star, Quote } from 'lucide-react';
import { PURAVIDA_TRUST_POINTS, CLIENT_TESTIMONIALS, PURAVIDA_SHOP_URL } from '../data/quizData';

export const TrustSection: React.FC = () => {
  return (
    <section id="trust-section" className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0906af] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>L’Excellence Florale Pura Vida</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold">
            Pourquoi faire confiance à L’Espace Pura Vida ?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Depuis notre boutique dédiée au bien-être holistique, nous sélectionnons des élixirs floraux d’une pureté biologique irréprochable certifiés selon la méthode originelle.
          </p>
        </div>

        {/* 4 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PURAVIDA_TRUST_POINTS.map((item, idx) => {
            const Icon =
              idx === 0
                ? Sparkles
                : idx === 1
                ? ShieldCheck
                : idx === 2
                ? HeartHandshake
                : PackageCheck;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0906af] border border-blue-100 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client reviews */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0906af] block mb-1">
              Retours d'expérience
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-bold">
              Ils ont retrouvé leur équilibre cet automne
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_TESTIMONIALS.map((review, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300 mb-2 opacity-50" />
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                    « {review.text} »
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      {review.author}
                    </span>
                    <span className="text-slate-500">
                      {review.city} • {review.date}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-[#0906af]">
                    {review.flower}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={PURAVIDA_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0906af] hover:text-[#08059d] transition-colors"
            >
              <span>Découvrir tous les avis et produits sur l'Espace Pura Vida ➔</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
