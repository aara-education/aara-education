"use client";

import { interests } from "./data";
import { Interest } from "./types";
import { motion } from "framer-motion";

interface StepInterestProps {
  value?: Interest;
  onSelect: (interest: Interest) => void;
}

export default function StepInterest({
  value,
  onSelect,
}: StepInterestProps) {
  return (
    <div className="mx-auto max-w-5xl">

      <div className="mb-14 text-center">

        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          STEP 1 OF 5
        </span>

        <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
          What excites you the most?
        </h2>

        <p className="mt-5 text-lg text-slate-600">
          Choose the area you're naturally drawn towards.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {interests.map((item, index) => (

          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => onSelect(item.id)}
            className={`rounded-[28px] border p-8 text-left transition-all duration-300
            ${
              value === item.id
                ? "border-emerald-600 bg-emerald-50 shadow-xl"
                : "border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg"
            }`}
          >

            <div className="text-5xl">
              {item.emoji}
            </div>

            <h3 className="mt-8 text-2xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-500">
              Tap to continue
            </p>

          </motion.button>

        ))}

      </div>

    </div>
  );
}