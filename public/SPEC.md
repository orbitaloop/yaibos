# YAIBOS: The Sovereign AI Operating System Specification
**Version:** 1.0.0-draft  
**Status:** Open Standard / Public Draft  
**Reference Implementation Target:** TypeScript / Rust / Tauri / Web  
**Primary Author:** Samuel Michelot & Community Collaborators  

---

## 1. Executive Summary

YAIBOS (Your AI Business Operating System) is an open architectural specification for an integrated, sovereign AI harness designed specifically for small businesses, solo founders, and non-technical teams.

Current autonomous agent frameworks are built for software engineers who are comfortable running terminal commands, managing Docker daemon processes, diagnosing Python virtual environments, and monitoring metered API key usage. Conversely, consumer AI chat interfaces (ChatGPT, Claude) isolate team members in siloed conversations without persistent company knowledge, shared standard procedures (SOPs), or execution telemetry.

YAIBOS bridges this divide by establishing a lightweight, modular sovereign engine specification where:
1. **Business procedures (SOPs)** are surfaced as visual 1-click execution cards.
2. **Team memory** lives in sovereign, human-readable Markdown files with role-based access control.
3. **Execution costs** are decoupled from the host through Bring Your Own Subscription (BYOS) authentication.
4. **All capabilities** are swappable through an open plugin architecture inspired by modular plugin architectures.

```
+-----------------------------------------------------------------------+
|                       YAIBOS Runtime Architecture                     |
|                                                                       |
|  [ Presentation Layer ]                                               |
|    - 1-Click SOP Visual Cockpit                                       |
|    - Visual Team Second Brain (Markdown & Knowledge Graph)           |
|    - Execution Telemetry & Audit Log Viewer                          |
|                                                                       |
|  [ Governance & Session Layer ]                                       |
|    - Folder-level & File-level RBAC                                   |
|    - BYOS Auth Engine (OAuth, Session Bridge, Zero-Token Shock)       |
|    - Lifespan Stage Gates (Assisted -> Supervised -> Autonomous)      |
|                                                                       |
|  [ Execution Engine Layer ]                                           |
|    - Agent Execution Loop & Context Window Assembler                  |
|    - Persistent Semantic Memory Provider (Local Vector / BM25)        |
|    - Tool & Skill Dispatcher                                          |
|                                                                       |
|  [ Storage & Protocol Layer ]                                         |
|    - Plain text Markdown files (Local Disk / Git)                    |
|    - Model Context Protocol (MCP) & Local Connectors                  |
+-----------------------------------------------------------------------+
```

---

## 2. The Six Architectural Pillars

### Pillar 1: Zero-Install / All-in-One Interface
* **Requirement**: Non-technical team members (operations managers, contractors, assistants) must not be forced to install CLI tools, Python runtimes, or complex editor plugins.
* **Specification**:
  * The system must deliver a unified desktop application (e.g. via Tauri or Electron) or a sovereign web application running on local networks.
  * No developer terminals or raw JSON configurations are exposed during standard business operation.
  * All agent interactions, file inspections, and workflow triggers are accessible through intuitive graphical elements.
  * Data sovereignty guarantee: Behind the interface, every document, SOP, and log remains standard plain text Markdown (`.md`) and open JSON configuration files.

### Pillar 2: 1-Click SOP & Skills Execution Dashboard
* **Requirement**: Business Standard Operating Procedures (SOPs) must be directly executable by authorized team members with a single click.
* **Specification**:
  * **SOP Schema**: Every SOP is declared as a structured Markdown file with frontmatter defining title, description, input parameters, default timeout, and target skill script.
  * **Visual Catalog**: Procedures are rendered as actionable cards grouped by operational area (e.g., Marketing, Accounting, Lead Generation, Quality Control).
  * **1-Click Run**: Triggering an SOP launches an autonomous agent loop with pre-configured system prompts and verified MCP tool access.
  * **Telemetry & History**:
    * Execution timestamp and elapsed duration.
    * Real-time status badge: `Idle`, `Running`, `Success`, `Warning`, `Failed`.
    * Output manifest linking generated files, diff previews, and concise human-readable summaries.
    * Step-by-step diagnostic audit log with full trace visibility.
  * **Lifespan Evolution Stages**:
    * *Stage 1 (Assisted)*: Agent proposes actions and halts at each step for manual human confirmation.
    * *Stage 2 (Supervised)*: Agent executes steps autonomously, pausing only before external writes or irreversible actions.
    * *Stage 3 (Autonomous)*: Agent executes end-to-end on a schedule or event trigger, alerting humans only upon exceptions or anomaly detection.
  * **REST API & Workflow Interoperability**:
    * In addition to visual 1-click execution in the harness, every SOP exposes a REST endpoint (`POST /api/v1/sop/{id}/run`) and deep-link URI (`yaibos://run?sop={id}`).
    * **Hybrid Human/AI Workflows**: Integrates with project tools (Asana, Trello, Linear, ERP) for multi-stage workflows combining human and AI tasks. A human team member can click an SOP execution URL directly from an Asana or Trello task card to execute the SOP in 1 click in their harness, or an ERP webhook triggers the REST endpoint automatically once a previous human task is completed.

