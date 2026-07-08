"use client";

import { useState } from "react";

interface StepAcademicsProps {
  onComplete: (data: {
    tenthMarks: number;
    twelfthMarks: number;
    entranceExam: string;
  }) => void;
}

const exams = [
  "KCET",
  "COMEDK",
  "JEE",
  "NEET",
  "None Yet",
];

export default function StepAcademics({
  onComplete,
}: StepAcademicsProps) {
  const [tenth, setTenth] = useState("");
  const [twelfth, setTwelfth] = useState("");
  const [exam, setExam] = useState("");

  const valid =
    tenth !== "" &&
    twelfth !== "" &&
    exam !== "";

  return (
    <div className="mx-auto w-full max-w-3xl">

      <div className="mb-12 text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
          🎓
        </div>

        <h2 className="text-4xl font-black text-slate-900">
          Tell us about your academics
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          This helps us recommend the right colleges and courses.
        </p>

      </div>

      <div className="space-y-8">

        <div>
          <label className="mb-3 block text-lg font-semibold">
            10th Percentage
          </label>

          <input
            type="number"
            min="0"
            max="100"
            value={tenth}
            onChange={(e) => setTenth(e.target.value)}
            placeholder="Example: 89"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-emerald-600"
          />
        </div>

        <div>
          <label className="mb-3 block text-lg font-semibold">
            12th Percentage
          </label>

          <input
            type="number"
            min="0"
            max="100"
            value={twelfth}
            onChange={(e) => setTwelfth(e.target.value)}
            placeholder="Example: 92"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-lg outline-none transition focus:border-emerald-600"
          />
        </div>

        <div>

          <label className="mb-4 block text-lg font-semibold">
            Entrance Exam
          </label>

          <div className="flex flex-wrap gap-3">

            {exams.map((item) => (

              <button
                key={item}
                type="button"
                onClick={() => setExam(item)}
                className={`rounded-xl border px-5 py-3 font-medium transition-all
                  ${
                    exam === item
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-gray-300 bg-white hover:border-emerald-500 hover:bg-emerald-50"
                  }`}
              >
                {item}
              </button>

            ))}

          </div>

        </div>

      </div>

      <div className="mt-12 flex justify-end">

        <button
          type="button"
          disabled={!valid}
          onClick={() =>
            onComplete({
              tenthMarks: Number(tenth),
              twelfthMarks: Number(twelfth),
              entranceExam: exam,
            })
          }
          className="rounded-xl bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continue →
        </button>

      </div>

    </div>
  );
}