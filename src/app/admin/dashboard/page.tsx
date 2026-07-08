"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const STAGE_COLORS: Record<string, string> = {
  "New Lead": "bg-blue-100 text-blue-700",
  "Contacted": "bg-yellow-100 text-yellow-700",
  "Counselling Done": "bg-purple-100 text-purple-700",
  "Course Shortlisted": "bg-indigo-100 text-indigo-700",
  "College Applied": "bg-orange-100 text-orange-700",
  "Admitted": "bg-emerald-100 text-emerald-700",
  "Lost": "bg-red-100 text-red-700",
};

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  source: string;
  interested_course: string;
  tenth_marks: string;
  twelfth_marks: string;
  location: string;
  budget: string;
  notes: string;
  stage: string;
  follow_up_date: string | null;
  created_at: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filterStage, setFilterStage] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editStage, setEditStage] = useState("");
  const [editNotes, setEditNotes] = useState("");
  const [editFollowUp, setEditFollowUp] = useState("");
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetchLeads();

    const interval = setInterval(() => {
      fetchLeads();
    }, 15000); // refresh every 15 seconds

    return () => clearInterval(interval);
  }, []);
  
  async function fetchLeads() {
    setLoading(true);
    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLeads((data as Lead[]) || []);
    setLoading(false);
  }

  function openLead(lead: Lead) {
    setSelectedLead(lead);
    setEditStage(lead.stage || "New Lead");
    setEditNotes(lead.notes || "");
    setEditFollowUp(lead.follow_up_date || "");
  }

  async function saveLeadEdit() {
    if (!selectedLead) return;
    const { error } = await supabase
      .from("leads")
      .update({
        stage: editStage,
        notes: editNotes,
        follow_up_date: editFollowUp || null,
      })
      .eq("id", selectedLead.id);

    if (!error) {
      setSelectedLead(null);
      fetchLeads();
    } else {
      alert("Error saving: " + error.message);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin-logout", { method: "POST" });
    router.push("/admin/login");
  }

  const today = new Date().toISOString().split("T")[0];
  const followUpsToday = leads.filter((l) => l.follow_up_date === today);
  const newLeads = leads.filter((l) => l.stage === "New Lead").length;
  const admitted = leads.filter((l) => l.stage === "Admitted").length;

  const filtered = leads.filter((l) => {
    const matchesStage = filterStage === "All" || l.stage === filterStage;
    const matchesSearch =
      l.name?.toLowerCase().includes(search.toLowerCase()) ||
      l.phone?.includes(search);
    return matchesStage && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-6 py-6 text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Aara Education</h1>
            <p className="text-sm text-emerald-50">Leads &amp; Admissions Dashboard</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-lg bg-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/30"
          >
            Log Out
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Stat cards */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Total Leads</p>
            <p className="mt-1 text-3xl font-black text-slate-900">{leads.length}</p>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">New Leads</p>
            <p className="mt-1 text-3xl font-black text-blue-600">{newLeads}</p>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Admitted</p>
            <p className="mt-1 text-3xl font-black text-emerald-600">{admitted}</p>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Follow-ups Today</p>
            <p className="mt-1 text-3xl font-black text-amber-600">{followUpsToday.length}</p>
          </div>
        </div>

        {/* Follow-ups banner */}
        {followUpsToday.length > 0 && (
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-amber-800">
              📞 {followUpsToday.length} follow-up{followUpsToday.length > 1 ? "s" : ""} due today
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {followUpsToday.map((l) => (
                <button
                  key={l.id}
                  onClick={() => openLead(l)}
                  className="rounded-full bg-white px-3 py-1 text-sm font-medium text-amber-800 shadow-sm hover:bg-amber-100"
                >
                  {l.name} · {l.phone}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search & filter */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <input
            placeholder="Search by name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 focus:border-emerald-500 focus:outline-none"
          />
          <select
            value={filterStage}
            onChange={(e) => setFilterStage(e.target.value)}
            className="rounded-xl border border-slate-300 px-4 py-2.5 focus:border-emerald-500 focus:outline-none"
          >
            <option>All</option>
            {Object.keys(STAGE_COLORS).map((stage) => (
              <option key={stage}>{stage}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-slate-50 text-left text-slate-500">
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Course Interest</th>
                  <th className="px-4 py-3 font-semibold">10th %</th>
                  <th className="px-4 py-3 font-semibold">12th %</th>
                  <th className="px-4 py-3 font-semibold">Location</th>
                  <th className="px-4 py-3 font-semibold">Budget</th>
                  <th className="px-4 py-3 font-semibold">Source</th>
                  <th className="px-4 py-3 font-semibold">Stage</th>
                  <th className="px-4 py-3 font-semibold">Follow-up</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={11} className="px-4 py-8 text-center text-slate-400">
                      Loading leads...
                    </td>
                  </tr>
                )}
                {!loading && filtered.length === 0 && (
                  <tr>
                    <td colSpan={11} className="px-4 py-8 text-center text-slate-400">
                      No leads found.
                    </td>
                  </tr>
                )}
                {filtered.map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => openLead(lead)}
                    className="cursor-pointer border-b last:border-0 hover:bg-emerald-50/50"
                  >
                    <td className="px-4 py-3 font-medium text-slate-900">{lead.name}</td>
                    <td className="px-4 py-3">{lead.phone}</td>
                    <td className="px-4 py-3">{lead.email || "—"}</td>
                    <td className="px-4 py-3">{lead.interested_course || "—"}</td>
                    <td className="px-4 py-3">{lead.tenth_marks || "—"}</td>
                    <td className="px-4 py-3">{lead.twelfth_marks || "—"}</td>
                    <td className="px-4 py-3">{lead.location || "—"}</td>
                    <td className="px-4 py-3">{lead.budget || "—"}</td>
                    <td className="px-4 py-3 capitalize">{lead.source?.replace("_", " ")}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${STAGE_COLORS[lead.stage] || "bg-slate-100 text-slate-700"}`}
                      >
                        {lead.stage}
                      </span>
                    </td>
                    <td className="px-4 py-3">{lead.follow_up_date || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit panel */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
          <div className="h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-900">{selectedLead.name}</h2>
                <p className="text-sm text-slate-500">
                  {selectedLead.phone} · {selectedLead.email || "no email"}
                </p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="rounded-lg px-3 py-1.5 text-slate-500 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-4 text-sm">
              <div><span className="text-slate-500">Course:</span> {selectedLead.interested_course || "—"}</div>
              <div><span className="text-slate-500">Source:</span> {selectedLead.source?.replace("_", " ")}</div>
              <div><span className="text-slate-500">10th:</span> {selectedLead.tenth_marks || "—"}</div>
              <div><span className="text-slate-500">12th:</span> {selectedLead.twelfth_marks || "—"}</div>
              <div><span className="text-slate-500">Location:</span> {selectedLead.location || "—"}</div>
              <div><span className="text-slate-500">Budget:</span> {selectedLead.budget || "—"}</div>
            </div>

            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Stage</label>
              <select
                value={editStage}
                onChange={(e) => setEditStage(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
              >
                {Object.keys(STAGE_COLORS).map((stage) => (
                  <option key={stage}>{stage}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Follow-up Date</label>
              <input
                type="date"
                value={editFollowUp}
                onChange={(e) => setEditFollowUp(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">Notes</label>
              <textarea
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                rows={5}
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <button
              onClick={saveLeadEdit}
              className="w-full rounded-xl bg-emerald-600 py-3 font-bold text-white hover:bg-emerald-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}