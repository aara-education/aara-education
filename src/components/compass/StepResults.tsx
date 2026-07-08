"use client";

import { generateRecommendation } from "@/lib/recommendationEngine";

interface StepResultsProps {
  profile: any;
}

export default function StepResults({
  profile,
}: StepResultsProps) {
  const recommendation = generateRecommendation(profile);

  return (
    <div className="mx-auto max-w-5xl">

      <div className="text-center">

        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-5xl">
          🎯
        </div>

        <h2 className="text-5xl font-black text-slate-900">
          Your Career Match
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Based on your responses, here's our recommendation.
        </p>

      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">

        {/* Left Card */}

        <div className="rounded-3xl border bg-white p-8 shadow-lg">

          <div className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Best Course
          </div>

          <h3 className="mt-4 text-3xl font-black">
            {recommendation.course}
          </h3>

          <div className="mt-8 inline-flex rounded-full bg-emerald-100 px-5 py-2 text-xl font-bold text-emerald-700">
            {recommendation.match}% Match
          </div>

          <div className="mt-10">

            <h4 className="font-bold text-slate-900">
              Expected Salary
            </h4>

            <p className="mt-2 text-2xl font-bold text-emerald-600">
              {recommendation.salary}
            </p>

          </div>

        </div>

        {/* Right Card */}

        <div className="rounded-3xl border bg-white p-8 shadow-lg">

          <h3 className="text-2xl font-bold">
            Recommended Colleges
          </h3>

          <div className="mt-6 space-y-4">

            {recommendation.colleges.map((college) => (

              <div
                key={college}
                className="rounded-xl bg-slate-50 p-4"
              >
                🏫 {college}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Reason */}

      <div className="mt-10 rounded-3xl border bg-emerald-50 p-8">

        <h3 className="text-2xl font-bold">
          Why this recommendation?
        </h3>

        <p className="mt-4 text-lg leading-8 text-slate-700">
          {recommendation.reason}
        </p>

      </div>

      {/* CTA */}

      <div className="mt-12 flex flex-wrap justify-center gap-5">

        <button className="rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white hover:bg-emerald-700">
          Book Free Counselling
        </button>

        <button className="rounded-xl border px-8 py-4 font-semibold hover:bg-slate-50">
          Explore Colleges
        </button>

      </div>

    </div>
  );
}