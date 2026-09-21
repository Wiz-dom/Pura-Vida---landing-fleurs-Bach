import React from 'react';
import { Heart, ExternalLink, ShieldAlert, Phone } from 'lucide-react';
import { PURAVIDA_SHOP_URL, PURAVIDA_LOGO_URL, ADVISOR_PHONE, ADVISOR_TEL } from '../data/quizData';

export const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="bg-[#2B2B2B] text-slate-200 pt-12 pb-8 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-700">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={PURAVIDA_LOGO_URL}
                alt="L'Espace Pura Vida"
                className="h-9 w-auto object-contain rounded bg-white p-0.5"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                L’Espace Puravida
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Boutique dédiée à la santé naturelle, aux fleurs de Bach et aux élixirs floraux d’exception Deva. Retrouvez l’équilibre du corps et de l’esprit à chaque saison.
            </p>
            <div className="pt-2 flex flex-col gap-1.5">
              <a
                href={PURAVIDA_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white underline underline-offset-4"
              >
                <span>Accéder au catalogue complet des élixirs</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={ADVISOR_TEL}
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-white font-semibold"
              >
                <Phone className="w-3 h-3" />
                <span>Conseils personnalisés : {ADVISOR_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#hero-section" className="hover:text-white transition-colors">
                  Accueil du test
                </a>
              </li>
              <li>
                <a href="#quiz-section" className="hover:text-white transition-colors">
                  Le questionnaire (1 min)
                </a>
              </li>
              <li>
                <a href="#trust-section" className="hover:text-white transition-colors">
                  Pourquoi Puravida ?
                </a>
              </li>
              <li>
                <a href="#faq-section" className="hover:text-white transition-colors">
                  Questions fréquentes
                </a>
              </li>
            </ul>
          </div>

          {/* Category Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Les 5 Fleurs Analysées
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• La Moutarde (Chasser le blues soudain)</li>
              <li>• Le Noyer (S'adapter au nouveau rythme)</li>
              <li>• Le Trèfle Rouge (Bouclier angoisse collective)</li>
              <li>• L'Olivier (Recharger les batteries à plat)</li>
              <li>• La Camomille (Apaiser la nervosité)</li>
            </ul>
          </div>
        </div>

        {/* Naturopathic disclaimer */}
        <div className="my-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 text-xs text-slate-400 leading-relaxed">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <span>
            <strong>Avertissement bien-être :</strong> Les élixirs floraux et fleurs de Bach sont des compléments d’harmonisation émotionnelle. Ils ne constituent pas des médicaments et ne se substituent en aucun cas à un diagnostic, une consultation ou un traitement médical prescrit par un professionnel de santé.
          </span>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-2">
          <div>
            © {new Date().getFullYear()} L'Espace Puravida. Tous droits réservés.
          </div>
          <div className="flex items-center gap-1">
            <span>Fait avec bienveillance pour votre équilibre naturel</span>
            <Heart className="w-3 h-3 text-amber-500 inline fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
