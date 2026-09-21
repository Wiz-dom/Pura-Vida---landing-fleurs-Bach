import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, HelpCircle, ArrowRight, ArrowLeft, RotateCcw, ListFilter, SlidersHorizontal, Sparkles } from 'lucide-react';
import { QuizScores, RatingValue } from '../types';
import { QUIZ_QUESTIONS, RATING_OPTIONS } from '../data/quizData';

interface QuizContainerProps {
  scores: QuizScores;
  onScoreChange: (questionId: keyof QuizScores, value: RatingValue) => void;
  onSubmit: () => void;
  onReset: () => void;
}

export const QuizContainer: React.FC<QuizContainerProps> = ({
  scores,
  onScoreChange,
  onSubmit,
  onReset,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'step' | 'all'>('step');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const currentQuestion = QUIZ_QUESTIONS[currentStepIndex];
  const highestScore = Math.max(...Object.values(scores));

  const handleRatingSelect = (questionId: keyof QuizScores, value: RatingValue) => {
    onScoreChange(questionId, value);
    setErrorMessage(null);

    // If in step mode, auto advance if not on the last question after a subtle pause
    if (viewMode === 'step' && currentStepIndex < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStepIndex((prev) => Math.min(prev + 1, QUIZ_QUESTIONS.length - 1));
      }, 250);
    }
  };

  const handleValidate = () => {
    if (highestScore === 0) {
      setErrorMessage("Veuillez noter au moins une proposition à 1, 2 ou 3 pour identifier votre duo d'élixirs.");
      return;
    }
    onSubmit();
  };

  return (
    <section id="quiz-section" className="py-8 sm:py-12 max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-20">
      {/* Questionnaire Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0906af] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Mini-Test Émotionnel</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-slate-900 font-bold">
              De quel élixir floral avez-vous le plus besoin ?
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Pour chaque proposition, notez de <span className="font-bold text-[#0906af]">0 à 3</span> à quel point vous vous reconnaissez en ce moment.
            </p>
          </div>

          {/* View toggle (Step by Step vs All at once) */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start shrink-0 border border-slate-200">
            <button
              id="mode-step-button"
              type="button"
              onClick={() => setViewMode('step')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'step'
                  ? 'bg-white text-[#0906af] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Guide pas à pas</span>
            </button>
            <button
              id="mode-all-button"
              type="button"
              onClick={() => setViewMode('all')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'all'
                  ? 'bg-white text-[#0906af] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Vue complète</span>
            </button>
          </div>
        </div>

        {/* Rating scale reminder bar */}
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {RATING_OPTIONS.map((opt) => (
            <div
              key={opt.value}
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5"
            >
              <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center shrink-0 text-xs">
                {opt.value}
              </span>
              <span className="text-slate-700 font-medium leading-tight">
                {opt.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* STEP BY STEP VIEW */}
      {viewMode === 'step' && (
        <div id="step-mode-wrapper" className="space-y-6">
          {/* Progress bar */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 flex items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#0906af] uppercase tracking-wide">
                Affirmation {currentStepIndex + 1} sur {QUIZ_QUESTIONS.length}
              </span>
              <span className="text-xs text-slate-500">
                ({currentQuestion.groupName})
              </span>
            </div>

            {/* Step circles */}
            <div className="flex items-center gap-1.5">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const isCurrent = idx === currentStepIndex;
                const isAnswered = scores[q.id] > 0;
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentStepIndex(idx)}
                    className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-[#0906af] text-white ring-2 ring-[#0906af]/30 scale-105'
                        : isAnswered
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                    title={`Aller au ${q.groupName}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Card with Motion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#0906af]/10 text-[#0906af]">
                  {currentQuestion.groupName}
                </span>
                <span className="text-xs text-slate-500">
                  Note actuelle : <strong className="text-slate-900 text-sm">{scores[currentQuestion.id]}/3</strong>
                </span>
              </div>

              {/* Proposition statement */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="w-16 h-20 shrink-0 bg-slate-50 rounded-xl border border-slate-200 p-1.5 hidden sm:flex items-center justify-center">
                  <img
                    src={currentQuestion.imageUrl}
                    alt={currentQuestion.flowerName}
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <blockquote className="font-serif text-xl sm:text-2xl text-slate-900 font-medium leading-snug">
                    « {currentQuestion.statement} »
                  </blockquote>
                  <p className="text-xs text-slate-500 mt-1">
                    À quel point vous reconnaissez-vous dans cette affirmation en ce moment ?
                  </p>
                </div>
              </div>

              {/* Options 0 to 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {RATING_OPTIONS.map((option) => {
                  const isSelected = scores[currentQuestion.id] === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleRatingSelect(currentQuestion.id, option.value)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 cursor-pointer ${
                        isSelected
                          ? 'border-[#0906af] bg-blue-50/70 ring-2 ring-[#0906af]/20 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#0906af] text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {isSelected ? <Check className="w-4 h-4" /> : option.value}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-slate-900">
                          {option.label}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {option.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCurrentStepIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={currentStepIndex === 0}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    currentStepIndex === 0
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'text-slate-600 hover:bg-slate-100 cursor-pointer'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Précédent</span>
                </button>

                {currentStepIndex < QUIZ_QUESTIONS.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStepIndex((prev) => Math.min(prev + 1, QUIZ_QUESTIONS.length - 1))}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-semibold bg-[#0906af] text-white hover:bg-[#08059d] active:scale-95 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Suivant</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleValidate}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold bg-[#0906af] text-white hover:bg-[#08059d] active:scale-95 transition-all shadow-md cursor-pointer animate-pulse hover:animate-none"
                  >
                    <span>Voir mon duo floral</span>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* ALL AT ONCE VIEW */}
      {viewMode === 'all' && (
        <div id="all-mode-wrapper" className="space-y-4">
          {QUIZ_QUESTIONS.map((q, idx) => (
            <div
              key={q.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs transition-all hover:border-slate-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-[#0906af] uppercase tracking-wide">
                    {q.groupName}
                  </span>
                </div>
                <span className="text-xs text-slate-500">
                  Note attribuée : <strong className="text-slate-900">{scores[q.id]}/3</strong>
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-14 shrink-0 bg-slate-50 rounded-lg border border-slate-200 p-1 hidden sm:flex items-center justify-center">
                  <img
                    src={q.imageUrl}
                    alt={q.flowerName}
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="font-serif text-lg sm:text-xl text-slate-900 font-medium leading-snug">
                  « {q.statement} »
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {RATING_OPTIONS.map((option) => {
                  const isSelected = scores[q.id] === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleRatingSelect(q.id, option.value)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#0906af] bg-blue-50/70 ring-1 ring-[#0906af]'
                          : 'border-slate-200 bg-slate-50 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-[#0906af] text-white'
                              : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {option.value}
                        </span>
                        <span className="text-xs font-medium text-slate-900 leading-tight">
                          {option.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Submit card for All-at-once view */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-slate-900">Vous avez évalué les 5 propositions</h4>
              <p className="text-xs text-slate-500">
                Découvrez votre synergie personnalisée de 2 fleurs de Bach pour cet automne.
              </p>
            </div>
            <button
              type="button"
              onClick={handleValidate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold bg-[#0906af] text-white hover:bg-[#08059d] active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <span>Découvrir mon duo floral</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>
      )}

      {/* Error message */}
      {errorMessage && (
        <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-center gap-2">
          <HelpCircle className="w-4 h-4 shrink-0 text-amber-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Footer reset button */}
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Réinitialiser les réponses</span>
        </button>
      </div>
    </section>
  );
};
