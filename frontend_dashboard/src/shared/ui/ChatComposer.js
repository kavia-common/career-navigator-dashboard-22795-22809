import React from "react";
import { IconSend } from "./icons";

/**
 * PUBLIC_INTERFACE
 * Chat input composer with send button.
 */
export default function ChatComposer({ value, onChange, onSend }) {
  return (
    <div className="flex items-center gap-2 border-t border-slate-200 p-3">
      <label className="sr-only" htmlFor="chat-input">
        Message
      </label>
      <input
        id="chat-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type a message…"
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-text placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary"
      />
      <button
        type="button"
        onClick={onSend}
        className="h-11 shrink-0 rounded-xl bg-primary px-3 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 transition inline-flex items-center gap-2"
        aria-label="Send message"
      >
        <IconSend className="h-4 w-4" />
        <span className="hidden sm:inline">Send</span>
      </button>
    </div>
  );
}
