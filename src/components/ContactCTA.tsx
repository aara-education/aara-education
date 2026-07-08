"use client";

import { useState } from "react";
import { ArrowRight, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";

export default function ContactCTA() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isValid = name.trim() !== "" && phone.trim().length >= 10;

  async function handleSubmit() {
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert([
      {
        name,
        phone,
        email,
        source: "counselling_booking",
        stage: "New Lead",
      },
    ]);
    setSubmitting(false);

    if (!error) {
      setSubmitted(true);
    } else {
      alert("Something went wrong, please try again.");
    }
  }

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
                onClick={() => setShowForm(true)}
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

      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 24,
              padding: 32,
              width: "90%",
              maxWidth: 420,
              position: "relative",
            }}
          >
            <button
              onClick={() => {
                setShowForm(false);
                setSubmitted(false);
                setName("");
                setPhone("");
                setEmail("");
              }}
              style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", cursor: "pointer" }}
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <h3 style={{ fontSize: 24, fontWeight: "bold", color: "#059669" }}>
                  Thank you!
                </h3>
                <p style={{ marginTop: 12, color: "#475569" }}>
                  Our counsellor will call you shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: 22, fontWeight: "bold", color: "#0f172a" }}>
                  Book Free Counselling
                </h3>
                <p style={{ marginTop: 6, color: "#64748b", fontSize: 14 }}>
                  Fill in your details and we'll call you shortly.
                </p>

                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: 10, borderRadius: 10, border: "1px solid #cbd5e1" }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ padding: 10, borderRadius: 10, border: "1px solid #cbd5e1" }}
                  />
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: 10, borderRadius: 10, border: "1px solid #cbd5e1" }}
                  />
                </div>

                <button
                  disabled={!isValid || submitting}
                  onClick={handleSubmit}
                  style={{
                    marginTop: 20,
                    width: "100%",
                    padding: 12,
                    borderRadius: 10,
                    background: isValid ? "#059669" : "#94a3b8",
                    color: "white",
                    fontWeight: "bold",
                    border: "none",
                    cursor: isValid ? "pointer" : "not-allowed",
                  }}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}