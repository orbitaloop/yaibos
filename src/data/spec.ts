// 🤖 Short homepage summary of the six pillars. The normative text is SPEC.md at the repo root.
export interface Pillar {
  id: string;
  number: string;
  title: string;
  why: string;
  core: string[];  // [L1] requirements, summarized
  later: string[]; // [L2], [L3] and [Opt] requirements, summarized
}

export const PILLARS: Pillar[] = [
  {
    id: "zero-install-ui",
    number: "01",
    title: "Usable without a terminal",
    why: "Operations staff and assistants will not adopt a tool that starts with npm install.",
    core: [
      "Run an existing skill from a graphical app, no shell commands.",
      "Every note, skill and log stays a plain file.",
    ],
    later: [
      "Cockpit to browse, launch and follow skills [L2].",
      "Automatic sync, readable conflict choices, no git markers [L3].",
    ],
  },
  {
    id: "one-click-sop",
    number: "02",
    title: "Portable agent skills",
    why: "Skills package reusable instructions, scripts and resources. Business skills make your SOPs executable by an agent.",
    core: [
      "One Markdown file per skill, with frontmatter.",
      "Runs in at least two harnesses without editing.",
      "Lifecycle: draft, pilot or stable; readable approval policy.",
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
      "Each user runs skills with their own plan, through the vendor's official client, or their own API key.",
      "No scraping or replaying of consumer session tokens.",
      "No credentials in the vault.",
    ],
    later: ["Authentication mode in run history [L2]; shared-key spending caps [L3]."],
  },
  {
    id: "team-second-brain",
    number: "04",
    title: "A living second brain",
    why: "Agents are only as good as the context they read, and company knowledge decays quietly.",
    core: [
      "Plain Markdown in a folder you control.",
      "AGENTS.md entry file and README maps agents can follow.",
      "Role-agent notes and memory; maintenance, backups and updates.",
    ],
    later: [
      "Review queue for stale notes [L3].",
      "Contradiction audits, decision log, learning from runs, semantic search [Opt].",
    ],
  },
  {
    id: "team-rbac",
    number: "05",
    title: "Permissions and safety",
    why: "An agent with blanket access to payroll, client data and email is one bad instruction away from a costly mistake.",
    core: [
      "Explicit authorization for external or irreversible actions.",
      "Emails, web pages and documents are data, never instructions.",
      "Readable action boundaries within the user's permissions.",
      "Every agent change reviewable in git history.",
    ],
    later: ["Visible approvals and cancellation [L2]; enforced role permissions and area owners [L3]."],
  },
  {
    id: "modular-plugins",
    number: "06",
    title: "Harness and model portability",
    why: "Harnesses and models change every few months. Your procedures should outlive all of them.",
    core: [
      "The vault is the single source of truth.",
      "A tools registry lists every MCP server and CLI.",
      "A sync step installs skills, context and tools in supported harnesses.",
    ],
    later: ["Export run history and leave the cockpit for Base [L2]."],
  },
];
