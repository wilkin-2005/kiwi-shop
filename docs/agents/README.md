# Agent Guidance Map

This directory contains guidance that applies only to particular task branches. Read a file when its trigger matches the task.

## Current files

| Trigger | Guidance |
| --- | --- |
| GitHub Issues, specifications, or triage | [`issue-tracker.md`](./issue-tracker.md), [`triage-labels.md`](./triage-labels.md) |
| Domain terminology or ADRs | [`domain.md`](./domain.md) |

## Suggested `docs/` structure

```text
docs/
|-- agents/
|   |-- README.md
|   |-- domain.md
|   |-- issue-tracker.md
|   `-- triage-labels.md
|-- adr/
|-- NAMING_CONVENTIONS.md
|-- STYLING.md
`-- MVP.md
```

Add a focused file under `docs/agents/` only when a rule has a distinct trigger and is not needed for every task. Keep domain decisions in `CONTEXT.md` and `docs/adr/`, rather than duplicating them here.