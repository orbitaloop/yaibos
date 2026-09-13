export interface ImplementationScore {
  name: string;
  category: string;
  grade: "A+" | "A" | "B+" | "B" | "B-" | "C+" | "C" | "D+" | "F";
  summary: string;
  verdict: string;
  scores: {
    zeroInstallUI: number; // 0 to 5
    oneClickSOP: number;   // 0 to 5
    byosAuth: number;      // 0 to 5
    teamSecondBrain: number; // 0 to 5
    teamRBAC: number;      // 0 to 5
    modularPlugins: number;// 0 to 5
  };
  strengths: string[];
  gaps: string[];
  repoUrl?: string;
}

export const IMPLEMENTATIONS: ImplementationScore[] = [
  {
    name: "DeepSeek Harness (dsh + Cordis)",
    category: "Micro-Kernel & Agent Runtime",
    grade: "B+",
    summary: "High-performance modular agent runtime built on the Cordis micro-kernel with swappable memory and execution plugins.",
    verdict: "The closest architectural match for the execution kernel, but currently lacks a non-technical UI and multi-user RBAC.",
    scores: {
      zeroInstallUI: 2,
      oneClickSOP: 4,
      byosAuth: 3,
      teamSecondBrain: 3,
      teamRBAC: 1,
      modularPlugins: 5
    },
    strengths: [
      "World-class micro-kernel plugin architecture (Cordis).",
      "Robust telemetry, duration counting, and audit trace logging.",
      "Growing community ecosystem of open plugins (dsh-mnemon, web runners)."
    ],
    gaps: [
      "Strictly developer-oriented; requires terminal knowledge to deploy.",
      "No native multi-user RBAC or folder permissions.",
      "Requires bridging for consumer subscription auth (ChatGPT/Claude web auth)."
    ],
    repoUrl: "https://github.com/deepseek-ai"
  },
  {
    name: "OpenDesign / DSHKer",
    category: "Visual Harness UI",
    grade: "B",
    summary: "Local-first visual desktop interface designed to run DeepSeek Harness workflows without a terminal.",
    verdict: "Demonstrates that complex agent harnesses can have a friendly consumer UI, though still early in enterprise features.",
    scores: {
      zeroInstallUI: 4,
      oneClickSOP: 4,
      byosAuth: 2,
      teamSecondBrain: 2,
      teamRBAC: 1,
      modularPlugins: 4
    },
    strengths: [
      "Zero-install desktop app for non-technical team members.",
      "Visual preview of agent executions and artifacts.",
      "Direct integration with dsh execution backend."
    ],
    gaps: [
      "No integrated team second brain or Markdown editor.",
      "Single-user desktop focus with zero role-based permissions.",
      "Early stage with evolving API stability."
    ],
    repoUrl: "https://github.com/nexu-io/open-design"
  },
  {
    name: "Khoj",
    category: "AI Second Brain & Assistant",
    grade: "B-",
    summary: "Self-hosted AI search and personal assistant that indexes local Markdown notes and documents.",
    verdict: "Strong on local Markdown second-brain capabilities, but lacks an operational 1-click business SOP runner.",
    scores: {
      zeroInstallUI: 4,
      oneClickSOP: 2,
      byosAuth: 2,
      teamSecondBrain: 4,
      teamRBAC: 2,
      modularPlugins: 3
    },
    strengths: [
      "Excellent local Markdown indexing and semantic retrieval.",
      "Clean web and desktop interface.",
      "Self-hosted privacy guarantees."
    ],
    gaps: [
      "Oriented toward conversational Q&A rather than running business SOPs.",
      "No 1-click action cards with telemetry and duration tracking.",
      "Rudimentary team sharing and permission controls."
    ],
    repoUrl: "https://github.com/khoj-ai/khoj"
  },
  {
    name: "Obsidian (with Agent & Smart Plugins)",
    category: "Knowledge Base + Plugin Ecosystem",
    grade: "B-",
    summary: "The premier local Markdown editor with community agent plugins (Smart Connections, Banners, Local LLMs).",
    verdict: "Unbeatable as a personal knowledge vault, but too complex for non-technical staff and lacks multi-user RBAC.",
    scores: {
      zeroInstallUI: 2,
      oneClickSOP: 2,
      byosAuth: 2,
      teamSecondBrain: 5,
      teamRBAC: 1,
      modularPlugins: 4
    },
    strengths: [
      "The gold standard for plain text Markdown sovereignty.",
      "Massive plugin ecosystem and local graph visualization.",
      "Zero proprietary data format lock-in."
    ],
    gaps: [
      "High onboarding friction for non-technical team members.",
      "Obsidian Sync has zero folder-level RBAC for team permissions.",
      "Agent execution relies on fragmented community plugins rather than a cohesive runtime."
    ],
    repoUrl: "https://obsidian.md"
  },
  {
    name: "AnythingLLM",
    category: "Desktop AI Workspace",
    grade: "C+",
    summary: "All-in-one desktop and enterprise app for chatting with documents and local models.",
    verdict: "Polished document workspace, but strictly conversational with no concept of business SOP execution.",
    scores: {
      zeroInstallUI: 5,
      oneClickSOP: 1,
      byosAuth: 3,
      teamSecondBrain: 3,
      teamRBAC: 3,
      modularPlugins: 2
    },
    strengths: [
      "One-click desktop installer with zero technical setup required.",
      "Supports multi-user workspaces and basic permission levels.",
      "Flexible model endpoint configuration."
    ],
    gaps: [
      "No 1-click SOP procedures or automated business agent loops.",
      "Data locked in internal vector databases instead of plain Markdown.",
      "Rigid plugin architecture with limited extensibility."
    ],
    repoUrl: "https://github.com/Mintplex-Labs/anything-llm"
  },
  {
    name: "Dify / Flowise",
    category: "Visual Workflow & LLMOps",
    grade: "C",
    summary: "Visual canvas builders for chaining LLMs, tools, and multi-agent workflows into APIs.",
    verdict: "Powerful for developers, but node spaghetti is too complex for non-technical teams, and lacks sovereign Markdown notes.",
    scores: {
      zeroInstallUI: 3,
      oneClickSOP: 3,
      byosAuth: 2,
      teamSecondBrain: 1,
      teamRBAC: 3,
      modularPlugins: 3
    },
    strengths: [
      "Powerful visual logic builder for custom multi-agent chains.",
      "Good team access management in enterprise self-hosted tiers.",
      "Wide support for external API connectors."
    ],
    gaps: [
      "Visual node graphs are intimidating for non-technical operators.",
      "Relies on PostgreSQL and cloud vector stores, completely missing sovereign Markdown files.",
      "Heavy infrastructure footprint to self-host."
    ],
    repoUrl: "https://github.com/langgenius/dify"
  },
  {
    name: "Open WebUI",
    category: "Self-Hosted Model Interface",
    grade: "C+",
    summary: "Feature-rich self-hosted chat interface for Ollama, OpenAI, and compatible endpoints.",
    verdict: "Great as a sovereign ChatGPT alternative, but has no operational SOP catalog or agent action loops.",
    scores: {
      zeroInstallUI: 4,
      oneClickSOP: 1,
      byosAuth: 3,
      teamSecondBrain: 2,
      teamRBAC: 3,
      modularPlugins: 3
    },
    strengths: [
      "Familiar and clean ChatGPT-style user interface.",
      "Good user management and multi-role RBAC in server mode.",
      "Broad model support including local Ollama runners."
    ],
    gaps: [
      "Purely conversational; no 1-click execution cards or task duration telemetry.",
      "Lacks a bi-directional Markdown second brain.",
      "Not designed to automate repetitive business processes."
    ],
    repoUrl: "https://github.com/open-webui/open-webui"
  },
  {
    name: "CrewAI / AutoGPT / OpenManus",
    category: "Developer Agent Frameworks",
    grade: "D+",
    summary: "Code-first multi-agent orchestration libraries designed for software engineers.",
    verdict: "Powerful algorithmic experiments, but completely inaccessible to non-technical business teams.",
    scores: {
      zeroInstallUI: 1,
      oneClickSOP: 2,
      byosAuth: 1,
      teamSecondBrain: 1,
      teamRBAC: 1,
      modularPlugins: 4
    },
    strengths: [
      "Flexible multi-agent role delegation in Python / TypeScript.",
      "Rapidly adopting open standards like Model Context Protocol (MCP)."
    ],
    gaps: [
      "Zero graphical UI; requires terminal execution and virtual environments.",
      "Metered API consumption causes severe token bill shock.",
      "No persistent human-readable knowledge layer or team permissions."
    ]
  }
];

export const SCORING_CRITERIA = [
  { key: "zeroInstallUI", label: "Zero-Install UI", description: "Clean web/desktop interface without terminal commands or Git hurdles." },
  { key: "oneClickSOP", label: "1-Click SOPs", description: "Procedures rendered as visual buttons with telemetry and duration tracking." },
  { key: "byosAuth", label: "BYOS Auth", description: "Team members use existing subscriptions with zero host token bill shock." },
  { key: "teamSecondBrain", label: "Team Second Brain", description: "Plain Markdown storage with bi-directional in-app editing and semantic search." },
  { key: "teamRBAC", label: "Team RBAC", description: "Granular folder-level and file-level permissions with area ownership." },
  { key: "modularPlugins", label: "Modular Plugins", description: "Micro-kernel design where tools, models, and memory are swappable." }
];
