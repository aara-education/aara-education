"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ArrowRight } from "lucide-react";

const colleges = [
  "RV College of Engineering",
  "PES University",
  "Ramaiah Institute of Technology",
  "Jain University",
  "CMR University",
  "Dayananda Sagar University",
  "Presidency University",
  "REVA University",
];

export default function PartnerColleges() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            PARTNER INSTITUTIONS
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Learn with India's Leading Colleges
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We work with reputed institutions to help students find the
            right academic environment for their goals.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {colleges.map((college, index) => (
            <motion.div
              key={college}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="group h-full cursor-pointer rounded-3xl border-0 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="flex h-full flex-col items-center justify-center p-8 text-center">

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    <GraduationCap size={30} />
                  </div>

                  <h3 className="font-bold text-slate-900">
                    {college}
                  </h3>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Explore
                    <ArrowRight size={16} />
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}