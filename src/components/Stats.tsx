"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Building2,
  Users,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    title: "500+ Courses",
    description:
      "Explore undergraduate, postgraduate and professional programs.",
  },
  {
    icon: Building2,
    title: "100+ Partner Colleges",
    description:
      "Trusted institutions across India for quality education.",
  },
  {
    icon: Users,
    title: "Personal Guidance",
    description:
      "One-to-one counselling from course selection to admission.",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            WHY STUDENTS CHOOSE AARA
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Guidance That Goes Beyond Admissions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We don't just help students get admitted. We help them make
            confident academic and career decisions that shape their future.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="group h-full rounded-3xl border-0 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 font-semibold text-emerald-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn More
                      <ArrowRight size={18} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}