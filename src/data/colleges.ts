export interface College {
  id: string;
  name: string;
  city: string;
  state: string;

  courses: string[];

  exams: string[];

  fees: number;

  avgPackage: number;

  highestPackage: number;

  naac: string;

  nirf?: number;

  website: string;

  image: string;
}

export const colleges: College[] = [
  {
    id: "rvce",

    name: "RV College of Engineering",

    city: "Bangalore",

    state: "Karnataka",

    courses: [
      "Artificial Intelligence & Machine Learning",
      "Computer Science Engineering",
      "Information Science Engineering",
    ],

    exams: [
      "KCET",
      "COMEDK",
    ],

    fees: 325000,

    avgPackage: 1400000,

    highestPackage: 9200000,

    naac: "A+",

    nirf: 99,

    website: "https://www.rvce.edu.in",

    image: "/colleges/rvce.jpg",
  },

  {
    id: "pes",

    name: "PES University",

    city: "Bangalore",

    state: "Karnataka",

    courses: [
      "Artificial Intelligence & Machine Learning",
      "Computer Science Engineering",
      "Electronics",
    ],

    exams: [
      "PESSAT",
      "KCET",
    ],

    fees: 450000,

    avgPackage: 1700000,

    highestPackage: 6500000,

    naac: "A+",

    website: "https://pes.edu",

    image: "/colleges/pes.jpg",
  },
];