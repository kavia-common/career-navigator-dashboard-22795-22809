import React from "react";
import { IconHome, IconLayers, IconSettings, IconUser } from "../ui/icons";

/**
 * PUBLIC_INTERFACE
 * Left navigation sidebar for the dashboard.
 */
export default function LeftSidebar() {
  const nav = [
    { label: "Hub", icon: IconHome, active: true },
    { label: "Personas", icon: IconUser, active: false },
    { label: "Workflows", icon: IconLayers, active: false },
    { label: "Settings", icon: IconSettings, active: false }
  ];

  return (
    <aside className="rounded-2xl border border-slate-200 bg-surface shadow-soft">
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
            CN
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold leading-5 text-text">Career Navigator</div>
            <div className="text-xs text-muted">Persona Hub</div>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                className={[
                  "w-full rounded-xl px-3 py-2 text-left text-sm",
                  "flex items-center gap-2 transition",
                  item.active
                    ? "bg-primary/10 text-primary"
                    : "text-slate-700 hover:bg-slate-50"
                ].join(" ")}
                aria-current={item.active ? "page" : undefined}
              >
                <Icon className={item.active ? "text-primary" : "text-slate-500"} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-xl bg-slate-50 p-3">
          <div className="text-xs font-semibold text-text">Workspace</div>
          <div className="mt-1 text-xs text-muted">
            Ready for API integration via <code className="rounded bg-white px-1 py-0.5">REACT_APP_API_BASE</code>
          </div>
        </div>
      </div>
    </aside>
  );
}
