import { StrictMode, createElement as h } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type ProjectEntry = {
  name: string;
  path: string;
  lastOpened: string;
};

type WorkspaceMetric = {
  label: string;
  value: string;
};

const workspacePath = "/workspace/litecode";

const workspaceMetrics: WorkspaceMetric[] = [
  { label: "Stack", value: "Tauri · React · TypeScript" },
  { label: "Branch", value: "main" },
  { label: "OS", value: "Linux" },
];

const previousProjects: ProjectEntry[] = [
  { name: "litecode", path: "/workspace/litecode", lastOpened: "Active now" },
  {
    name: "analytics-dashboard",
    path: "/workspace/analytics-dashboard",
    lastOpened: "2h ago",
  },
  { name: "docs-site", path: "/workspace/docs-site", lastOpened: "Yesterday" },
];

function App() {
  return h("div", { className: "app-shell" }, [
    h("aside", { className: "sidebar", key: "sidebar" }, [
      h("div", { className: "panel", key: "workspace" }, [
        h("p", { className: "eyebrow", key: "label" }, "Current workspace"),
        h("h1", { className: "title", key: "title" }, "Litecode"),
        h("p", { className: "path", key: "path" }, workspacePath),
        h(
          "ul",
          { className: "metrics", key: "metrics" },
          workspaceMetrics.map((metric) =>
            h("li", { key: metric.label }, [
              h("span", { key: `${metric.label}-label` }, metric.label),
              h("strong", { key: `${metric.label}-value` }, metric.value),
            ]),
          ),
        ),
        h("button", { type: "button", className: "ghost-button", key: "open" }, "Open another project"),
      ]),
      h("div", { className: "panel", key: "history" }, [
        h("p", { className: "eyebrow", key: "history-label" }, "Previously opened"),
        h(
          "ul",
          { className: "project-list", key: "history-list" },
          previousProjects.map((project) =>
            h("li", { key: project.path }, [
              h("button", { type: "button", className: "project-item", key: `${project.path}-button` }, [
                h("span", { key: `${project.path}-name` }, project.name),
                h("small", { key: `${project.path}-opened` }, project.lastOpened),
                h("code", { key: `${project.path}-path` }, project.path),
              ]),
            ]),
          ),
        ),
      ]),
    ]),
    h("main", { className: "prompt-stage", key: "main" }, [
      h("section", { className: "hero-card", key: "hero" }, [
        h("p", { className: "eyebrow", key: "hero-eyebrow" }, "Agent-first development"),
        h("h2", { key: "heading" }, "What would you like to build in this workspace?"),
        h(
          "p",
          { key: "description" },
          "Describe the feature, app, or refactor you want. Your coding agent will plan, implement, and verify changes for you.",
        ),
        h("label", { htmlFor: "build-prompt", className: "sr-only", key: "label" }, "Describe what you want to build"),
        h("textarea", {
          id: "build-prompt",
          key: "textarea",
          placeholder: "Build a multi-step onboarding flow with OAuth and usage analytics...",
          rows: 6,
        }),
        h("div", { className: "actions", key: "actions" }, [
          h("button", { type: "button", className: "primary-button", key: "start" }, "Start building"),
          h("button", { type: "button", className: "secondary-button", key: "examples" }, "View example prompts"),
        ]),
      ]),
    ]),
  ]);
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element is missing from index.html");
}

createRoot(rootElement).render(h(StrictMode, null, h(App)));
