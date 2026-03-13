import React from "react";

/**
 * PUBLIC_INTERFACE
 * Small KPI stat card with icon and delta.
 */
export default function StatCard({ label, value, delta, icon: Icon, tone = "muted" }) {
  const toneStyles =
    tone === "primary"
      ? { iconWrap: "bg-primary/10 text-primary", value: "text-text" }
      : tone === "success"
        ? { iconWrap: "bg-success/10 text-success", value: "text-text" }
        : { iconWrap: "bg-slate-100 text-slate-700", value: "text-text" };

  return (
    <div className="rounded-2xl border border-slate-200 bg-surface p-4 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-semibold text-muted">{label}</div>
          <div className={"mt-2 text-2xl font-semibold " + toneStyles.value}>{value}</div>
          <div className="mt-1 text-xs text-muted">{delta}</div>
        </div>
        <div className={"h-10 w-10 rounded-xl flex items-center justify-center " + toneStyles.iconWrap}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
