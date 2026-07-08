"use client";

import { motion } from "framer-motion";
import { Search, BookOpen, University, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Career Counselling",
    description: "Understand your interests, strengths and career goals.",
  },
  {
    icon: BookOpen,
    title: "Course Selection",
    description: "Choose the right program based on your aspirations.",
  },
  {
    icon: University,
    title: "College Admission",
    description: "Apply to trusted institutions with complete support.",
  },
  {
    icon: GraduationCap,
    title: "Build Your Future",
    description: "Begin your academic journey with confidence.",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            ADMISSION PROCESS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Your Journey with Aara
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A simple, transparent process designed to help students
            make confident decisions at every stage.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Icon size={30} />
                </div>

                <div className="mb-4 text-sm font-bold text-emerald-600">
                  Step {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}