"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is career counselling free?",
    answer:
      "Yes. Your first career counselling session with Aara Education is completely free.",
  },
  {
    question: "Which colleges do you work with?",
    answer:
      "We collaborate with reputed colleges and universities across India in Engineering, Management, Commerce, Medical, Law and many other streams.",
  },
  {
    question: "Can you help me choose the right course?",
    answer:
      "Absolutely. Our counsellors understand your interests, academic background and career goals before recommending suitable courses.",
  },
  {
    question: "Do you help with the admission process?",
    answer:
      "Yes. We guide you through applications, documentation, college selection and the complete admission journey.",
  },
  {
    question: "Can working professionals also seek guidance?",
    answer:
      "Yes. We also help graduates and working professionals looking for higher education and career advancement.",
  },
];
export default function FAQ() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Got Questions?
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Everything you need to know before beginning your admission journey.
          </p>

        </div>

        <Accordion className="w-full space-y-4">

          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border bg-white px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-slate-600 leading-7">
                {faq.answer}
              </AccordionContent>

            </AccordionItem>
          ))}

        </Accordion>

      </div>
    </section>
  );
}