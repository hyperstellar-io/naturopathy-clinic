"use client";

import { useEffect } from "react";
import StatusPage from "./status-page";

// This Next version passes `retry` (not `reset`) to error boundaries.
export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <StatusPage code="500" title="Something went wrong" message="An unexpected error occurred on our side. Please try again in a moment.">
      <button type="button" className="cs-btn" onClick={() => retry()}>Try again</button>
    </StatusPage>
  );
}
