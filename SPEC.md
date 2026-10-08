# YAIBOS: Open Specification for an AI Business OS

- **Version:** 1.1.0-draft
- **Status:** Public draft, open for comments
- **License:** CC-BY-4.0
- **Author:** Samuel Michelot, with community contributors
- **Base reference:** Samuel Michelot's working YAIBOS system and the starter second brain derived from it. The private working files are not published. Cockpit and Team are optional implementation profiles, not released YAIBOS products.

---

## 1. Summary

YAIBOS (Your AI Business OS) describes how a small business can run its work with AI agents without being locked into one AI vendor, one app, or one developer.

The core idea fits in one sentence: **the second brain is the OS, the harness is replaceable.** The Base profile describes the file-based system Samuel already uses, rather than requiring a new application.

- A folder of plain Markdown files (the *second brain*, currently viewed and edited with Obsidian) holds company context, SOPs, role-agent definitions and memory, and the tools registry.
- An existing AI harness reads these files and runs the SOPs. A harness is the application that gives a model access to files and tools, for example Claude Code, Codex or OpenCode.
- Synchronization prepares commands and tool connections for supported harnesses. Switching preserves the source files; authentication, tool availability and permissions still need verification in the destination.
- Optional Cockpit and Team layers add convenience and coordination. They depend more on the chosen harness or integration, while the Base remains usable on its own.

```
 Second brain (files you own)          Harness (replaceable)          Model (via harness)
 ├── AGENTS.md      company context ──►  Claude Code / Codex /     ──►  Claude / GPT / Gemini /
 ├── 5 SOP/         procedures           OpenCode / supported apps       supported by the
 ├── Tools note     MCP, CLIs, APIs      (official login or API key)      chosen harness
 ├── Agent notes    roles and memory
 └── PARA folders   knowledge

 Optional Cockpit: SOP dashboard, launch, progress, approvals, run history
 Optional Team: shared context, enforced access, ownership, audit
```

"Sovereign" means you own the source files and can change execution tools without rewriting your business knowledge and procedures. It does not promise identical features in every harness or a fixed migration time. Section 5 describes data boundaries.

## 2. Conventions and implementation profiles

