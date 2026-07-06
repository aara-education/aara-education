"use client";

import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-12 text-white shadow-2xl">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              START YOUR JOURNEY TODAY
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight">
              Your Dream College
              <br />
              Starts with One Conversation.
            </h2>

            <p className="mt-8 text-lg leading-8 text-emerald-50">
              Speak with an expert counsellor and receive personalized guidance
              to choose the right course, college and career path.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-emerald-50"
              >
                Book Free Counselling
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-emerald-700"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}