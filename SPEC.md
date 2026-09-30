# YAIBOS: Open Specification for an AI Business OS

- **Version:** 1.0.0-draft
- **Status:** Public draft, open for comments
- **License:** CC-BY-4.0
- **Author:** Samuel Michelot, with community contributors
- **Reference implementation:** none published yet. The [scorecard](https://yaibos.com/implementations) grades existing tools against this spec.

---

## 1. Summary

YAIBOS (Your AI Business OS) describes how a small business can run its work with AI agents without being locked into one AI vendor, one app, or one developer.

The core idea for v1 fits in one sentence: **the vault is the OS, the harness is replaceable.**

- A folder of plain Markdown files (the *vault*, today usually opened with Obsidian) holds the company context, the procedures (SOPs, the business equivalent of agent skills) and the list of tools the agents may use.
- An existing AI harness (Claude Code, Codex, OpenCode, Gemini CLI, or a desktop app built on one of them) reads the vault and runs the SOPs.
- Switching harness or model means re-running a sync step, not rewriting the procedures.

```
 Vault (Markdown + git, you own it)     Harness (replaceable)          Model (replaceable)
 ├── AGENTS.md      company context ──►  Claude Code / Codex /     ──►  Claude / GPT / Gemini /
 ├── SOP/           procedures           OpenCode / Gemini CLI /        open-weight / local
 ├── Tools.md       MCP servers, CLIs    desktop app on top             (via the harness's
 └── Areas/ ...     knowledge            (official login = BYOS)        official login or API key)
```

"Sovereign" in this spec means: **you own the files and can leave any vendor in an afternoon.** It does not mean the model runs on your machine. Section 5 states exactly what stays local and what leaves.

## 2. Conventions and conformance levels

The keywords MUST, MUST NOT, SHOULD and MAY follow [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

Each requirement is tagged with a level:

| Tag | Level | Who it is for |
| --- | --- | --- |
| **[L1]** | Core (v1) | A founder or small technical team working from a vault and an existing harness. |
| **[L2]** | Team | Adds a non-technical interface, team permissions and run history. |
| **[Opt]** | Optional extension | Useful, not required at any level. |

A system is **YAIBOS L1 conformant** when it meets every [L1] MUST. It is **L2 conformant** when it also meets every [L2] MUST. The scorecard reports which requirements each tool meets.

---

## 3. The six pillars

### Pillar 1: Usable without a terminal

**Why:** Operations staff, assistants and contractors will not adopt a tool that starts with `npm install`.

- [L1] A non-technical user SHOULD be able to run an existing SOP from a graphical app (for example the desktop app of the chosen harness) without typing shell commands.
- [L2] The system MUST provide an interface where users browse and run SOPs, read outputs and edit notes, with no terminal, raw JSON or git commands exposed.
- [L2] File sync between team members MUST be automatic. Conflicts MUST be shown as a readable choice, never as git conflict markers.
- [L1] Behind any interface, every note, SOP and log MUST remain a plain file readable without YAIBOS.

### Pillar 2: SOPs as portable, runnable skills

**Why:** Procedures that live in a wiki are never followed. Procedures locked in one vendor's format die with that vendor.

- [L1] Each SOP MUST be one Markdown file with the frontmatter defined in §4.1 and a human-readable procedure body.
- [L1] The same SOP file MUST be runnable by at least two different harnesses without editing it. Harness-specific skill files MAY be generated from it by a sync step (see Pillar 6).
- [L1] Each SOP MUST declare a maturity stage:
  - `assisted`: the agent proposes each step and waits for confirmation.
  - `supervised`: the agent runs alone but stops before external or irreversible actions.
  - `autonomous`: the agent runs end to end, on demand or on a schedule, and alerts a human only on exceptions.
- [L1] Only the SOP owner MAY promote an SOP to `autonomous`.
- [L2] SOPs MUST be browsable by area (Sales, Finance, Operations...) and runnable in one click, with a run history (§4.3).
- [Opt] Each SOP MAY expose a trigger URL or API endpoint so project tools (Asana, Trello, Linear, an ERP or CRM) can start it after a human task is done. This enables hybrid human and AI workflows.
- [Opt] SOPs MAY run on a schedule. The schedule SHOULD be defined in the vault so it survives a harness switch.

### Pillar 3: BYOS, Bring Your Own Subscription

**Why:** A team running agents all day on metered API keys can produce unpredictable bills for the owner. Most people already pay for a ChatGPT, Claude or Gemini plan.

- [L1] The system MUST let each user run SOPs with their own AI plan through the vendor's **official** client or login (for example Claude Code signed in with a Claude plan, or Codex signed in with a ChatGPT plan), or with their own API key.
- [L1] The system MUST NOT extract, proxy or replay consumer session cookies or OAuth tokens outside the vendor's official client. This breaks most vendors' terms and can get accounts banned.
- [L1] Credentials MUST stay on the user's machine or in the vendor's client. They MUST NOT be stored in the vault.
- [L2] The owner SHOULD be able to see which plan or key each run used, and set spending caps on shared API keys.

**Note for implementers:** a vault-plus-harness system gets BYOS almost for free, because the official harness makes the model call. A new custom harness usually cannot use consumer plans legally and falls back to API keys. This is one reason the v1 spec builds on existing harnesses instead of replacing them.

### Pillar 4: A living team second brain

**Why:** Agents are only as good as the context they read. Company knowledge decays quietly: old prices, obsolete rules, two notes saying opposite things.

- [L1] Knowledge MUST be stored as plain Markdown in a folder the owner controls, readable by any Markdown editor.
- [L1] The vault MUST contain an agent entry file (`AGENTS.md`, which MAY be symlinked as `CLAUDE.md` or similar) describing the business, the main folders and the rules agents must follow.
- [L1] Folders SHOULD contain short `README` map files so an agent can find context by reading, without needing a search index.
- [L1] A folder structure SHOULD be documented. PARA (Projects, Areas, Resources, Archives) is recommended, not required.
- [L1] Notes that agents rely on SHOULD carry an `owner` and a `last_validated` date (§4.4).
- [L2] Notes past their review date MUST be listed for their owner with three actions: confirm, update or archive.
- [Opt] Contradiction audits: detect notes that disagree (prices, rules, SOP parameters) and alert the owners with file references (§4.5).
- [Opt] Decision log: record decisions with the options considered, so agents do not reopen settled questions.
- [Opt] Learning from runs: after a run, propose updates to the SOP or notes as a reviewable diff.
- [Opt] Semantic or hybrid search (keyword + embeddings) for large vaults.
- [Opt] Background maintenance MAY use spare subscription quota to prepare cleanup proposals. It MUST only propose diffs, never apply them without approval.
- [L1] Computed values (health scores, contradiction counts) MUST NOT be written into notes. They belong in a separate index file (for example `.yaibos/health.json`) so human files stay clean and git history stays readable.

### Pillar 5: Permissions and safety

**Why:** An agent with blanket access to payroll, client data and email is one bad instruction away from a costly mistake.

- [L1] Actions that leave the business or cannot be undone (sending messages, publishing, paying, deleting, writing to external systems) MUST require human approval unless the SOP is `autonomous` and lists that action explicitly.
- [L1] Content read from outside (emails, web pages, client documents, tool output) MUST be treated as data, never as instructions. An SOP MUST NOT gain new actions because a document asked for them.
- [L1] Secrets (API keys, passwords, tokens) MUST NOT be stored in the vault. Use environment variables or the OS keychain.
- [L1] Every change an agent makes to the vault MUST be reviewable afterwards, for example through git history with one commit per run.
- [L1] An agent running an SOP MUST have at most the permissions that **both** the SOP declares and the person who started it holds. Scheduled runs use the permissions of the SOP owner.
- [L2] The system MUST support folder-level permissions per role with four scopes: `read`, `run` (execute SOPs in the folder), `propose` (edit subject to owner approval) and `admin`.
- [L2] Each area MUST have a human owner who approves changes to it.
- [L2] Tool execution (shell, scripts) MUST be confined to the folders the SOP declares. [L1] SHOULD.

### Pillar 6: Harness and model portability

**Why:** AI harnesses and models change every few months. The procedures and knowledge of a business should outlive all of them.

- [L1] The vault MUST be the single source of truth. Harness-specific files (`CLAUDE.md`, `.codex/`, `.opencode/`, skill folders, MCP config) MUST be generated from the vault or symlinked to it, never edited by hand as the original.
- [L1] The vault MUST contain a tools registry (§4.2) listing each MCP server and CLI the agents may use, what it is for, and how to connect it. Credentials are referenced by name, never stored.
- [L1] A sync step (script or SOP) MUST install or update the SOPs, context file and tools in each supported harness.
- [L1] Switching the default harness or model SHOULD take less than one hour for a vault with fewer than 50 SOPs.
- [Opt] A plugin system MAY add model connectors, tool providers, storage backends or interface panels through a published manifest format.

---

## 4. Data formats

### 4.1 SOP frontmatter [L1]

```markdown
---
yaibos_version: "1.0"
id: "sop-inbound-lead-qualification"
title: "Inbound lead qualification and CRM update"
description: "Qualify new inbound leads and update their CRM stage."
area: "Sales"
owner: "ops@company.com"
maturity_stage: "supervised"    # assisted | supervised | autonomous
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

One Markdown file (for example `Tools.md`) or one note per tool:

```yaml
- id: "crm"
  kind: "mcp"                   # mcp | cli | api
  purpose: "Read and update deals and contacts in the CRM"
  connect: "See Tools/CRM.md for setup in each harness"
  credential_env: "CRM_API_KEY" # name only, never the value
  risk: "writes to external system"
```

### 4.3 Run record [L2]

```json
{
  "run_id": "run-20260914-982341",
  "sop_id": "sop-inbound-lead-qualification",
  "trigger": "manual",
  "started_by": "alex@company.com",
  "harness": "claude-code",
  "auth_mode": "user_subscription",
  "started_at": "2026-09-14T13:42:10Z",
  "completed_at": "2026-09-14T13:43:08Z",
  "status": "success",
  "approvals": [{ "action": "crm.update_stage", "approved_by": "alex@company.com" }],
  "files_changed": ["Projects/Active Leads/2026-09-14-qualified-leads.md"],
  "estimated_human_minutes_saved": 45
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

**Leaves your machine:** the prompt and every file the agent reads during a run are sent to the model provider, under that provider's terms. Using a consumer plan does not change this.

- [L1] The documentation of a conformant system MUST state clearly which data is sent to which provider.
- [L1] SOPs that handle sensitive data (health, payroll, client personal data) SHOULD declare it, so the owner can choose a provider with zero data retention (ZDR) or a local model for them.
- [Opt] **Privacy routing:** detect requests that contain sensitive data and route them automatically to a ZDR or local model, with a visible note in the run record.

## 6. Out of scope for v1

These are planned for later drafts or left to implementers: a dedicated YAIBOS runtime, a plugin marketplace, multi-company hosting, and certification of implementations.

## 7. License

This specification is released under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). Anyone may build open-source or commercial systems that follow it. Comments and proposals are welcome on [GitHub](https://github.com/orbitaloop/yaibos).
