"use client";

interface StepLocationProps {
  value?: string;
  onSelect: (location: string) => void;
}

const locations = [
  {
    title: "Bangalore",
    emoji: "🏙️",
  },
  {
    title: "Karnataka",
    emoji: "🌿",
  },
  {
    title: "Anywhere in India",
    emoji: "🇮🇳",
  },
  {
    title: "I'm Open Anywhere",
    emoji: "🌍",
  },
];

export default function StepLocation({
  value,
  onSelect,
}: StepLocationProps) {
  return (
    <div className="mx-auto w-full max-w-4xl">

      <div className="mb-12 text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
          📍
        </div>

        <h2 className="text-4xl font-black text-slate-900">
          Where would you like to study?
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Choose your preferred study destination.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {locations.map((location) => (

          <button
            key={location.title}
            type="button"
            onClick={() => onSelect(location.title)}
            className={`rounded-3xl border p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
            ${
              value === location.title
                ? "border-emerald-600 bg-emerald-50"
                : "border-gray-200 bg-white"
            }`}
          >

            <div className="text-5xl">
              {location.emoji}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {location.title}
            </h3>

          </button>

        ))}

      </div>

    </div>
  );
}