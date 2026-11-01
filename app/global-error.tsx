"use client";

import "./globals.css";
import StatusPage from "./status-page";
import { themeScript } from "./theme-script";

// Replaces the root layout when the layout itself fails, so it needs its own <html>/<body>.
export default function GlobalError({ retry }: { error: unknown; retry: () => void }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <StatusPage code="500" title="Something went wrong" message="An unexpected error occurred on our side. Please try again in a moment.">
          <button type="button" className="cs-btn" onClick={() => retry()}>Try again</button>
        </StatusPage>
      </body>
    </html>
  );
}
