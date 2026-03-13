import React from "react";

/**
 * PUBLIC_INTERFACE
 * Generic card wrapper with title/subtitle and content slot.
 * Styled to match ui1/ui2: white surface, subtle border, rounded-xl, compact header.
 */
export default function SectionCard({ title, subtitle, headerIcon, children }) {
  return (
    <section className="rounded-xl border border-border bg-surface shadow-soft">
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2">
          {headerIcon ? (
            <span className="h-7 w-7 rounded-lg bg-primarySoft flex items-center justify-center">
              {headerIcon}
            </span>
          ) : null}
          <div className="min-w-0">
            <h2 className="text-[14px] font-semibold text-text">{title}</h2>
            {subtitle ? <p className="mt-0.5 text-[13px] text-muted">{subtitle}</p> : null}
          </div>
        </div>
      </div>
      <div className="p-4 pt-3">{children}</div>
    </section>
  );
}
