"use client";

import { useState } from "react";

// Pauses only this row while a pointer (mouse or finger) is on it; resumes on release/leave.
export default function MarqueeRow({ items, back }: { items: string[]; back?: boolean }) {
  const [paused, setPaused] = useState(false);
  const go = () => setPaused(false);
  return (
    <ul
      className={`cs-row${back ? " back" : ""}`}
      style={{ animationDuration: `${items.length * 4}s`, animationPlayState: paused ? "paused" : "running" }}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={go}
      onPointerCancel={go}
      onPointerUp={(e) => e.pointerType === "touch" && go()}
    >
      {[...items, ...items].map((t, i) => (
        <li key={i} className={i >= items.length ? "dup" : undefined} aria-hidden={i >= items.length || undefined}>{t}</li>
      ))}
    </ul>
  );
}
