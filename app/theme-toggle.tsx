"use client";

import { Moon, Sun } from "lucide-react";

// Both icons render; CSS shows the right one from <html data-theme>, so no hydration mismatch.
export default function ThemeToggle({ floating }: { floating?: boolean }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  };
  return (
    <div className={`tt-w${floating ? " fl" : ""}`}>
      <button type="button" className="tt" onClick={toggle} aria-label="Toggle dark mode" title="Toggle dark mode">
        <Sun className="sun" size={22} />
        <Moon className="moon" size={22} />
      </button>
    </div>
  );
}
