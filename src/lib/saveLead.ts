import { supabase } from "./supabaseClient";
import { StudentProfile } from "@/components/compass/types";

export async function saveLead(profile: StudentProfile) {
  const { data, error } = await supabase.from("leads").insert([
    {
      name: profile.name,
      phone: profile.phone,
      email: profile.email,
      source: "compass_quiz",
      interested_course: profile.interest,
      tenth_marks: profile.tenthMarks ? String(profile.tenthMarks) : null,
      twelfth_marks: profile.twelfthMarks ? String(profile.twelfthMarks) : null,
      location: profile.location ?? null,
      budget: profile.budget ?? null,
      notes: null,
      stage: "New Lead",
    },
  ]);

  if (error) {
    console.error("Error saving lead:", error.message);
    return { success: false, error: error.message };
  }

  return { success: true, data };
}