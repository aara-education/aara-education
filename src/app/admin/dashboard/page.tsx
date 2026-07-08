"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const STAGE_COLORS: Record<string, string> = {
  "New Lead": "#3b82f6",
  "Contacted": "#eab308",
  "Counselling Done": "#a855f7",
  "Course Shortlisted": "#6366f1",
  "College Applied": "#f97316",
  "Admitted": "#22c55e",
  "Lost": "#ef4444",
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
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filterStage, setFilterStage] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editStage, setEditStage] = useState("");
  const [editNotes, setEditNotes] = useState("");
  const [editFollowUp, setEditFollowUp] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLeads((data as Lead[]) || []);
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

  const today = new Date().toISOString().split("T")[0];
  const followUpsToday = leads.filter((l) => l.follow_up_date === today);

  const filtered = leads.filter((l) => {
    const matchesStage = filterStage === "All" || l.stage === filterStage;
    const matchesSearch =
      l.name?.toLowerCase().includes(search.toLowerCase()) ||
      l.phone?.includes(search);
    return matchesStage && matchesSearch;
  });

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Aara Education - Leads Dashboard</h1>

      {followUpsToday.length > 0 && (
        <div style={{ background: "#fef9c3", padding: 12, borderRadius: 8, marginBottom: 20 }}>
          <strong>Follow-ups Today ({followUpsToday.length})</strong>
          <ul>
            {followUpsToday.map((l) => (
              <li key={l.id}>{l.name} - {l.phone}</li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
        <input
          placeholder="Search by name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: 8, flex: 1 }}
        />
        <select
          value={filterStage}
          onChange={(e) => setFilterStage(e.target.value)}
          style={{ padding: 8 }}
        >
          <option>All</option>
          {Object.keys(STAGE_COLORS).map((stage) => (
            <option key={stage}>{stage}</option>
          ))}
        </select>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid #ddd" }}>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Course Interest</th>
              <th>10th %</th>
              <th>12th %</th>
              <th>Location</th>
              <th>Budget</th>
              <th>Source</th>
              <th>Stage</th>
              <th>Follow-up</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((lead) => (
              <tr
                key={lead.id}
                onClick={() => openLead(lead)}
                style={{ borderBottom: "1px solid #eee", cursor: "pointer" }}
              >
                <td>{lead.name}</td>
                <td>{lead.phone}</td>
                <td>{lead.email || "-"}</td>
                <td>{lead.interested_course || "-"}</td>
                <td>{lead.tenth_marks || "-"}</td>
                <td>{lead.twelfth_marks || "-"}</td>
                <td>{lead.location || "-"}</td>
                <td>{lead.budget || "-"}</td>
                <td>{lead.source}</td>
                <td>
                  <span
                    style={{
                      background: STAGE_COLORS[lead.stage] || "#999",
                      color: "white",
                      padding: "2px 8px",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  >
                    {lead.stage}
                  </span>
                </td>
                <td>{lead.follow_up_date || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedLead && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: 360,
            height: "100%",
            background: "white",
            boxShadow: "-2px 0 12px rgba(0,0,0,0.15)",
            padding: 24,
            overflowY: "auto",
          }}
        >
          <button
            onClick={() => setSelectedLead(null)}
            style={{ marginBottom: 16, padding: "6px 12px" }}
          >
            Close
          </button>

          <h2>{selectedLead.name}</h2>
          <p>{selectedLead.phone} · {selectedLead.email || "no email"}</p>

          <div style={{ marginTop: 16 }}>
            <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
              Stage
            </label>
            <select
              value={editStage}
              onChange={(e) => setEditStage(e.target.value)}
              style={{ width: "100%", padding: 8 }}
            >
              {Object.keys(STAGE_COLORS).map((stage) => (
                <option key={stage}>{stage}</option>
              ))}
            </select>
          </div>

          <div style={{ marginTop: 16 }}>
            <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
              Follow-up Date
            </label>
            <input
              type="date"
              value={editFollowUp}
              onChange={(e) => setEditFollowUp(e.target.value)}
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
            />
          </div>

          <div style={{ marginTop: 16 }}>
            <label style={{ display: "block", marginBottom: 4, fontWeight: "bold" }}>
              Notes
            </label>
            <textarea
              value={editNotes}
              onChange={(e) => setEditNotes(e.target.value)}
              rows={5}
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
            />
          </div>

          <button
            onClick={saveLeadEdit}
            style={{
              marginTop: 20,
              width: "100%",
              padding: 10,
              background: "#22c55e",
              color: "white",
              border: "none",
              borderRadius: 8,
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}