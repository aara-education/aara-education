import { Recommendation, Interest } from "./types";

export const interests: {
  id: Interest;
  title: string;
  emoji: string;
}[] = [
  {
    id: "technology",
    title: "Technology",
    emoji: "💻",
  },
  {
    id: "business",
    title: "Business",
    emoji: "💼",
  },
  {
    id: "medical",
    title: "Medical",
    emoji: "🩺",
  },
  {
    id: "law",
    title: "Law",
    emoji: "⚖️",
  },
  {
    id: "creative",
    title: "Creative",
    emoji: "🎨",
  },
  {
    id: "exploring",
    title: "Still Exploring",
    emoji: "🧭",
  },
];

export function getRecommendations(
  interest: Interest
): Recommendation[] {
  switch (interest) {
    case "technology":
      return [
        {
          title: "Artificial Intelligence & Machine Learning",
          description: "Future-ready specialization with strong demand.",
          match: 97,
        },
        {
          title: "Computer Science Engineering",
          description: "Excellent placements and broad opportunities.",
          match: 95,
        },
        {
          title: "Cyber Security",
          description: "Growing field with high industry demand.",
          match: 92,
        },
      ];

    case "business":
      return [
        {
          title: "BBA",
          description: "Build strong management fundamentals.",
          match: 95,
        },
        {
          title: "B.Com",
          description: "Ideal for finance and accounting careers.",
          match: 92,
        },
      ];

    case "medical":
      return [
        {
          title: "B.Sc Nursing",
          description: "High employability with global opportunities.",
          match: 96,
        },
      ];

    case "law":
      return [
        {
          title: "BA LLB",
          description: "Integrated law degree for aspiring advocates.",
          match: 94,
        },
      ];

    case "creative":
      return [
        {
          title: "Bachelor of Design",
          description: "Perfect for UI/UX, Product and Visual Design.",
          match: 95,
        },
      ];

    default:
      return [
        {
          title: "Career Counselling",
          description:
            "Let's discover your strengths before choosing a course.",
          match: 100,
        },
      ];
  }
}