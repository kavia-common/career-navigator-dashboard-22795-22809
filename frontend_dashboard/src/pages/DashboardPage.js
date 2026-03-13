import React, { useMemo, useState } from "react";
import LeftSidebar from "../shared/layout/LeftSidebar";
import RightPanel from "../shared/layout/RightPanel";
import TopHeader from "../shared/layout/TopHeader";
import StatCard from "../shared/ui/StatCard";
import SectionCard from "../shared/ui/SectionCard";
import ChatComposer from "../shared/ui/ChatComposer";
import { IconBriefcase, IconCheckCircle, IconCompass, IconSparkles } from "../shared/ui/icons";

/**
 * PUBLIC_INTERFACE
 * Dashboard page for "Career Navigator – Persona Initialization Hub".
 * Three-column layout:
 * - Left: navigation sidebar (fixed width on desktop)
 * - Center: main content (header + cards + chat)
 * - Right: persona validation panel + actions
 */
export default function DashboardPage() {
  const [message, setMessage] = useState("");

  const stats = useMemo(
    () => [
      { label: "Personas Initialized", value: "12", delta: "+2 today", icon: IconSparkles, tone: "primary" },
      { label: "Validation Checks", value: "48", delta: "96% pass rate", icon: IconCheckCircle, tone: "success" },
      { label: "Active Pathways", value: "7", delta: "3 recommended", icon: IconCompass, tone: "muted" },
      { label: "Open Roles Tracked", value: "31", delta: "8 new", icon: IconBriefcase, tone: "muted" }
    ],
    []
  );

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="mx-auto max-w-[1400px] px-3 py-3 sm:px-5 sm:py-5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr_360px]">
          <LeftSidebar />

          {/* Center column */}
          <main className="min-w-0">
            <TopHeader />

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((s) => (
                <StatCard
                  key={s.label}
                  label={s.label}
                  value={s.value}
                  delta={s.delta}
                  icon={s.icon}
                  tone={s.tone}
                />
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
              <SectionCard
                title="Initialization Checklist"
                subtitle="Complete these steps to create a high-signal persona baseline."
              >
                <ul className="space-y-2 text-sm text-muted">
                  {[
                    "Import resume / LinkedIn profile",
                    "Confirm role target(s) and industries",
                    "Set constraints (location, compensation, timeline)",
                    "Select skill taxonomy and seniority band",
                    "Run persona validation and adjust"
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                      <span className="text-text/90">{t}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>

              <SectionCard title="Persona Snapshot" subtitle="Current working persona state (editable).">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <div className="text-xs font-medium text-muted">Name</div>
                    <div className="mt-1 text-sm font-semibold text-text">Alex Morgan</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted">Target Role</div>
                    <div className="mt-1 text-sm font-semibold text-text">Product Manager (Growth)</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted">Location</div>
                    <div className="mt-1 text-sm font-semibold text-text">Remote / NYC</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted">Experience</div>
                    <div className="mt-1 text-sm font-semibold text-text">6–8 years</div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-text/90">
                  <div className="font-semibold">Strengths</div>
                  <div className="mt-1 text-muted">
                    Experimentation, user research synthesis, cross-functional leadership, lifecycle messaging.
                  </div>
                </div>
              </SectionCard>
            </div>

            <div className="mt-4">
              <SectionCard title="Persona Chat" subtitle="Ask the hub to refine the persona or generate next actions.">
                <div className="rounded-xl border border-slate-200 bg-white">
                  <div className="max-h-[260px] overflow-auto p-4">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="h-9 w-9 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                          CN
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-text">Career Navigator</div>
                          <div className="mt-1 text-sm text-muted">
                            Share your target role and constraints. I’ll build a persona baseline and suggest next steps.
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-3">
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-text text-right">You</div>
                          <div className="mt-1 rounded-2xl bg-primary px-4 py-2 text-sm text-white shadow-soft">
                            I’m targeting Growth PM roles in consumer apps. Optimize for remote roles and fast iteration teams.
                          </div>
                        </div>
                        <div className="h-9 w-9 shrink-0 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-semibold">
                          AM
                        </div>
                      </div>
                    </div>
                  </div>

                  <ChatComposer
                    value={message}
                    onChange={setMessage}
                    onSend={() => {
                      // Placeholder: integrate API call later.
                      setMessage("");
                    }}
                  />
                </div>
              </SectionCard>
            </div>
          </main>

          <RightPanel />
        </div>
      </div>
    </div>
  );
}
