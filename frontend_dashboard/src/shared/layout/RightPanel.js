import React from "react";
import SectionCard from "../ui/SectionCard";
import { IconCheckCircle, IconShield, IconSparkles } from "../ui/icons";

/**
 * PUBLIC_INTERFACE
 * Right-side panel for persona validation and actions.
 */
export default function RightPanel() {
  return (
    <aside className="min-w-0">
      <div className="rounded-2xl border border-slate-200 bg-surface shadow-soft">
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-text">Persona Validation</div>
              <div className="mt-1 text-sm text-muted">
                Detect gaps, contradictions, and missing constraints.
              </div>
            </div>
            <div className="h-10 w-10 rounded-xl bg-success/10 text-success flex items-center justify-center">
              <IconShield className="text-success" />
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-success text-white flex items-center justify-center">
                <IconCheckCircle className="text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text">Overall Score</div>
                <div className="text-xs text-muted">High confidence baseline</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-muted">
                <span>Confidence</span>
                <span className="font-semibold text-text">0.92</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                <div className="h-2 w-[92%] rounded-full bg-success" />
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              {[
                { label: "Constraints", status: "Complete", ok: true },
                { label: "Role Clarity", status: "Good", ok: true },
                { label: "Skill Signals", status: "Needs 1 update", ok: false }
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2"
                >
                  <span className="font-medium text-text">{row.label}</span>
                  <span className={row.ok ? "text-success font-semibold" : "text-primary font-semibold"}>
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2">
            <button
              type="button"
              className="rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition"
            >
              Apply Suggested Fixes
            </button>
            <button
              type="button"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Export Persona
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <SectionCard title="Next Best Actions" subtitle="Automations based on your current persona.">
          <div className="space-y-2">
            {[
              { title: "Generate role-aligned resume bullets", icon: IconSparkles },
              { title: "Build a 2-week application plan", icon: IconSparkles },
              { title: "Draft outreach messages (3 variants)", icon: IconSparkles }
            ].map((a) => {
              const Icon = a.icon;
              return (
                <button
                  key={a.title}
                  type="button"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-left hover:bg-slate-50 transition flex items-center gap-2"
                >
                  <span className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="text-primary" />
                  </span>
                  <span className="text-sm font-semibold text-text">{a.title}</span>
                </button>
              );
            })}
          </div>
        </SectionCard>
      </div>
    </aside>
  );
}
