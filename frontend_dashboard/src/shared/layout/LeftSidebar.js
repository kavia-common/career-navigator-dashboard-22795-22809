import React from "react";
import { IconHome, IconLayers, IconSettings, IconUser } from "../ui/icons";

/**
 * PUBLIC_INTERFACE
 * Left navigation sidebar (ui1/ui2 style).
 * Fixed width on desktop; remains visible but compact on smaller screens.
 */
export default function LeftSidebar() {
  const nav = [
    { label: "Home", icon: IconHome, active: true },
    { label: "People", icon: IconUser, active: false },
    { label: "Projects", icon: IconLayers, active: false },
    { label: "Settings", icon: IconSettings, active: false }
  ];

  return (
    <aside className="w-[240px] shrink-0 border-r border-border bg-surface hidden md:block">
      <div className="h-full flex flex-col">
        <div className="h-16 px-4 flex items-center gap-3 border-b border-border">
          <div className="h-9 w-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm">
            CN
          </div>
          <div className="min-w-0">
            <div className="text-[13px] font-semibold text-text leading-4 truncate">Career Navigator</div>
            <div className="text-[12px] text-muted truncate">Dashboard</div>
          </div>
        </div>

        <nav className="p-3 space-y-1">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                className={[
                  "w-full h-10 rounded-lg px-3",
                  "flex items-center gap-2 text-left transition",
                  item.active ? "bg-primarySoft text-primary" : "text-muted hover:bg-background hover:text-text"
                ].join(" ")}
                aria-current={item.active ? "page" : undefined}
              >
                <Icon className="h-4 w-4" />
                <span className="text-[13px] font-semibold">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto p-4">
          <div className="text-[12px] text-muted">v0.1 • UI reference build</div>
        </div>
      </div>
    </aside>
  );
}
