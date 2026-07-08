"use client";

import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaUniversity,
  FaHandshake,
  FaBriefcase,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserGraduate />,
    title: "Career Guidance",
    description:
      "Personalized counselling to help you choose the right academic and career path.",
  },
  {
    icon: <FaUniversity />,
    title: "Top Institutions",
    description:
      "Admission support across reputed colleges and universities through trusted partnerships.",
  },
  {
    icon: <FaHandshake />,
    title: "End-to-End Support",
    description:
      "From applications to admission confirmation, we guide you through every step.",
  },
  {
    icon: <FaBriefcase />,
    title: "Career Focused",
    description:
      "Helping students build careers, not just secure admissions.",
  },
];

export default function WhyChooseAara() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            WHY CHOOSE AARA
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            More Than Admissions.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We help students confidently choose the right course,
            the right institution and the right career path with
            expert guidance and trusted partnerships.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}