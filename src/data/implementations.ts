export interface ImplementationScore {
  name: string;
  category: string;
  harnessStatus: string;
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
  securityAnalysisUrl?: string;
}

export const IMPLEMENTATIONS: ImplementationScore[] = [
  {
    name: "JARVIS (david-darr/jarvis-app)",
    category: "Sovereign Desktop AI Workspace & Vault UI",
    harnessStatus: "Custom Bespoke Engine (No Open Harness)",
    grade: "B+",
    summary: "Self-hosted, open-source AI workspace packaging multi-model chat, automations, and an embedded Markdown vault visualization into native cross-platform desktop installers.",
    verdict: "Superb alignment with YAIBOS on sovereign local file custody and cross-platform desktop delivery (Windows PC + Mac), but relies on an isolated custom runtime rather than an open harness.",
    scores: {
      zeroInstallUI: 5,
      oneClickSOP: 3,
      byosAuth: 4,
      teamSecondBrain: 4,
      teamRBAC: 1,
      modularPlugins: 4
    },
    strengths: [
      "Packaged desktop releases for Windows PC, macOS, and Linux with zero terminal friction.",
      "Embedded Markdown vault graph visualization directly inside the agent interface.",
      "Sovereign data architecture: chats, memory, notes, and automations live in local files you own."
    ],
    gaps: [
      "Not based on an open-source harness (such as DSH / Cordis): it uses a custom Python and Electron runtime, so it does not benefit from community harness plugins, fixes, or shared ecosystem improvements.",
      "Single-user desktop focus lacking multi-user team RBAC and folder-scoped permissions.",
      "Automations are not yet standardized into business SOP cards with duration and ROI telemetry.",
      "Early-stage release (v2 rewrite) with an evolving plugin ecosystem."
    ],
    repoUrl: "https://github.com/david-darr/jarvis-app",
    securityAnalysisUrl: "/implementations/jarvis-security"
  },
  {
    name: "OBSIA (kevines-ods/OBSIA)",
    category: "Obsidian Multi-Agent Harness & SOP Standard",
    harnessStatus: "Multi-Harness Layer (OpenCode / Claude / Aider)",
    grade: "B+",
    summary: "An open file-based multi-agent harness specification where agents, reusable skills, scheduled tasks, and memory live in plain Markdown, interoperating directly with open CLI harnesses like OpenCode.",
    verdict: "The primary structural reference for YAIBOS file-based architecture: rather than reinventing a custom closed runtime, it proves skills and memory can interoperate across vibrant open-source harnesses like OpenCode with zero database lock-in.",
    scores: {
      zeroInstallUI: 2,
      oneClickSOP: 4,
      byosAuth: 5,
      teamSecondBrain: 5,
      teamRBAC: 2,
      modularPlugins: 5
    },
    strengths: [
      "100% Markdown architecture: agents, skills, MCP configs, and memory live in an open Obsidian vault with zero database lock-in.",
      "True multi-harness interoperability: works identically across vibrant open harnesses like OpenCode, Claude Code, Aider, and Goose.",
      "Intelligent lazy-loading: indexes available skills in system prompt, loading full procedural instructions only on demand."
    ],
    gaps: [
      "Requires Obsidian or terminal setup: lacks a zero-install standalone web dashboard for non-technical staff.",
      "Team permissions rely on external Git worktrees or OS filesystem permissions rather than integrated UI RBAC.",
      "Early alpha release with documentation currently in French."
    ],
    repoUrl: "https://github.com/kevines-ods/OBSIA"
  },
  {
    name: "DeepSeek Harness (dsh + Cordis)",
    category: "Modular Agent Engine & Runtime",
    harnessStatus: "Native Open Harness (Reference Runtime)",
    grade: "B+",
    summary: "The leading open-source modular agent harness built on the Cordis plugin engine with swappable memory, tool, and execution plugins.",
    verdict: "The premier architectural reference for a modular open-source agent harness, benefiting from a vibrant community plugin ecosystem, but currently lacks a non-technical UI and multi-user RBAC.",
    scores: {
      zeroInstallUI: 2,
      oneClickSOP: 4,
      byosAuth: 3,
      teamSecondBrain: 3,
      teamRBAC: 1,
      modularPlugins: 5
    },
    strengths: [
      "World-class modular plugin architecture based on the Cordis meta-framework.",
      "Vibrant open-source ecosystem: swappable execution, memory (dsh-mnemon), and tool plugins.",
      "Robust telemetry, duration counting, and audit trace logging."
    ],
    gaps: [
      "Strictly developer-oriented: requires terminal knowledge and Node.js to deploy.",
      "No native multi-user RBAC or folder permissions.",
      "Requires bridging for consumer subscription auth (ChatGPT/Claude web auth)."
    ],
    repoUrl: "https://github.com/deepseek-ai"
  },
  {
    name: "Obsidian AI (sup3rus3r/obsidian-ai)",
    category: "Visual Agent Canvas & Self-Hosted Platform",
    harnessStatus: "Custom Visual Engine (No Open Harness)",
    grade: "B+",
    summary: "Self-hosted, open-source platform for orchestrating AI agents through a visual drag-and-drop canvas with native MCP support, prompt vault, and team RBAC.",
    verdict: "Superb self-hosted visual orchestration with strong secrets management and multi-provider LLM support, though its node canvas is more complex than 1-click business SOP buttons and it lacks a native bi-directional Markdown note editor.",
    scores: {
      zeroInstallUI: 4,
      oneClickSOP: 4,
      byosAuth: 3,
      teamSecondBrain: 3,
      teamRBAC: 4,
      modularPlugins: 4
    },
    strengths: [
      "Drag-and-drop visual canvas for agent teams and DAG execution workflows.",
      "Production security: Fernet secrets vault, AES encryption, JWT auth, and role-based access control.",
      "Native Model Context Protocol (MCP) support and multi-provider model switching without config changes."
    ],
    gaps: [
      "Not built on a standard open harness like DSH or OpenCode: uses a bespoke node-graph runtime, meaning it cannot natively run community harness plugins or shared SOP workflows.",
      "Node-and-wire visual canvas still demands workflow logic design rather than simple 1-click SOP cards for business staff.",
      "Does not provide an integrated, human-editable Markdown second-brain note vault.",
      "Self-hosting requires Docker or server deployment before non-technical staff can use it."
    ],
    repoUrl: "https://github.com/sup3rus3r/obsidian-ai"
  },
  {
    name: "LoopSuit AI",
    category: "Custom AI Systems & Automation Studio",
    harnessStatus: "Bespoke Agency Service (No Open Harness)",
    grade: "B",
    summary: "AI-native product studio and automation agency deploying custom autonomous agents, onboarding pipelines, and bespoke operational workflows for business operators.",
    verdict: "Strong operational design and rapid production-ready MVP delivery, but structured as custom agency deployments rather than a sovereign, self-hosted open-source second brain operating system.",
    scores: {
      zeroInstallUI: 4,
      oneClickSOP: 4,
      byosAuth: 2,
      teamSecondBrain: 2,
      teamRBAC: 2,
      modularPlugins: 3
    },
    strengths: [
      "Custom autonomous agent workflows for lead intake, client onboarding, and operational procedures.",
      "High-end product design and rapid two-week delivery for operators.",
      "Emphasizes client ownership of the final deployed automation system."
    ],
    gaps: [
      "Not an open harness and not built on open runtimes like DSH or OpenCode: custom boutique agency automation built on private client infrastructure.",
      "Bespoke agency delivery rather than a standardized, open-source sovereign software harness.",
      "No integrated, bi-directional Markdown second-brain knowledge layer.",
      "Auth and pricing models vary per client setup rather than standardized BYOS session auth."
    ],
    repoUrl: "https://loopsuitai.com"
  },
  {
    name: "OpenDesign / DSHKer",
    category: "Visual Harness UI",
    harnessStatus: "Built on Open Harness (DeepSeek Harness)",
    grade: "B",
    summary: "Local-first visual desktop interface built directly on top of DeepSeek Harness (DSH), bringing a consumer-friendly UI to a vibrant open harness.",
    verdict: "Demonstrates the exact advantage of building on a vibrant open harness: directly inherits DSH's modular plugins, execution telemetry, and community updates while providing a zero-install visual layer.",
    scores: {
      zeroInstallUI: 4,
      oneClickSOP: 4,
      byosAuth: 2,
      teamSecondBrain: 2,
      teamRBAC: 1,
      modularPlugins: 4
    },
    strengths: [
      "Directly powered by DeepSeek Harness (DSH), inheriting upstream community plugins and runtime improvements.",
      "Zero-install desktop app for non-technical team members.",
      "Visual preview of agent executions and artifacts."
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
    harnessStatus: "Not an Agent Harness (Conversational Search)",
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
      "Not an autonomous agent harness and not built on open harnesses like DSH or OpenCode: custom Python engine focused on personal document retrieval and conversational search.",
      "Oriented toward conversational Q&A rather than running business SOPs.",
      "No 1-click action cards with telemetry and duration tracking.",
      "Rudimentary team sharing and permission controls."
    ],
    repoUrl: "https://github.com/khoj-ai/khoj"
  },
  {
    name: "Obsidian (with Agent & Smart Plugins)",
    category: "Knowledge Base + Plugin Ecosystem",
    harnessStatus: "Fragmented Plugins (No Unified Harness)",
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
      "Lacks a cohesive open harness foundation like DSH or OpenCode: community plugins operate as isolated silos with inconsistent tool permissions and fragmented context.",
      "High onboarding friction for non-technical team members.",
      "Obsidian Sync has zero folder-level RBAC for team permissions.",
      "Agent execution relies on fragmented community plugins rather than a cohesive runtime."
    ],
    repoUrl: "https://obsidian.md"
  },
  {
    name: "AnythingLLM",
    category: "Desktop AI Workspace",
    harnessStatus: "Not an Agent Harness (Document RAG)",
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
      "Not an agent harness and not built on open runtimes like DSH or OpenCode: custom monolithic Node.js backend designed for document Q&A, lacking autonomous business SOP execution.",
      "No 1-click SOP procedures or automated business agent loops.",
      "Data locked in internal vector databases instead of plain Markdown.",
      "Rigid plugin architecture with limited extensibility."
    ],
    repoUrl: "https://github.com/Mintplex-Labs/anything-llm"
  },
  {
    name: "Dify / Flowise",
    category: "Visual Workflow & LLMOps",
    harnessStatus: "Custom Visual DAG Engine (No Open Harness)",
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
      "Uses proprietary visual node execution graphs rather than an open harness runtime like DSH or OpenCode, creating workflow lock-in within their specific visual schemas.",
      "Visual node graphs are intimidating for non-technical operators.",
      "Relies on PostgreSQL and cloud vector stores, completely missing sovereign Markdown files.",
      "Heavy infrastructure footprint to self-host."
    ],
    repoUrl: "https://github.com/langgenius/dify"
  },
  {
    name: "Open WebUI",
    category: "Self-Hosted Model Interface",
    harnessStatus: "Not an Agent Harness (Model Chat UI)",
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
      "A web chat interface for LLMs rather than an agent harness: not built on DSH or OpenCode, and lacks an autonomous task loop or business SOP runner.",
      "Purely conversational: no 1-click execution cards or task duration telemetry.",
      "Lacks a bi-directional Markdown second brain.",
      "Not designed to automate repetitive business processes."
    ],
    repoUrl: "https://github.com/open-webui/open-webui"
  },
  {
    name: "CrewAI / AutoGPT / OpenManus",
    category: "Developer Agent Frameworks",
    harnessStatus: "Code Frameworks (Custom Runtimes)",
    grade: "D+",
    summary: "Code-first multi-agent orchestration libraries (CrewAI, AutoGPT, OpenManus) providing programmatic agent harnesses for developers.",
    verdict: "Powerful algorithmic experiments, but each invents its own custom runtime rather than building on modular standards like DSH or OpenCode, and they lack a non-technical UI.",
    scores: {
      zeroInstallUI: 1,
      oneClickSOP: 2,
      byosAuth: 1,
      teamSecondBrain: 1,
      teamRBAC: 1,
      modularPlugins: 4
    },
    strengths: [
      "Flexible multi-agent role delegation in Python or TypeScript.",
      "Rapidly adopting open standards like Model Context Protocol (MCP)."
    ],
    gaps: [
      "Each library invents its own custom programmatic harness rather than converging on modular standards like DSH (Cordis) or terminal standards like OpenCode, resulting in framework churn and developer lock-in.",
      "Zero graphical UI: requires terminal execution and virtual environments.",
      "Metered API consumption causes severe token bill shock.",
      "No persistent human-readable knowledge layer or team permissions."
    ]
  }
];

export const SCORING_CRITERIA = [
  { key: "zeroInstallUI", label: "Zero-Install UI", description: "Clean web or desktop interface without terminal commands or Git hurdles." },
  { key: "oneClickSOP", label: "1-Click SOPs", description: "Procedures rendered as visual buttons with telemetry and duration tracking." },
  { key: "byosAuth", label: "BYOS Auth", description: "Team members use existing subscriptions with zero host token bill shock." },
  { key: "teamSecondBrain", label: "Team Second Brain", description: "Plain Markdown storage with bi-directional in-app editing and semantic search." },
  { key: "teamRBAC", label: "Team RBAC", description: "Granular folder-level and file-level permissions with area ownership." },
  { key: "modularPlugins", label: "Modular Engine", description: "Pluggable engine design or open harness foundation (e.g. DSH, OpenCode) where tools and memory are swappable community plugins." }
];