The keywords MUST, MUST NOT, SHOULD and MAY follow [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

The specification version (for example `1.1.0-draft`) identifies this document. Implementation levels describe capabilities, not release versions or pricing tiers. They are cumulative:

| Tag | Level | Who it is for |
| --- | --- | --- |
| **[L1]** | Base | Samuel's existing pattern: a second brain, SOPs, role agents, tools and sync, used through an existing harness. No dedicated YAIBOS dashboard required. |
| **[L2]** | Cockpit | Base plus a dashboard to browse, launch and follow SOP runs. Useful to a solo founder as well as a team. |
| **[L3]** | Team | Cockpit plus shared context, enforced role permissions, ownership and team audit. |
| **[Opt]** | Optional extension | Useful, not required at any level. |

A system is **Base conformant** when it meets every [L1] MUST, **Cockpit conformant** when it also meets every [L2] MUST, and **Team conformant** when it additionally meets every [L3] MUST. Higher levels are optional: Base is a complete useful implementation, not an unfinished Cockpit.

### 2.1 What each level trades

| Profile | What you gain | What depends on the implementation | What survives a harness switch |
| --- | --- | --- | --- |
| Base | Small setup, open files, choice of harness and supported models, your own subscription or key | Native commands, connectors, authentication and scheduling | Context, SOPs, role definitions, memory, tool descriptions and schedule intent |
| Cockpit | SOP catalog, launch buttons, visible progress, approvals and run history | Dashboard integration and supported harness APIs; some features may need rebuilding | All Base files and exported run records; the same dashboard experience is not guaranteed |
| Team | Shared work, access control and an audit trail | Identity, storage, synchronization, permissions and the execution service | All Base files, exported history and documented access policies; enforcement must be configured again |

Harness independence applies to the business files. It does not imply every harness supports every model, subscription, connector or interface feature. Implementers MUST publish a compatibility table for their supported harnesses and disclose gaps. A cockpit for one harness is valid at L2 if it preserves L1 portability and offers a usable exit to Base.

### 2.2 Reference and evidence

Samuel's Base reference combines Markdown context and README maps, system and business SOPs, named role agents with private memory, a tools registry, synchronization, and backups and updates. Claude and Codex are supported examples; other harnesses need their own adapters and verification. The public specification describes this architecture, not Samuel's private business data, credentials or conversations.

Conformance claims MUST name the specification version, profile, supported harnesses and evidence for each MUST. A representative SOP MUST be verified in two supported harnesses using the same source file. The market scorecard is a qualitative comparison, not certification: its existing grades mix Base and optional capabilities and do not establish profile conformance. A missing dashboard or team permission service does not by itself make a Base implementation incomplete.

---

## 3. The six pillars

### Pillar 1: Usable without a terminal

**Why:** Operations staff, assistants and contractors will not adopt a tool that starts with `npm install`.

- [L1] A non-technical user SHOULD be able to run an existing SOP from a graphical app (for example the desktop app of the chosen harness) without typing shell commands.
- [L2] The system MUST provide a dashboard where users browse and launch SOPs, follow their status, respond to approval requests and read outputs without terminal commands or raw JSON. Notes MAY open in the user's existing editor.
- [L3] File sync between team members MUST be automatic. Conflicts MUST be shown as a readable choice, never as git conflict markers.
- [L1] Behind any interface, every note, SOP and log MUST remain a plain file readable without YAIBOS.

### Pillar 2: SOPs as portable, runnable skills

**Why:** Procedures that live in a wiki are never followed. Procedures locked in one vendor's format die with that vendor.

- [L1] Each SOP MUST have one canonical Markdown file with a human-readable goal, trigger and inputs, procedure, outputs and failure behavior. Required context MAY be linked instead of duplicated. Minimal metadata is described in §4.1.
- [L1] The same SOP file MUST be runnable by at least two different harnesses without editing it. Harness-specific skill files MAY be generated from it by a sync step (see Pillar 6).
- [L1] Each SOP SHOULD declare its lifecycle as `stage: draft`, `pilot` or `stable`, following the Base reference. Run counts and time estimates MAY be tracked in frontmatter. Lifecycle describes reliability, not permission to act autonomously.
- [L1] The SOP or shared operating rules MUST define allowed actions and approval boundaries in readable text. A missing execution policy defaults to supervised behavior.
- [L2] Each SOP MUST expose an execution mode to the cockpit, declared in the source or derived from its explicit policy:
  - `assisted`: the agent proposes each step and waits for confirmation.
  - `supervised`: the agent runs routine work alone and stops for external or irreversible actions without explicit authorization.
  - `autonomous`: the agent runs end to end, on demand or on a schedule, and alerts a human only on exceptions.
- [L1] Only the SOP owner MAY authorize autonomous execution. A `stable` SOP does not automatically become autonomous.
- [L2] SOPs MUST be browsable by area (Sales, Finance, Operations...) and runnable in one click, with a run history (§4.3).
- [Opt] Each SOP MAY expose a trigger URL or API endpoint so project tools (Asana, Trello, Linear, an ERP or CRM) can start it after a human task is done. This enables hybrid human and AI workflows.
- [Opt] SOPs MAY run on a schedule. The schedule SHOULD be defined in the vault so it survives a harness switch.
- [L1] When schedules are used, their intent and scheduler ownership MUST be recorded in the second brain. Installing skills in another harness MUST NOT duplicate or activate schedules. Migration requires authorization, stopping the old task and verifying the new task. Unsupported scheduling MUST be disclosed.

### Pillar 3: BYOS, Bring Your Own Subscription

**Why:** A team running agents all day on metered API keys can produce unpredictable bills for the owner. Most people already pay for a ChatGPT, Claude or Gemini plan.

- [L1] The system MUST let each user run SOPs with their own AI plan through the vendor's **official** client or login (for example Claude Code signed in with a Claude plan, or Codex signed in with a ChatGPT plan), or with their own API key.
- [L1] The system MUST NOT extract, proxy or replay consumer session cookies or OAuth tokens outside the vendor's official client. This breaks most vendors' terms and can get accounts banned.
- [L1] Credentials MUST stay on the user's machine or in the vendor's client. They MUST NOT be stored in the vault.
- [L2] Run records SHOULD identify the authentication mode, without credentials. A cockpit MUST NOT promise subscription access that its supported harness cannot officially provide.
- [L3] The owner SHOULD be able to see which plan or key each run used, and set spending caps on shared API keys.

**Note for implementers:** a vault-plus-harness system gets BYOS almost for free, because the official harness makes the model call. A new custom harness usually cannot use consumer plans legally and falls back to API keys. This is one reason the v1 spec builds on existing harnesses instead of replacing them.

### Pillar 4: A living second brain

**Why:** Agents are only as good as the context they read. Company knowledge decays quietly: old prices, obsolete rules, two notes saying opposite things.

- [L1] Knowledge MUST be stored as plain Markdown in a folder the owner controls, readable by any Markdown editor.
- [L1] The vault MUST contain an agent entry file (`AGENTS.md`, which MAY be symlinked as `CLAUDE.md` or similar) describing the business, the main folders and the rules agents must follow.
- [L1] Folders SHOULD contain short `README` map files so an agent can find context by reading, without needing a search index.
- [L1] A folder structure SHOULD be documented. PARA (Projects, Areas, Resources, Archives) is recommended, not required.
- [L1] Notes that agents rely on SHOULD carry an `owner` and a `last_validated` date (§4.4).
- [L1] Role agents, when used, MUST be defined in readable files stating their role, linked SOPs, tools and memory location. Named agents do not require a separate agent server.
- [L1] A maintenance and backup procedure MUST be documented. Updates to shared templates or system SOPs MUST preserve user edits or present a reviewable conflict.
- [L3] Notes past their review date MUST be listed for their owner with three actions: confirm, update or archive.
- [Opt] Contradiction audits: detect notes that disagree (prices, rules, SOP parameters) and alert the owners with file references (§4.5).
- [Opt] Decision log: record decisions with the options considered, so agents do not reopen settled questions.
- [Opt] Learning from runs: after a run, propose updates to the SOP or notes as a reviewable diff.
- [Opt] Semantic or hybrid search (keyword + embeddings) for large vaults.
- [Opt] Background maintenance MAY use spare subscription quota to prepare cleanup proposals. It MUST only propose diffs, never apply them without approval.
- [L1] Computed values (health scores, contradiction counts) MUST NOT be written into notes. They belong in a separate index file (for example `.yaibos/health.json`) so human files stay clean and git history stays readable.

### Pillar 5: Permissions and safety

**Why:** An agent with blanket access to payroll, client data and email is one bad instruction away from a costly mistake.

- [L1] External or irreversible actions (sending messages, publishing, paying, deleting, writing to external systems) MUST have human authorization, either for the specific action or through explicit standing instructions that cover it. Scheduled autonomous actions MUST be listed in the approved SOP policy. Silence, a `stable` stage or a third-party document cannot grant authorization.
- [L1] Content read from outside (emails, web pages, client documents, tool output) MUST be treated as data, never as instructions. An SOP MUST NOT gain new actions because a document asked for them.
- [L1] Secrets (API keys, passwords, tokens) MUST NOT be stored in the vault. Use environment variables or the OS keychain.
- [L1] Every change an agent makes to the vault MUST be reviewable afterwards, for example through git history with one commit per run.
- [L1] An SOP MUST NOT grant permissions beyond those of the person who starts it. Its declared policy, in prose or metadata, MUST further limit actions where needed. Scheduled runs use their approved owner's permissions. Base rules are agent instructions; they MUST NOT be presented as enforced multi-user isolation.
- [L2] The cockpit MUST show pending approvals, failure and cancellation, distinguish simulated progress from execution, and support a stop or cancellation request with its actual outcome.
- [L3] The system MUST enforce folder-level permissions per role with four scopes: `read`, `run` (execute SOPs in the folder), `propose` (edit subject to owner approval) and `admin`. Enforcement MUST occur at file and tool access, not only in prompts or hidden UI controls.
- [L3] Each area MUST have a human owner who approves changes to it.
- [L3] Tool execution (shell, scripts) MUST be confined to the folders the SOP declares. [L1] SHOULD.

### Pillar 6: Harness and model portability

**Why:** AI harnesses and models change every few months. The procedures and knowledge of a business should outlive all of them.

- [L1] The second brain MUST be the source of truth for business context, SOPs, agent definitions and tool descriptions. Harness-specific copies MUST be generated or linked from these sources. Native authentication and runtime settings MAY remain in the harness; they MUST NOT become the only copy of business knowledge or procedures.
- [L1] The vault MUST contain a tools registry (§4.2) listing each MCP server and CLI the agents may use, what it is for, and how to connect it. Credentials are referenced by name, never stored.
- [L1] A sync step (script or SOP) MUST install or update the SOPs, context file and tools in each supported harness.
- [L1] Switching the default harness or model SHOULD take less than one hour for a vault with fewer than 50 SOPs.
- [L2] The cockpit MUST read canonical SOPs from the second brain and export run records (§4.3) to plain files. A cache or database MAY support the interface but MUST NOT be the only copy of business procedures or knowledge.
- [L2] Removing the cockpit MUST leave Base usable through a supported harness. Run history, dashboard controls and in-progress sessions are separate capabilities; implementations MUST document which can migrate and which cannot.
- [L3] Access policies and audit records MUST be exportable in documented formats. Exported policies describe intent; the destination MUST verify enforcement before team access resumes.
- [Opt] A plugin system MAY add model connectors, tool providers, storage backends or interface panels through a published manifest format.

---

## 4. Data formats

### 4.1 SOP source and optional cockpit metadata

Base uses the existing reference format: `skill_name` identifies the generated command; the filename or heading gives the title. The responsible person, inputs, tools, approval rules and outcomes MAY be expressed in the body or linked operating rules. Base MUST NOT require cockpit-specific fields or a rewritten procedure to install a second harness.

Minimal Base example:

```markdown
---
skill_name: sop-inbound-lead-qualification
stage: pilot
---
# SOP Inbound Lead Qualification
Responsible: owner of this second brain.

## Goal
Prepare qualified leads for human review.

## Trigger & Inputs
Manual request with a CSV of new leads.

## Procedure
1. Read the CSV and the linked Sales context.
2. Research each company using tools in the tools registry.
3. Prepare proposed CRM updates. Ask before writing to the CRM or sending email.

## Outputs & Failure Mode
Save a reviewable Markdown summary in Projects/Active Leads/.
If a source or tool is unavailable, mark the affected lead unverified and report it.
```

Optional lifecycle fields are `runs`, `last_run` and `minutes_manual`. Schedule intent MAY use an `automation` block with `trigger`, `recurrence`, `when`, `timezone`, `scheduled_in` and `schedule_id`. An absent block means manual execution. A sync step can generate harness-specific skill files without altering the source.

For Cockpit, implementers MUST expose a stable SOP identifier, title, area, owner, inputs, execution mode, tools and approval policy. They MAY derive these from the Base file and its linked rules or add explicit frontmatter. The following extended form is an example, not a mandatory Base schema:

```markdown
---
yaibos_version: "1.1"
skill_name: "sop-inbound-lead-qualification"
stage: "stable"                # lifecycle: draft | pilot | stable
id: "sop-inbound-lead-qualification"
title: "Inbound lead qualification and CRM update"
description: "Qualify new inbound leads and update their CRM stage."
area: "Sales"
owner: "ops@company.com"
execution_mode: "supervised"   # assisted | supervised | autonomous
inputs:
  - name: "lead_list"
    description: "CSV or note with the new leads"
    required: true
tools:                          # ids from the tools registry (§4.2)
  - "business-registry"
  - "crm"
scope:
  read: ["Resources/Market Data/", "Areas/Sales/"]
  write: ["Projects/Active Leads/"]
approval_required:              # always ask before these, whatever the stage
  - "crm.update_stage"
  - "email.send"
timeout_seconds: 600
---

# Procedure
1. Read the lead list given as input.
2. Look up each company in the business registry: headcount and status.
3. Check the domain, contact email and fit with the ideal customer profile.
4. Propose the CRM stage for each lead and wait for approval.
5. Write a summary note in Projects/Active Leads/.
```

### 4.2 Tools registry entry [L1]

One Markdown index (the Base reference uses `0 AI Tools Lists.md`) or linked notes. Each entry MUST identify the tool, its purpose, connection instructions and credential location by name only. Prose or tables are sufficient for Base. Structured entries MAY make cockpit integration easier:

```yaml
- id: "crm"
  kind: "mcp"                   # mcp | cli | api
  purpose: "Read and update deals and contacts in the CRM"
  connect: "See Tools/CRM.md for setup in each harness"
  credential_env: "CRM_API_KEY" # name only, never the value
  risk: "writes to external system"
```

### 4.3 Run record [L2]

Base MAY use SOP counters, summary notes and git history without a run database. Cockpit MUST retain exportable run records with the SOP identifier, source path, harness, initiator, timestamps, status, approval decisions and output references. It MUST distinguish queued, running, waiting for approval, success, failure and cancelled runs; unknown progress MUST remain unknown. Cost or time saved MAY be shown only with the estimation method disclosed. The example below illustrates a completed run, not a fixed database schema.

```json
{
  "run_id": "run-20260914-982341",
  "sop_id": "sop-inbound-lead-qualification",
  "source_path": "5 SOP/SOP Inbound Lead Qualification.md",
  "trigger": "manual",
  "started_by": "alex@company.com",
  "harness": "claude-code",
  "auth_mode": "user_subscription",
  "started_at": "2026-09-14T13:42:10Z",
  "completed_at": "2026-09-14T13:43:08Z",
  "status": "success",
  "approvals": [{ "action": "crm.update_stage", "approved_by": "alex@company.com" }],
  "files_changed": ["Projects/Active Leads/2026-09-14-qualified-leads.md"],
  "estimated_human_minutes_saved": 45,
  "estimate_method": "Owner's manual-time estimate minus active human time for this run"
}
```

### 4.4 Note review fields [L1 SHOULD]

Only human-authored fields go in the note:

```yaml
---
owner: "ops@company.com"
last_validated: "2026-09-01"    # date a human confirmed the note is accurate
review_every_days: 60           # optional, default set per vault
---
```

Computed status lives in the index file, not in the note:

```json
{
  "Areas/Finance/Pricing-Rules.md": {
    "status": "fresh",
    "next_review": "2026-10-31",
    "open_contradictions": 0
  }
}
```

### 4.5 Contradiction alert [Opt]

```json
{
  "audit_id": "audit-20260915-0042",
  "type": "contradiction",
  "severity": "high",
  "files": ["Areas/Finance/Pricing-Rules.md", "SOP/Inbound-Sales-Quote.md"],
  "summary": "Pricing-Rules.md says 250 EUR/hour (updated 2026-08-15). Inbound-Sales-Quote.md says 200 EUR/hour.",
  "proposed_fix": "Update Inbound-Sales-Quote.md to 250 EUR/hour.",
  "status": "pending_owner_review"
}
```

---

## 5. Data boundaries and privacy

**Stays under your control:** the vault, run records, credentials, and the choice of provider for each SOP.

**May leave your machine:** prompts, retrieved context and tool results sent to a remote model, plus data shared with connected tools. The chosen harness, model and connectors determine what is transmitted. Owning Markdown files or using a consumer plan does not itself keep execution local; a fully local model is a separate choice.

- [L1] The documentation of a conformant system MUST state clearly which data is sent to which provider.
- [L1] SOPs that handle sensitive data (health, payroll, client personal data) SHOULD declare it, so the owner can choose a provider with zero data retention (ZDR) or a local model for them.
- [Opt] **Privacy routing:** detect requests that contain sensitive data and route them automatically to a ZDR or local model, with a visible note in the run record.

## 6. Scope and implementation status

Base exists as Samuel's working system and its derived starter template. Cockpit and Team define optional extensions that others may implement; the dashboard on this website is a concept simulation, not an execution service. This revision does not announce a dedicated YAIBOS application or commit to building one.

A dedicated runtime, plugin marketplace, multi-company hosting and formal certification remain outside this specification's scope. Implementers may add features, but MUST preserve Base files and disclose the additional dependencies.

## 7. License

This specification is released under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). Anyone may build open-source or commercial systems that follow it. Comments and proposals are welcome on [GitHub](https://github.com/orbitaloop/yaibos).
