"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  GraduationCap,
  Building2,
  Brain,
  Star,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const scrollToCompass = () => {
    document
      .getElementById("compass")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToColleges = () => {
    document
      .getElementById("colleges")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-emerald-300/20 blur-[140px]" />

        <div className="absolute right-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-teal-300/20 blur-[120px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-[150px]" />

      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-6 pt-28">

        <div className="grid w-full gap-24 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-5 py-2 backdrop-blur-xl">

              <Sparkles className="h-4 w-4 text-emerald-600" />

              <span className="text-sm font-semibold text-emerald-700">
                AI Powered Career Guidance
              </span>

            </div>

            <h1 className="mt-8 text-6xl font-black leading-[1.05] tracking-tight text-slate-900 lg:text-7xl">

              Find Your

              <span className="block text-emerald-600">
                Dream College
              </span>

              With Confidence

            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">

              Aara Compass helps students discover the right
              college, course and career path using intelligent
              recommendations powered by your interests,
              academics and future goals.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <button
                onClick={scrollToCompass}
                className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-emerald-700"
              >
                Start Aara Compass

                <ArrowRight size={20} />

              </button>

              <button
                onClick={scrollToColleges}
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold transition hover:border-emerald-600 hover:bg-emerald-50"
              >
                Explore Colleges
              </button>

            </div>

            <div className="mt-16 flex flex-wrap gap-10">

              <div>

                <div className="text-4xl font-black text-slate-900">
                  250+
                </div>

                <div className="text-slate-500">
                  Colleges
                </div>

              </div>

              <div>

                <div className="text-4xl font-black text-slate-900">
                  20K+
                </div>

                <div className="text-slate-500">
                  Students Guided
                </div>

              </div>

              <div>

                <div className="text-4xl font-black text-slate-900">
                  95%
                </div>

                <div className="text-slate-500">
                  Success Rate
                </div>

              </div>

            </div>

          </motion.div>

                     {/* RIGHT */}

<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="relative flex items-center justify-center"
>
  {/* Main Glass Card */}

  <div className="relative h-[650px] w-full max-w-[560px]">
   <Image
  src="/images/hero/student.png"
  alt="Student"
  width={900}
  height={1200}
  priority
  className="absolute bottom-[-80px] right-[-120px] z-30 h-[760px] w-auto object-contain"
 />

              {/* Background Glow */}

              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-emerald-400/20 to-teal-300/20 blur-3xl" />

              {/* Glass Card */}

              <div className="absolute left-[-170px] top-[-50px] z-20 w-[350px] rounded-[40px] bg-white p-8 pb-12 shadow-2xl">

                {/* Header */}

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                      Aara Compass™
                    </p>

                    <h3 className="mt-2 text-3xl font-black">
                      AI Recommendation
                    </h3>

                  </div>

                  <div className="rounded-2xl bg-emerald-100 p-4">
                    <Brain className="h-8 w-8 text-emerald-600" />
                  </div>

                </div>

                {/* Match */}

                <div className="mt-5 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 px-8 pt-6 pb-4 text-white">

                  <div className="text-sm uppercase tracking-widest opacity-80">
                    Best Match
                  </div>

                  <div className="mt-2 text-3xl font-black">
                    Artificial Intelligence
                  </div>

                  <div className="mt-1 text-xl opacity-90">
                    & Machine Learning
                  </div>

                  <div className="mt-6 inline-flex rounded-full bg-white/20 px-5 py-2 text-lg font-bold backdrop-blur">
                    ⭐ 97% Match
                  </div>

                </div>

                {/* Features */}

                <div className="mt-8 space-y-5">

                  <Feature
                    icon={<GraduationCap className="h-6 w-6" />}
                    title="250+ Colleges"
                    subtitle="Across Karnataka & India"
                  />

                  <Feature
                    icon={<Building2 className="h-6 w-6" />}
                    title="Personalised Guidance"
                    subtitle="Based on your profile"
                  />

                  <Feature
                    icon={<Brain className="h-6 w-6" />}
                    title="AI Recommendation"
                    subtitle="Course & college matching"
                  />

                </div>

              </div>

              {/* Floating Card 1 */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute left-[110px] top-[60px] z-40 rounded-3xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-xl"
              >

                <div className="flex items-center gap-3">

                  <div className="rounded-full bg-emerald-100 p-3">
                    <Star className="h-5 w-5 text-emerald-600" />
                  </div>

                  <div>

                    <div className="font-bold">
                      4.9/5 Rating
                    </div>

                    <div className="text-sm text-slate-500">
                      Student Satisfaction
                    </div>

                  </div>

                </div>

              </motion.div>

              {/* Floating Card 2 */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="absolute right-[-55px] bottom-[110px] z-40 rounded-3xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-xl"
              >

                <div className="flex items-center gap-3">

                  <div className="rounded-full bg-emerald-100 p-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  </div>

                  <div>

                    <div className="font-bold">
                      20,000+
                    </div>

                    <div className="text-sm text-slate-500">
                      Careers Guided
                    </div>

                  </div>

                </div>

              </motion.div>

                        </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">

          <span className="text-sm font-medium text-slate-500">
            Scroll to Explore
          </span>

          <div className="flex h-12 w-7 justify-center rounded-full border-2 border-emerald-300">

            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mt-2 h-3 w-3 rounded-full bg-emerald-600"
            />

          </div>

        </div>
      </motion.div>

    </section>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function Feature({
  icon,
  title,
  subtitle,
}: FeatureProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-lg">

      <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
        {icon}
      </div>

      <div>

        <h4 className="font-bold text-slate-900">
          {title}
        </h4>

        <p className="text-sm text-slate-500">
          {subtitle}
        </p>

      </div>

    </div>
  );
}