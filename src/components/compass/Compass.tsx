"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

import StepWelcome from "./StepWelcome";
import StepInterest from "./StepInterest";
import StepAcademics from "./StepAcademics";
import StepLocation from "./StepLocation";
import StepBudget from "./StepBudget";
import StepResults from "./StepResults";
import StepAnalysis from "./StepAnalysis";

import { StudentProfile, CompassStep } from "./types";

export default function Compass() {
const steps = [
  "welcome",
  "interest",
  "academics",
  "location",
  "budget",
  "analysis",
  "results",
];

  const [step, setStep] = useState(0);

  const [profile, setProfile] = useState<StudentProfile>({});

  const next = () => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const back = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <section id="compass" className="relative bg-gradient-to-b from-emerald-50 via-white to-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            🧭 Aara Compass™
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Discover Your Direction.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Answer a few simple questions and receive personalized
            course and college recommendations.
          </p>

        </div>

        {/* Progress */}

        <div className="mb-10 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-emerald-600 transition-all duration-500"
            style={{
              width: `${((step + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        {/* Main Card */}

        <Card className="rounded-[36px] border-0 p-10 shadow-2xl">

          <div className="min-h-[520px]">

            {/* Welcome */}

            {steps[step] === "welcome" && (
              <StepWelcome onStart={next} />
            )}

            {/* Interest */}

            {steps[step] === "interest" && (
              <StepInterest
                value={profile.interest}
                onSelect={(selected) => {
                  setProfile((prev) => ({
                    ...prev,
                    interest: selected,
                  }));

                  next();
                }}
              />
            )}

            {/* Academics */}

            {steps[step] === "academics" && (
              <StepAcademics
                onComplete={(data) => {
                  setProfile((prev) => ({
                    ...prev,
                    ...data,
                  }));

                  next();
                }}
              />
            )}

            {/* Location */}

            {steps[step] === "location" && (
              <StepLocation
                value={profile.location}
                onSelect={(location) => {
                  setProfile((prev) => ({
                    ...prev,
                    location,
                  }));

                  next();
                }}
              />
            )}

            {/* Budget */}

            {steps[step] === "budget" && (
  <StepBudget
    value={profile.budget}
    onSelect={(budget) => {
      setProfile((prev) => ({
        ...prev,
        budget,
      }));

      next();
    }}
  />
)}
{steps[step] === "analysis" && (
  <StepAnalysis
    onComplete={next}
  />
)}

            {/* Results */}

            {steps[step] === "results" && (
  <StepResults profile={profile} />
)}

          </div>

          {/* Back Button */}

          {step > 0 && (
            <div className="mt-10">

              <button
                onClick={back}
                className="flex items-center rounded-xl border border-gray-300 px-5 py-3 font-medium transition hover:bg-gray-50"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
              </button>

            </div>
          )}

        </Card>

      </div>
    </section>
  );
}