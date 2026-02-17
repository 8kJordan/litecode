import { FormEvent, useMemo, useState } from "react";

interface ProjectEntry {
  name: string;
  path: string;
  lastOpened: string;
}

interface WorkspaceStat {
  label: string;
  value: string;
}

const workspacePath = "/workspace/litecode";

const workspaceStats: WorkspaceStat[] = [
  { label: "Language mix", value: "TypeScript + Rust" },
  { label: "Active branch", value: "main" },
  { label: "Last indexed", value: "2 minutes ago" },
  { label: "Diagnostics", value: "0 critical issues" },
];

const recentProjects: ProjectEntry[] = [
  {
    name: "litecode",
    path: "/workspace/litecode",
    lastOpened: "Now",
  },
  {
    name: "marketing-site",
    path: "/workspace/marketing-site",
    lastOpened: "Yesterday",
  },
  {
    name: "infra-scripts",
    path: "/workspace/infra-scripts",
    lastOpened: "4 days ago",
  },
];

export function App() {
  const [prompt, setPrompt] = useState("");
  const [submittedPrompt, setSubmittedPrompt] = useState<string | null>(null);

  const isSubmitDisabled = useMemo(() => prompt.trim().length === 0, [prompt]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanedPrompt = prompt.trim();

    if (cleanedPrompt.length === 0) {
      return;
    }

    setSubmittedPrompt(cleanedPrompt);
  };

  return (
    <div className="app-shell">
      <aside className="workspace-panel">
        <div>
          <p className="eyebrow">Workspace</p>
          <h1>Litecode Agent Studio</h1>
          <p className="workspace-path">{workspacePath}</p>
        </div>

        <section className="workspace-section">
          <div className="workspace-section-header">
            <h2>Workspace Snapshot</h2>
            <button type="button" className="ghost-button">
              Refresh
            </button>
          </div>
          <ul className="stats-list">
            {workspaceStats.map((stat) => (
              <li key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section className="workspace-section">
          <div className="workspace-section-header">
            <h2>Projects</h2>
            <button type="button" className="primary-button">
              Open Project
            </button>
          </div>
          <ul className="project-list">
            {recentProjects.map((project) => (
              <li key={project.path}>
                <button type="button" className="project-item">
                  <div>
                    <strong>{project.name}</strong>
                    <p>{project.path}</p>
                  </div>
                  <span>{project.lastOpened}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      </aside>

      <main className="prompt-panel">
        <div className="prompt-card">
          <p className="eyebrow">Agent-first development</p>
          <h2>What would you like to build in this workspace?</h2>
          <p>
            Describe your goal and Litecode will plan tasks, edit files, and validate the
            output for you.
          </p>

          <form onSubmit={handleSubmit} className="prompt-form">
            <label htmlFor="build-prompt">Build prompt</label>
            <textarea
              id="build-prompt"
              name="buildPrompt"
              value={prompt}
              onChange={(event: { target: HTMLTextAreaElement }) => setPrompt(event.target.value)}
              placeholder="Example: Build an API status dashboard with filters, pagination, and tests."
              rows={7}
            />
            <div className="prompt-actions">
              <button type="submit" className="primary-button" disabled={isSubmitDisabled}>
                Start Agent Run
              </button>
              <button type="button" className="ghost-button">
                Load Template
              </button>
            </div>
          </form>

          {submittedPrompt ? (
            <div className="prompt-preview" role="status" aria-live="polite">
              <p>Queued request</p>
              <strong>{submittedPrompt}</strong>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
