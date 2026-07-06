"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "B.Tech Computer Science",
    college: "PES University",
    review:
      "Aara Education made the admission process completely stress-free. Their guidance helped me choose the right college with confidence.",
  },
  {
    name: "Priya Nair",
    course: "MBA",
    college: "Jain University",
    review:
      "The counsellors genuinely cared about my career goals. They didn't just recommend colleges—they helped me plan my future.",
  },
  {
    name: "Aditya Kumar",
    course: "BBA",
    college: "CMR University",
    review:
      "Professional, transparent and supportive throughout my admission journey. I highly recommend Aara Education.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            SUCCESS STORIES
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            What Our Students Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every admission is a step towards someone's dream. Here are a few
            stories from students we've guided.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((student, index) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full rounded-3xl border-0 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <CardContent className="p-8">

                  <div className="mb-6 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="mr-1 fill-yellow-400 text-yellow-400"
                        size={18}
                      />
                    ))}
                  </div>

                  <p className="leading-8 text-slate-600">
                    "{student.review}"
                  </p>

                  <div className="mt-8 border-t pt-6">

                    <h3 className="font-bold text-slate-900">
                      {student.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {student.course}
                    </p>

                    <p className="text-sm font-medium text-emerald-600">
                      {student.college}
                    </p>

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