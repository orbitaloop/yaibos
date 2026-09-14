export interface Pillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  problem: string;
  solution: string;
  technicalRequirements: string[];
  codeSample?: {
    language: string;
    code: string;
  };
}

export const PILLARS: Pillar[] = [
  {
    id: "zero-install-ui",
    number: "01",
    title: "Zero-Install All-in-One UI",
    tagline: "No terminal commands, no Git merge conflicts, no raw editor hurdles.",
    badge: "User Interface",
    problem: "Non-technical team members and clients are terrified of terminal prompts, package managers, and raw Git commands. Standard agent tools fail on day one due to install friction.",
    solution: "A unified desktop or sovereign local web cockpit. Non-technical staff click visual cards, view execution status, and inspect outputs without ever opening a terminal.",
    technicalRequirements: [
      "Zero exposed developer terminals during standard business operations.",
      "Unified desktop runtime (Tauri / Electron) or local-network web app.",
      "Pure Markdown and open JSON data layer behind the visual UI.",
      "Data sovereignty guarantee: zero proprietary database lock-in."
    ]
  },
  {
    id: "one-click-sop",
    number: "02",
    title: "1-Click SOP Execution",
    tagline: "Turn company procedures into instant, autonomous action buttons.",
    badge: "Operations Engine",
    problem: "Standard operating procedures typically sit dead in company wikis. Even when turned into agent prompts, executing them requires technical engineering guidance.",
    solution: "Every business SOP is declared as a structured Markdown file with frontmatter parameters, rendered as a 1-click execution button with duration, telemetry, and output manifests.",
    technicalRequirements: [
      "Structured SOP Markdown schema with frontmatter parameters and tool scopes.",
      "Visual catalog grouped by business area (Marketing, Sales, Accounting, Ops).",
      "Live execution telemetry: status, elapsed duration, human minutes saved.",
      "Lifespan progression: Assisted (step-by-step) -> Supervised -> Fully Autonomous."
    ],
    codeSample: {
      language: "yaml",
      code: `---
yaibos_version: "1.0"
id: "sop-invoices-audit"
title: "Monthly Invoices Audit & Statement Reconciliation"
area: "Finance"
maturity_stage: "supervised"
timeout_seconds: 300
permissions:
  required_role: "finance_viewer"
  fs_scope: ["read: 2 Areas/Finance/Invoices/"]
mcp_tools: ["extract_pdf_tables", "reconcile_bank_csv"]
---`
    }
  },
  {
    id: "byos-auth",
    number: "03",
    title: "BYOS (Bring Your Own Subscription)",
    tagline: "Zero token bill shock for the host. Team members use their own accounts.",
    badge: "Cost Architecture",
    problem: "When team members run dozens of autonomous agent loops daily, metered API bills escalate unpredictably for the business owner.",
    solution: "Team members authenticate using their existing subscriptions (ChatGPT Plus/Team/Pro, Claude Pro, DeepSeek web auth). The harness consumes models directly with zero host token charges.",
    technicalRequirements: [
      "Support consumer subscription OAuth and session bridging alongside metered API keys.",
      "Client-side encrypted credential storage with zero third-party broker exposure.",
      "Decoupled per-member usage quotas and execution auditing."
    ]
  },
  {
    id: "team-second-brain",
    number: "04",
    title: "Integrated Team Second Brain",
    tagline: "Human-legible company memory that autonomous agents can read and update.",
    badge: "Knowledge Layer",
    problem: "Vector databases and agent memory silos remain opaque black boxes that human team members cannot inspect, verify, or casually edit.",
    solution: "Company memory lives in standard, open Markdown files. Staff can read and edit documentation in a built-in rich editor, while agents leverage local hybrid search.",
    technicalRequirements: [
      "Standard open Markdown storage with bi-directional in-app editing.",
      "Local hybrid semantic search (lightweight vector embeddings + BM25 keyword matching).",
      "Background memory hygiene: stale note detection and duplicate resolution."
    ]
  },
  {
    id: "team-rbac",
    number: "05",
    title: "Granular Team RBAC & Ownership",
    tagline: "Selective folder permissions with designated area responsibility.",
    badge: "Security & Governance",
    problem: "Traditional personal second brains lack multi-user security. Giving agents blanket workspace access risks accidental modification of payroll or accounting files.",
    solution: "Folder-level and file-level permissions (Read, Execute, Write/Propose, Admin) with designated human area owners who approve modifications.",
    technicalRequirements: [
      "Strict folder-level and tool-level execution whitelists.",
      "Area ownership gates: agent writes to protected areas require human sign-off.",
      "Immutable local audit trail tracking all agent filesystem changes."
    ]
  },
  {
    id: "modular-plugins",
    number: "06",
    title: "Modular Sovereign Engine Architecture",
    tagline: "Everything is a plugin. Zero vendor lock-in, swappable models and tools.",
    badge: "Engine Design",
    problem: "Monolithic agent frameworks tightly couple the model provider, database, and UI, forcing painful rewrites whenever underlying tech shifts.",
    solution: "A minimal, resilient pluggable engine where model connectors, MCP tool providers, storage layers, and UI themes are swappable, hot-reloadable plugins.",
    technicalRequirements: [
      "Lightweight modular engine with swappable components.",
      "Open plugin manifest standard for tools, memory, and model providers.",
      "Model Context Protocol (MCP) native integration."
    ]
  }
];

export const ARCHITECTURE_LAYERS = [
  {
    name: "Presentation Layer",
    items: [
      "1-Click SOP Visual Cockpit with Area Filtering",
      "Embedded Rich Markdown Editor and Knowledge Graph Viewer",
      "Real-time Telemetry, Duration Counter & Run Audit Logs"
    ]
  },
  {
    name: "Governance & Session Layer",
    items: [
      "Folder-level & File-level Role-Based Access Control (RBAC)",
      "BYOS Auth Engine (ChatGPT, Claude, DeepSeek OAuth session bridge)",
      "Lifespan Stage Gates: Assisted -> Supervised -> Fully Autonomous"
    ]
  },
  {
    name: "Execution Engine Layer",
    items: [
      "Deterministic Agent Execution Loop & Context Window Assembler",
      "Persistent Semantic Memory Provider (Local Hybrid Search)",
      "Tool, Skill & MCP Dispatcher with Timeout Management"
    ]
  },
  {
    name: "Storage & Protocol Layer",
    items: [
      "Plain-text Markdown Files on Local Filesystem or Git Repository",
      "Model Context Protocol (MCP) Connectors & Local CLI Adapters"
    ]
  }
];
