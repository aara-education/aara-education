"use client";

import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StepWelcomeProps {
  onStart: () => void;
}

export default function StepWelcome({
  onStart,
}: StepWelcomeProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
        <Compass
          size={48}
          className="text-emerald-600"
        />
      </div>

      <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">
        Welcome to
        <span className="block text-emerald-600">
          Aara Compass™
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-600">
        Discover courses, colleges and career paths
        tailored specifically for you in less than
        two minutes.
      </p>

      <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">

        <div className="rounded-2xl bg-emerald-50 p-5">
          ✅ Personalized Course Matching
        </div>

        <div className="rounded-2xl bg-emerald-50 p-5">
          🏫 College Recommendations
        </div>

        <div className="rounded-2xl bg-emerald-50 p-5">
          💼 Career Guidance
        </div>

        <div className="rounded-2xl bg-emerald-50 p-5">
          ⏱ Takes less than 2 minutes
        </div>

      </div>

      <Button
        size="lg"
        className="mt-12 px-10"
        onClick={onStart}
      >
        🚀 Start My Journey
      </Button>

    </div>
  );
}