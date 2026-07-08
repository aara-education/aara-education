"use client";

import { useEffect } from "react";

interface StepAnalysisProps {
  onComplete: () => void;
}

export default function StepAnalysis({
  onComplete,
}: StepAnalysisProps) {

  useEffect(() => {

    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);

  }, [onComplete]);

  return (

    <div className="mx-auto max-w-3xl text-center">

      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-emerald-100 text-6xl animate-pulse">
        🧠
      </div>

      <h2 className="mt-10 text-5xl font-black text-slate-900">
        Aara AI is analysing...
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        Finding the best colleges and career path for you.
      </p>

      <div className="mt-14 space-y-5">

        <AnalysisItem delay="0s">
          ✓ Understanding your interests
        </AnalysisItem>

        <AnalysisItem delay=".4s">
          ✓ Evaluating academic profile
        </AnalysisItem>

        <AnalysisItem delay=".8s">
          ✓ Comparing colleges
        </AnalysisItem>

        <AnalysisItem delay="1.2s">
          ✓ Predicting career opportunities
        </AnalysisItem>

      </div>

    </div>

  );
}

function AnalysisItem({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: string;
}) {
  return (

    <div
      className="rounded-2xl bg-emerald-50 p-5 text-lg font-medium opacity-0 animate-fadeIn"
      style={{
        animationDelay: delay,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>

  );
}