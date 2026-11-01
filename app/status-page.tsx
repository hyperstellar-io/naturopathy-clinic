import ThemeToggle from "./theme-toggle";

// Shared layout for error screens (404, 500, ...). Pass an action (link/button) as children.
export default function StatusPage({ code, title, message, children }: {
  code: string; title: string; message: string; children?: React.ReactNode;
}) {
  return (
    <main className="nf">
      <div className="cs-logo">NATUROPATHY CLINIC<i /></div>
      <h1>{code}<i /></h1>
      <h2>{title}</h2>
      <p>{message}</p>
      {children}
      <ThemeToggle floating />
    </main>
  );
}