### Pillar 3: BYOS (Bring Your Own Subscription) Auth
* **Requirement**: Prevent catastrophic API token bill shock for the workspace owner when multiple team members run intensive agent workloads.
* **Specification**:
  * The runtime must support authenticating via individual team members' existing consumer or business subscriptions (e.g., ChatGPT Plus/Team/Pro, Claude Pro/Team, DeepSeek web sessions) in addition to traditional metered API keys.
  * Session credentials are encrypted on the client machine and never transmitted to an intermediary SaaS broker.
  * The execution runtime consumes models directly through authenticated client sessions, ensuring transparent personal usage tracking.

### Pillar 4: Integrated Team Second Brain & Memory
* **Requirement**: Company knowledge, client records, and institutional procedures must be simultaneously legible to human team members and ingestible by autonomous agents.
* **Specification**:
  * **Local Markdown Storage**: Notes are organized in a standard directory structure (Projects, Areas, Resources, Archives) readable by any Markdown reader.
  * **Bi-directional In-App Editor**: Team members can create, browse, and edit documentation directly within YAIBOS with real-time formatting.
  * **Persistent Semantic Memory**: The system indexes notes using local embedding models or lightweight hybrid search (BM25 + vector embeddings), exposing relevant contextual snippets to the agent execution loop.
  * **Memory Hygiene Daemon**: Background maintenance checks detect stale procedures, flag conflicting documentation, and suggest consolidation to the workspace owner.

### Pillar 5: Team Permissions & Role-Based Access Control (RBAC)
* **Requirement**: Protect sensitive operational data (payroll, financial records, client personal data) from unauthorized viewing or agent mutation.
* **Specification**:
  * **Granular Access Scopes**:
    * `Read`: Team member or agent can read context notes in the designated folder.
    * `Execute`: Team member can run SOPs located within the folder.
    * `Write / Propose`: Team member or agent can create or edit notes, subject to owner approval.
    * `Admin`: Full ownership, permission delegation, and key management.
  * **Designated Area Ownership**: Folders and SOP collections have assigned human owners responsible for approving modifications and reviewing execution traces.
  * **Immutable Audit Trail**: All file modifications and agent write operations are logged to a tamper-resistant local Git history or append-only audit file.

### Pillar 6: Modular "Everything is a Plugin" Architecture
* **Requirement**: Keep the core execution engine minimal, resilient, and independent of any single model provider or integration vendor.
* **Specification**:
  * **Core Responsibilities**: The kernel manages event dispatching, process lifecycle, session authentication, and file I/O permissions.
  * **Extensibility via Plugins**:
    * Model Connectors (OpenAI, Anthropic, DeepSeek, Local Ollama/vLLM).
    * Tool Providers (MCP servers, local CLI wrappers, REST adapters).
    * Storage Adapters (Local filesystem, Git sync, Cloudflare R2 backup).
    * UI Panels (Custom business dashboards, interactive form widgets).
  * Standardized manifest format allowing community distribution and zero-restart hot-reloading.

---

## 3. Data Formats and Schemas

### 3.1 SOP Manifest Definition (YAML Frontmatter)

```markdown
---
yaibos_version: "1.0"
id: "sop-inbound-lead-qualification"
title: "Inbound Lead Qualification & CRM Enrichment"
area: "Sales & Marketing"
owner: "Operations Lead"
maturity_stage: "supervised"
timeout_seconds: 600
permissions:
  required_role: "operations"
  fs_scope:
    - "read: 3 RESOURCES/Market Data/"
    - "write: 1 PROJECTS/Active Leads/"
mcp_tools:
  - "business_registry_lookup"
  - "email_verification"
  - "crm_update"
---

# Operational Procedure Description
1. Ingest qualified address and company list from inbound lead queue.
2. Query business registry API for company headcount and status.
3. Verify domain, contact email, and ICP scoring criteria.
4. Update CRM pipeline stage and generate summary artifact.
```

### 3.2 Execution Telemetry Schema (JSON)

```json
{
  "execution_id": "exec-20260914-982341",
  "sop_id": "sop-inbound-lead-qualification",
  "trigger": "manual_1click",
  "triggered_by": "alex@company.com",
  "auth_mode": "byos_session",
  "started_at": "2026-09-14T13:42:10Z",
  "completed_at": "2026-09-14T13:43:08Z",
  "duration_seconds": 58,
  "status": "success",
  "steps_total": 4,
  "steps_completed": 4,
  "artifacts_produced": [
    "1 PROJECTS/Active Leads/2026-09-14-qualified-leads.csv"
  ],
  "estimated_human_minutes_saved": 45
}
```

---

## 4. Security & Sovereignty Principles

1. **Zero Secret Leakage**: API credentials and session cookies reside exclusively in local encrypted storage. No third-party relay or proprietary cloud broker participates in the execution pipeline.
2. **Deterministic Sandboxing**: Tool executions (shell commands, script evaluations) occur within strictly confined sandboxes with explicit folder whitelists.
3. **Open Specification License**: This specification is released under Creative Commons CC-BY-4.0. Implementers are encouraged to build proprietary or open-source runtimes conforming to this standard.

---

*YAIBOS Specification v1.0.0-draft: Published for founders, engineers, and independent business operators.*
