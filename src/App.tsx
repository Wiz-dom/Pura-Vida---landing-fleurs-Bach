/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { QuizContainer } from './components/QuizContainer';
import { ResultCard } from './components/ResultCard';
import { TrustSection } from './components/TrustSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuizScores, QuizResult, RatingValue, QuizQuestion } from './types';
import {
  QUIZ_QUESTIONS,
  ADVISOR_PHONE,
  ADVISOR_TEL,
  DEFAULT_COMPLEMENTARY_MAP,
  SYNERGY_EXPLANATIONS,
} from './data/quizData';
import { PhoneCall } from 'lucide-react';

const INITIAL_SCORES: QuizScores = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
};

export default function App() {
  const [scores, setScores] = useState<QuizScores>(INITIAL_SCORES);
  const [result, setResult] = useState<QuizResult | null>(null);

  const quizRef = useRef<HTMLDivElement | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);

  const handleScoreChange = (questionId: keyof QuizScores, value: RatingValue) => {
    setScores((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleStartQuiz = () => {
    const el = document.getElementById('quiz-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    // Determine questions by score ranking
    const entries = Object.entries(scores) as [keyof QuizScores, RatingValue][];
    
    // Sort descending by score
    const sorted = [...entries].sort((a, b) => b[1] - a[1]);
    const maxScore = sorted[0][1];

    if (maxScore === 0) {
      return;
    }

    const primaryQuestion = QUIZ_QUESTIONS.find((q) => q.id === sorted[0][0]) || QUIZ_QUESTIONS[0];
    
    // Determine the 2nd flower:
    // If the 2nd sorted item has a rating > 0, use it.
    // Otherwise, select the natural harmonic complementary flower for autumn.
    let secondaryQuestion: QuizQuestion;
    if (sorted.length > 1 && sorted[1][1] > 0 && sorted[1][0] !== primaryQuestion.id) {
      secondaryQuestion = QUIZ_QUESTIONS.find((q) => q.id === sorted[1][0]) || QUIZ_QUESTIONS[1];
    } else {
      const compId = DEFAULT_COMPLEMENTARY_MAP[primaryQuestion.id];
      secondaryQuestion = QUIZ_QUESTIONS.find((q) => q.id === compId) || QUIZ_QUESTIONS[1];
    }

    // Determine the synergy explanation
    const synergyKey = `${primaryQuestion.id}-${secondaryQuestion.id}`;
    const synergyReason =
      SYNERGY_EXPLANATIONS[synergyKey] ||
      `L'alliance de ${primaryQuestion.flowerName} et ${secondaryQuestion.flowerName} crée une synergie bienfaisante : elle agit sur votre sensibilité immédiate tout en installant un ancrage serein pour toute la saison.`;

    const calculatedResult: QuizResult = {
      primary: primaryQuestion,
      secondary: secondaryQuestion,
      scores,
      maxScore,
      synergyReason,
    };

    setResult(calculatedResult);

    // Scroll to result
    setTimeout(() => {
      const el = document.getElementById('result-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleRetake = () => {
    setScores(INITIAL_SCORES);
    setResult(null);
    const el = document.getElementById('quiz-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
      <Header />

      <main className="grow">
        <HeroSection onStartQuiz={handleStartQuiz} />

        <div ref={quizRef}>
          <QuizContainer
            scores={scores}
            onScoreChange={handleScoreChange}
            onSubmit={handleSubmit}
            onReset={handleRetake}
          />
        </div>

        {result && (
          <div ref={resultRef}>
            <ResultCard result={result} onRetake={handleRetake} />
          </div>
        )}

        <TrustSection />
        <FaqSection />
      </main>

      <Footer />

      {/* Floating Quick Action Button for Mobile: Call Professional Advisor */}
      <aside aria-label="Conseillère bien-être" className="fixed bottom-4 right-4 z-30 sm:hidden">
        <a
          id="mobile-floating-call-button"
          href={ADVISOR_TEL}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#0906af] text-white text-xs font-bold shadow-xl border border-blue-300/40 active:scale-95 animate-bounce hover:animate-none"
        >
          <PhoneCall className="w-4 h-4 text-amber-300" />
          <span>Conseil : {ADVISOR_PHONE}</span>
        </a>
      </aside>
    </div>
  );
}

