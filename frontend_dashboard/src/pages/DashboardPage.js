import React, { useMemo, useState } from "react";
import LeftSidebar from "../shared/layout/LeftSidebar";
import TopHeader from "../shared/layout/TopHeader";
import SectionCard from "../shared/ui/SectionCard";
import { IconCheckCircle } from "../shared/ui/icons";

/**
 * PUBLIC_INTERFACE
 * Dashboard page (ui1/ui2 reference implementation).
 *
 * Layout:
 * - Left: fixed sidebar with nav
 * - Right (main):
 *   - Top toolbar (breadcrumb/title, search, primary action)
 *   - Main grid:
 *       - Left column: stacked smaller cards
 *       - Right column: large detail card + tabbed list card
 *
 * Responsive:
 * - <lg: sidebar becomes top row; grid stacks into single column while preserving visual hierarchy.
 */
export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Overview");

  const checklistRows = useMemo(
    () => [
      { label: "Set persona goals", status: "Done", ok: true },
      { label: "Import profile data", status: "Done", ok: true },
      { label: "Confirm role targets", status: "In review", ok: false },
      { label: "Run validation", status: "Pending", ok: false }
    ],
    []
  );

  const tabs = useMemo(() => ["Overview", "Updates", "Tasks", "Notes"], []);

  const listRows = useMemo(
    () => [
      { title: "Persona baseline created", meta: "Today", selected: true },
      { title: "Constraints captured and normalized", meta: "Yesterday", selected: false },
      { title: "Skill taxonomy selected", meta: "2d ago", selected: false },
      { title: "Validation checks queued", meta: "3d ago", selected: false }
    ],
    []
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <LeftSidebar />

        <main className="flex-1 min-w-0">
          <div className="px-4 py-4 sm:px-6 lg:px-6">
            <TopHeader value={search} onChange={setSearch} />

            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
              {/* Left stacked cards */}
              <div className="lg:col-span-4 space-y-4">
                <SectionCard
                  title="Checklist Progress"
                  subtitle="Track completion status and unblock missing inputs."
                  headerIcon={<IconCheckCircle className="h-4 w-4 text-primary" />}
                >
                  <div className="rounded-xl border border-borderSoft bg-white">
                    {checklistRows.map((row, idx) => (
                      <div key={row.label}>
                        <div className="flex items-center justify-between px-3 py-3">
                          <div className="text-[13px] font-medium text-text">{row.label}</div>
                          <div
                            className={[
                              "text-[12px] font-semibold",
                              row.ok ? "text-success" : "text-muted"
                            ].join(" ")}
                          >
                            {row.status}
                          </div>
                        </div>
                        {idx !== checklistRows.length - 1 ? (
                          <div className="h-px bg-borderSoft" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard title="Next Steps" subtitle="Suggested actions to refine your persona baseline.">
                  <div className="space-y-2">
                    {[
                      "Confirm industries and seniority band",
                      "Add compensation + location constraints",
                      "Validate role-fit signals",
                      "Generate next best actions"
                    ].map((t) => (
                      <div
                        key={t}
                        className="flex items-start gap-2 rounded-xl border border-borderSoft bg-white px-3 py-2.5"
                      >
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <div className="text-[13px] leading-5 text-subtle">{t}</div>
                      </div>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard title="Insights" subtitle="Small notes based on your inputs so far.">
                  <div className="rounded-xl border border-borderSoft bg-white p-3">
                    <div className="text-[13px] leading-5 text-subtle">
                      Your target role selection is strong, but constraints are still underspecified. Add location,
                      compensation band, and timeline to improve validation confidence.
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-[12px] text-muted">Last updated: 2 hours ago</div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="h-9 w-9 rounded-lg border border-border bg-white text-muted hover:bg-background transition"
                          aria-label="Dismiss"
                        >
                          <span className="text-[14px] leading-none">×</span>
                        </button>
                        <button
                          type="button"
                          className="h-9 w-9 rounded-lg bg-primary text-white hover:bg-primaryStrong transition"
                          aria-label="Pin"
                        >
                          <span className="text-[14px] leading-none">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </SectionCard>
              </div>

              {/* Right content */}
              <div className="lg:col-span-8 space-y-4 min-w-0">
                {/* Large detail card */}
                <div className="rounded-xl border border-border bg-surface shadow-soft">
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="h-10 w-10 rounded-lg bg-primarySoft text-primary flex items-center justify-center font-semibold">
                          AM
                        </div>
                        <div className="min-w-0">
                          <div className="text-[14px] font-semibold text-text truncate">Alex Morgan</div>
                          <div className="mt-0.5 text-[12px] text-muted truncate">
                            Growth Product Manager • Remote / NYC
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="h-9 w-9 rounded-lg border border-border bg-white text-muted hover:bg-background transition"
                        aria-label="More options"
                        title="More"
                      >
                        <span className="text-[18px] leading-none">⋯</span>
                      </button>
                    </div>

                    <div className="mt-3 text-[13px] leading-6 text-subtle">
                      This persona baseline prioritizes high-iteration teams and consumer product environments. Next,
                      confirm constraints (timeline, compensation, preferred industries) and refine skills to improve
                      match quality and outreach generation.
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Remote", "Consumer apps", "Growth", "Experimentation", "Fast iteration"].map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full bg-background px-3 py-1 text-[12px] font-medium text-muted border border-borderSoft"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tabbed list card */}
                <div className="rounded-xl border border-border bg-surface shadow-soft">
                  <div className="px-4 pt-4">
                    <div className="flex items-center gap-6 overflow-auto">
                      {tabs.map((t) => {
                        const active = t === activeTab;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setActiveTab(t)}
                            className={[
                              "pb-3 text-[13px] font-semibold whitespace-nowrap",
                              active ? "text-primary border-b-2 border-primary" : "text-muted hover:text-text"
                            ].join(" ")}
                            aria-current={active ? "page" : undefined}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <div className="mt-3 space-y-2">
                      {listRows.map((row) => (
                        <button
                          key={row.title}
                          type="button"
                          className={[
                            "w-full rounded-xl border px-3 py-3 text-left transition flex items-center justify-between gap-3",
                            row.selected
                              ? "border-primary/20 bg-primarySoft"
                              : "border-borderSoft bg-white hover:bg-background"
                          ].join(" ")}
                        >
                          <div className="min-w-0">
                            <div className="text-[13px] font-semibold text-text truncate">{row.title}</div>
                            <div className="mt-0.5 text-[12px] text-muted truncate">
                              {activeTab} • Activity log item
                            </div>
                          </div>
                          <div className="text-[12px] font-semibold text-muted whitespace-nowrap">{row.meta}</div>
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button
                        type="button"
                        className="h-9 rounded-lg bg-primary px-4 text-[13px] font-semibold text-white hover:bg-primaryStrong transition"
                      >
                        View all updates
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* end right content */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
