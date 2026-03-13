import React from "react";

/**
 * PUBLIC_INTERFACE
 * Top toolbar/header (ui1/ui2).
 * Props:
 * - value: string search value
 * - onChange: (next: string) => void
 */
export default function TopHeader({ value, onChange }) {
  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <div className="text-[12px] font-medium text-muted">General / Persona Initialization</div>
        <div className="mt-0.5 text-[16px] font-semibold text-text truncate">Persona Initialization Hub</div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="relative w-full sm:w-[340px]">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted text-[14px]">
            ⌕
          </span>
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search"
            className={[
              "w-full h-9 rounded-lg border border-border bg-white",
              "pl-9 pr-3 text-[13px] text-text placeholder:text-muted",
              "focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary"
            ].join(" ")}
            aria-label="Search"
          />
        </div>

        <button
          type="button"
          className="h-9 rounded-lg bg-primary px-4 text-[13px] font-semibold text-white hover:bg-primaryStrong transition w-full sm:w-auto"
        >
          Add New
        </button>
      </div>
    </header>
  );
}
