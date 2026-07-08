"use client";

import { useState } from "react";

interface StepContactProps {
  onComplete: (data: { name: string; phone: string; email: string }) => void;
}

export default function StepContact({ onComplete }: StepContactProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const isValid = name.trim() !== "" && phone.trim().length >= 10 && email.trim() !== "" && email.includes("@");

  return (
    <div className="mx-auto max-w-2xl">
      <div className="text-center">
        <h2 className="text-4xl font-black text-slate-900">
          Almost there!
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Enter your details to unlock your personalized recommendation.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          disabled={!isValid}
          onClick={() => onComplete({ name, phone, email })}
          className="rounded-xl bg-emerald-600 px-10 py-4 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          See My Results
        </button>
      </div>
    </div>
  );
}