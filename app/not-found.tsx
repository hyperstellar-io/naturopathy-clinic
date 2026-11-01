import Link from "next/link";
import StatusPage from "./status-page";

export default function NotFound() {
  return (
    <StatusPage code="404" title="This page doesn't exist" message="The link may be broken or the page may have moved. Our new website is launching soon.">
      <Link className="cs-btn" href="/">Back to home</Link>
    </StatusPage>
  );
}
