// Short homepage summary of the six pillars. The normative text is SPEC.md at the repo root.
export interface Pillar {
  id: string;
  number: string;
  title: string;
  why: string;
  core: string[];  // [L1] requirements, summarized
  later: string[]; // [L2] and [Opt] requirements, summarized
}

export const PILLARS: Pillar[] = [
  {
    id: "zero-install-ui",
    number: "01",
    title: "Usable without a terminal",
    why: "Operations staff and assistants will not adopt a tool that starts with npm install.",
    core: [
      "Run an existing SOP from a graphical app, no shell commands.",
      "Every note, SOP and log stays a plain file.",
    ],
    later: [
      "Team interface to browse and run SOPs [L2].",
      "Automatic sync, readable conflict choices, no git markers [L2].",
    ],
  },
  {
    id: "one-click-sop",
    number: "02",
    title: "SOPs as portable skills",
    why: "Procedures in a wiki are never followed. Procedures in one vendor's format die with that vendor.",
    core: [
      "One Markdown file per SOP, with frontmatter.",
      "Runs in at least two harnesses without editing.",
      "Maturity stage: assisted, supervised or autonomous.",
    ],
    later: [
      "One-click catalog by area, with run history [L2].",
      "Trigger URLs for Asana, Trello or an ERP, and schedules [Opt].",
    ],
  },
  {
    id: "byos-auth",
    number: "03",
    title: "Bring your own subscription",
    why: "Metered API keys make team bills unpredictable. Most people already pay for an AI plan.",
    core: [
      "Each user runs SOPs with their own plan, through the vendor's official client, or their own API key.",
      "No scraping or replaying of consumer session tokens.",
      "No credentials in the vault.",
    ],
    later: ["Per-run plan visibility and spending caps on shared keys [L2]."],
  },
  {
    id: "team-second-brain",
    number: "04",
    title: "A living second brain",
    why: "Agents are only as good as the context they read, and company knowledge decays quietly.",
    core: [
      "Plain Markdown in a folder you control.",
      "AGENTS.md entry file and README maps agents can follow.",
      "Owner and last-validated date on notes agents rely on.",
    ],
    later: [
      "Review queue for stale notes [L2].",
      "Contradiction audits, decision log, learning from runs, semantic search [Opt].",
    ],
  },
  {
    id: "team-rbac",
    number: "05",
    title: "Permissions and safety",
    why: "An agent with blanket access to payroll, client data and email is one bad instruction away from a costly mistake.",
    core: [
      "Human approval before external or irreversible actions.",
      "Emails, web pages and documents are data, never instructions.",
      "Agent permissions: only what both the SOP and the user allow.",
      "Every agent change reviewable in git history.",
    ],
    later: ["Folder permissions per role, area owners approve changes [L2]."],
  },
  {
    id: "modular-plugins",
    number: "06",
    title: "Harness and model portability",
    why: "Harnesses and models change every few months. Your procedures should outlive all of them.",
    core: [
      "The vault is the single source of truth.",
      "A tools registry lists every MCP server and CLI.",
      "A sync step installs SOPs, context and tools in each harness.",
    ],
    later: ["Plugin manifest for connectors and panels [Opt]."],
  },
];
