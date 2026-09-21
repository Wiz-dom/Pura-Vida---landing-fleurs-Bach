import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Phone,
  PhoneCall,
  MessageSquare,
  RotateCcw,
  Share2,
  Check,
  Clock,
  ShieldCheck,
  ExternalLink,
  Users,
  Tag,
  CheckCircle2,
} from 'lucide-react';
import { QuizResult } from '../types';
import { QUIZ_QUESTIONS, ADVISOR_PHONE, ADVISOR_TEL, ADVISOR_SMS, PROMO_CODE } from '../data/quizData';

interface ResultCardProps {
  result: QuizResult;
  onRetake: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result, onRetake }) => {
  const { primary, secondary, scores, maxScore, synergyReason } = result;
  const [copied, setCopied] = useState<boolean>(false);

  const handleShare = () => {
    const textToShare = `Mon duo floral d'automne sur L'Espace Puravida : ${primary.flowerName} & ${secondary.flowerName}.\nConseils personnalisés au ${ADVISOR_PHONE}.\nFaites le test : ${window.location.href}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToShare);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="result-section" className="py-8 sm:py-14 max-w-5xl mx-auto px-4 sm:px-6 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        {/* Main Result Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative">
          {/* Top banner bar with Puravida brand blue */}
          <div className="bg-gradient-to-r from-[#0906af] via-[#10333F] to-[#0906af] text-white px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌿</span>
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold block">
                  Résultat de votre Mini-Test Émotionnel
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  Votre Duo Floral Personnalisé
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/15 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm self-start sm:self-auto border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Synergie 2 Fleurs d'Automne</span>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-10">
            {/* Header intro */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0906af]/10 text-[#0906af] mb-2">
                Conseil & Recommandation Puravida
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold">
                Vos 2 élixirs floraux complémentaires
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Selon la méthode originelle du Dr Bach et l'expertise de notre laboratoire partenaire, associer ces deux élixirs permet d'agir simultanément sur votre ressenti aigu et sur votre équilibre profond.
              </p>
            </div>

            {/* DUO CARDS GRID WITH REAL PRODUCT IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* FLOWER 1 */}
              <div className="bg-slate-50/70 rounded-2xl border-2 border-[#0906af]/30 hover:border-[#0906af] transition-all p-6 flex flex-col justify-between relative shadow-sm hover:shadow-md">
                <div className="absolute top-0 right-0 px-3.5 py-1 bg-[#0906af] text-white text-[11px] font-bold uppercase tracking-wider rounded-bl-xl shadow-xs">
                  Fleur n°1 • Clé Prioritaire
                </div>

                <div>
                  {/* Badge & score */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase bg-emerald-100 text-emerald-800">
                      {primary.groupName} • Note : {scores[primary.id]}/3
                    </span>
                  </div>

                  {/* Real Product Image & Headings */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                    <div className="w-28 h-36 shrink-0 bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center shadow-xs">
                      <img
                        src={primary.imageUrl}
                        alt={primary.flowerName}
                        className="max-h-full max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="font-serif text-2xl font-bold text-slate-900">
                        {primary.flowerName}
                      </h3>
                      <p className="text-xs text-slate-500 italic mt-0.5 mb-2">
                        {primary.flowerSubtitle}
                      </p>
                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-left">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                          Bénéfice clé :
                        </span>
                        <p className="text-xs font-semibold text-emerald-950 leading-snug">
                          {primary.benefitShort}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Symptoms & Action */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 mt-4">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1 font-semibold">Votre ressenti ciblé :</strong>
                      <p className="leading-relaxed text-slate-600">
                        {primary.emotionalState}
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1 font-semibold">Action de l'élixir :</strong>
                      <p className="leading-relaxed text-slate-600">
                        {primary.flowerAction}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-medium text-[#0906af]">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>3 à 4 gouttes, 4 fois par jour</span>
                  </div>
                  <a
                    href={primary.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-[#0906af] transition-colors"
                  >
                    <span>Fiche flacon Puravida</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* FLOWER 2 */}
              <div className="bg-slate-50/70 rounded-2xl border-2 border-emerald-600/30 hover:border-emerald-600 transition-all p-6 flex flex-col justify-between relative shadow-sm hover:shadow-md">
                <div className="absolute top-0 right-0 px-3.5 py-1 bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider rounded-bl-xl shadow-xs">
                  Fleur n°2 • Accompagnement
                </div>

                <div>
                  {/* Badge & score */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase bg-amber-100 text-amber-900">
                      {secondary.groupName} • Note : {scores[secondary.id]}/3
                    </span>
                  </div>

                  {/* Real Product Image & Headings */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                    <div className="w-28 h-36 shrink-0 bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center shadow-xs">
                      <img
                        src={secondary.imageUrl}
                        alt={secondary.flowerName}
                        className="max-h-full max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="font-serif text-2xl font-bold text-slate-900">
                        {secondary.flowerName}
                      </h3>
                      <p className="text-xs text-slate-500 italic mt-0.5 mb-2">
                        {secondary.flowerSubtitle}
                      </p>
                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-left">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                          Bénéfice clé :
                        </span>
                        <p className="text-xs font-semibold text-emerald-950 leading-snug">
                          {secondary.benefitShort}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Symptoms & Action */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 mt-4">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1 font-semibold">Votre ressenti ciblé :</strong>
                      <p className="leading-relaxed text-slate-600">
                        {secondary.emotionalState}
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1 font-semibold">Action de l'élixir :</strong>
                      <p className="leading-relaxed text-slate-600">
                        {secondary.flowerAction}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-medium text-emerald-700">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>À combiner dans le même verre</span>
                  </div>
                  <a
                    href={secondary.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-emerald-700 transition-colors"
                  >
                    <span>Fiche flacon Puravida</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* SYNERGY EXPLANATION BOX */}
            <div className="bg-gradient-to-r from-blue-50/80 via-emerald-50/50 to-blue-50/80 rounded-2xl p-5 sm:p-6 border border-blue-200/70 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0906af] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900">
                  Pourquoi ce duo agit en synergie pour vous :
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {synergyReason}
                </p>
              </div>
            </div>

            {/* PRIMARY CTA BLOCK: CALL PROFESSIONAL ADVISOR (User Request) */}
            <div
              id="cta-contact-section"
              className="bg-gradient-to-br from-white via-slate-50 to-blue-50/40 rounded-3xl p-6 sm:p-10 border-2 border-[#0906af] shadow-lg text-center relative overflow-hidden"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0906af]/10 text-[#0906af] text-xs font-bold mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>Conseil Personnalisé Gratuit</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-900 font-bold mb-3">
                Je souhaite un conseil personnalisé
              </h3>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
                Chaque sensibilité émotionnelle est unique. Pour affiner la posologie de votre duo de fleurs et échanger de vive voix sur votre situation, notre conseillère professionnelle est à votre disposition directe.
              </p>

              {/* Main Call Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
                <a
                  id="cta-call-advisor-button"
                  href={ADVISOR_TEL}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-[#0906af] hover:bg-[#08059d] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5 animate-pulse text-amber-300" />
                  <span>Contactez une conseillère professionnelle</span>
                </a>
              </div>

              {/* Direct phone badge & SMS */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
                <a
                  href={ADVISOR_TEL}
                  className="inline-flex items-center gap-2 text-slate-900 hover:text-[#0906af] text-lg font-bold underline underline-offset-4"
                >
                  <Phone className="w-4 h-4 text-[#0906af]" />
                  <span>{ADVISOR_PHONE}</span>
                </a>

                <span className="text-slate-300 hidden sm:inline">•</span>

                <a
                  href={ADVISOR_SMS}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-900 bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Poser une question par SMS</span>
                </a>
              </div>

              {/* Reassurance pills */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Appel non surtaxé
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Écoute bienveillante & sans engagement
                </span>
                <span className="inline-flex items-center gap-1 text-amber-700 font-medium">
                  <Tag className="w-3.5 h-3.5" /> Code -5% : {PROMO_CODE}
                </span>
              </div>
            </div>

            {/* Score Breakdown for all 5 questions */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center justify-between">
                <span>Détail de vos réponses (5 élixirs analysés)</span>
                <span className="text-[11px] font-normal normal-case text-slate-400">
                  Échelle de 0 à 3
                </span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {QUIZ_QUESTIONS.map((q) => {
                  const score = scores[q.id];
                  const isPrimary = q.id === primary.id;
                  const isSecondary = q.id === secondary.id;
                  return (
                    <div
                      key={q.id}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isPrimary
                          ? 'border-[#0906af] bg-blue-50/60 ring-2 ring-[#0906af]/20'
                          : isSecondary
                          ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-600/20'
                          : 'border-slate-200 bg-white'
                      }`}
                    >
                      <div className="text-[11px] font-bold text-slate-500 uppercase">
                        {q.groupName}
                      </div>
                      <div className="w-12 h-14 mx-auto my-1 flex items-center justify-center">
                        <img
                          src={q.imageUrl}
                          alt={q.flowerName}
                          className="max-h-full max-w-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="font-serif text-sm font-semibold text-slate-900 truncate">
                        {q.flowerName}
                      </div>
                      <div className="flex items-center justify-center gap-1 my-1.5">
                        {[0, 1, 2, 3].map((val) => (
                          <div
                            key={val}
                            className={`w-3.5 h-3.5 rounded-full text-[9px] font-bold flex items-center justify-center ${
                              val <= score
                                ? val === 0
                                  ? 'bg-slate-200 text-slate-600'
                                  : isPrimary
                                  ? 'bg-[#0906af] text-white'
                                  : 'bg-emerald-700 text-white'
                                : 'bg-slate-100 text-slate-300'
                            }`}
                          >
                            {val}
                          </div>
                        ))}
                      </div>
                      <div className="text-[11px] font-medium text-slate-700">
                        Note : <strong>{score}/3</strong>
                      </div>
                      {isPrimary && (
                        <span className="inline-block mt-1 text-[9px] font-bold uppercase text-[#0906af] bg-blue-100 px-1.5 py-0.5 rounded">
                          Fleur 1
                        </span>
                      )}
                      {isSecondary && (
                        <span className="inline-block mt-1 text-[9px] font-bold uppercase text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                          Fleur 2
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Share and Retake Action Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={onRetake}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Refaire le questionnaire</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Duo copié !' : 'Partager mon résultat'}</span>
                </button>

                <a
                  href={ADVISOR_TEL}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0906af] hover:bg-[#08059d] transition-all shadow-sm"
                >
                  <Phone className="w-3 h-3" />
                  <span>Conseillère : {ADVISOR_PHONE}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Naturopathic reassurance box */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-xs">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-slate-900">
              L'accompagnement et la garantie de L'Espace Puravida
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Tous nos élixirs floraux respectent les solarisations originelles du Dr Bach et les normes du laboratoire Deva. Notre conseillère vous oriente gratuitement vers le dosage et le mode de prise les plus adaptés à vos journées au <strong>{ADVISOR_PHONE}</strong>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
