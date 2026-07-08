export interface Course {

  id: string;

  title: string;

  interest: string[];

  minMarks: number;

  exams: string[];

  budget: string[];

  salary: string;

}

export const courses: Course[] = [

{
id:"aiml",

title:"Artificial Intelligence & Machine Learning",

interest:["technology"],

minMarks:70,

exams:["KCET","COMEDK","JEE"],

budget:[
"₹2 - ₹5 Lakhs",
"₹5 - ₹10 Lakhs",
"No Budget Limit"
],

salary:"₹8–18 LPA"

},

{

id:"bba",

title:"Bachelor of Business Administration",

interest:["business"],

minMarks:50,

exams:["None Yet"],

budget:[
"₹1 - ₹2 Lakhs",
"₹2 - ₹5 Lakhs"
],

salary:"₹5–12 LPA"

},

{

id:"mbbs",

title:"MBBS",

interest:["medical"],

minMarks:85,

exams:["NEET"],

budget:[
"₹5 - ₹10 Lakhs",
"No Budget Limit"
],

salary:"₹10–30 LPA"

}

];