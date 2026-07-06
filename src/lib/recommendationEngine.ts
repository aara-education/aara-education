import { courses } from "./courseDatabase";

export interface Recommendation {
  course: string;
  match: number;
  colleges: string[];
  salary: string;
  reason: string;
}

export function generateRecommendation(profile: any): Recommendation {
  let bestCourse = null;
  let bestScore = -1;

  for (const course of courses) {
    let score = 0;

    // Interest (40 pts)
    if (course.interest.includes(profile.interest)) {
      score += 40;
    }

    // Marks (20 pts)
    if ((profile.twelfthMarks ?? 0) >= course.minMarks) {
      score += 20;
    }

    // Entrance Exam (20 pts)
    if (course.exams.includes(profile.entranceExam)) {
      score += 20;
    }

    // Budget (20 pts)
    if (course.budget.includes(profile.budget)) {
      score += 20;
    }

    if (score > bestScore) {
      bestScore = score;
      bestCourse = course;
    }
  }

  if (!bestCourse) {
    return {
      course: "Career Exploration",
      match: 50,
      colleges: ["Aara Counselling"],
      salary: "Varies",
      reason:
        "We recommend speaking with an Aara counsellor to explore suitable options.",
    };
  }

  // Temporary college mapping
  const collegeMap: Record<string, string[]> = {
    aiml: [
      "RV College of Engineering",
      "PES University",
      "MS Ramaiah Institute of Technology",
      "CMR Institute of Technology",
    ],
    bba: [
      "Christ University",
      "Jain University",
      "St. Joseph's University",
      "Mount Carmel College",
    ],
    mbbs: [
      "KIMS",
      "Vydehi Institute",
      "BGS Medical College",
      "Rajarajeswari Medical College",
    ],
  };

  return {
    course: bestCourse.title,
    match: bestScore,
    colleges: collegeMap[bestCourse.id] ?? [],
    salary: bestCourse.salary,
    reason: `This recommendation matches your interest, academic performance, entrance exam and budget.`,
  };
}