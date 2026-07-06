"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaLaptopCode,
  FaBookOpen,
  FaBriefcase,
  FaUserGraduate,
} from "react-icons/fa";

const courses = [
  {
    icon: <FaLaptopCode />,
    title: "Engineering",
    subtitle: "B.E | B.Tech | Diploma",
  },
  {
    icon: <FaUserGraduate />,
    title: "Medical & Allied",
    subtitle: "BSc | Nursing | Pharmacy",
  },
  {
    icon: <FaBriefcase />,
    title: "Management",
    subtitle: "BBA | MBA | PGDM",
  },
  {
    icon: <FaBookOpen />,
    title: "Law",
    subtitle: "LLB | BA LLB | BBA LLB",
  },
  {
    icon: <FaGraduationCap />,
    title: "Emerging Technologies",
    subtitle: "AI | Data Science | Cyber Security",
  },
  {
    icon: <FaUniversity />,
    title: "Commerce & Arts",
    subtitle: "BCom | BA | BCA | MCA",
  },
];

export default function Courses() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            EXPLORE PROGRAMS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Find Your Perfect Course
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore undergraduate, postgraduate and professional
            programs offered by our partner institutions.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                {course.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {course.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {course.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}