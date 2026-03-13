import React from "react";

/**
 * PUBLIC_INTERFACE
 * Top header for the dashboard center column.
 */
export default function TopHeader() {
  return (
    <header className="rounded-2xl border border-slate-200 bg-surface shadow-soft">
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted">Career Navigator</div>
          <h1 className="mt-1 truncate text-lg font-semibold text-text">
            Persona Initialization Hub
          </h1>
          <p className="mt-1 text-sm text-muted">
            Build, validate, and refine a persona baseline for tailored career guidance.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Import Profile
          </button>
          <button
            type="button"
            className="rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition"
          >
            Run Validation
          </button>
        </div>
      </div>
    </header>
  );
}
