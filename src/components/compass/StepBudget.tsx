"use client";

interface StepBudgetProps {
  value?: string;
  onSelect: (budget: string) => void;
}

const budgets = [
  {
    title: "₹1 - ₹2 Lakhs",
    subtitle: "Affordable",
    emoji: "💰",
  },
  {
    title: "₹2 - ₹5 Lakhs",
    subtitle: "Most Popular",
    emoji: "🎓",
  },
  {
    title: "₹5 - ₹10 Lakhs",
    subtitle: "Premium",
    emoji: "🏛️",
  },
  {
    title: "No Budget Limit",
    subtitle: "Best Available",
    emoji: "⭐",
  },
  {
    title: "Scholarship Required",
    subtitle: "Need Financial Aid",
    emoji: "🏅",
  },
];

export default function StepBudget({
  value,
  onSelect,
}: StepBudgetProps) {
  return (
    <div className="mx-auto w-full max-w-4xl">

      <div className="mb-12 text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
          💰
        </div>

        <h2 className="text-4xl font-black text-slate-900">
          What's your budget?
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Choose your preferred annual tuition budget.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {budgets.map((budget) => (

          <button
            key={budget.title}
            type="button"
            onClick={() => onSelect(budget.title)}
            className={`rounded-3xl border p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
            ${
              value === budget.title
                ? "border-emerald-600 bg-emerald-50"
                : "border-gray-200 bg-white"
            }`}
          >

            <div className="text-5xl">
              {budget.emoji}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {budget.title}
            </h3>

            <p className="mt-2 text-gray-500">
              {budget.subtitle}
            </p>

          </button>

        ))}

      </div>

    </div>
  );
}