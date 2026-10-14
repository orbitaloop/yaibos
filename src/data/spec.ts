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
    why: "Operations staff and assistants need to use skills without installing packages in a terminal.",
    core: [
      "Run an existing skill from a graphical app without shell commands.",
      "Every note, skill and log stays a plain file.",
    ],
    later: [
      "Cockpit to browse, launch and follow skills [L2].",
      "Automatic sync and readable choices for conflicts, without git markers [L3].",
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
      "Keep credentials out of the second brain.",
    ],
    later: ["Authentication mode and Cockpit BYOS bridge wrapping official vendor CLIs [L2]; shared-key spending caps [L3]."],
  },
  {
    id: "team-second-brain",
    number: "04",
    title: "A living second brain",
    why: "Agents need current company context. Outdated notes can lead them to use old rules or facts.",
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
    why: "Broad access to payroll, client data, and email increases the damage an agent can cause when it follows a bad instruction.",
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
    why: "Harnesses and models change every few months. Keeping procedures in open files makes them easier to use with the next tool.",
    core: [
      "The second brain is the single source of truth.",
      "A tools registry lists every MCP server and CLI.",
      "A sync step installs skills, context and tools in supported harnesses.",
    ],
    later: ["Export run history and leave the cockpit for Base [L2]."],
  },
];
