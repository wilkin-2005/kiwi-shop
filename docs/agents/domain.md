# Domain Docs

How engineering skills should consume this repository's domain documentation.

## Before exploring

- Read the root `CONTEXT.md`.
- Read any relevant ADRs in `docs/adr/` when they exist.

If those files do not exist, proceed silently. The domain-modeling skill creates domain documents only when a term or decision has been resolved.

## Layout

This is a single-context repository:

```
/
├── CONTEXT.md
├── docs/adr/
└── src/
```

## Vocabulary

Use the canonical terms defined in `CONTEXT.md` in issues, specifications, tests, and implementation discussions. Do not substitute terms the glossary explicitly avoids. If a needed domain concept is missing, record it through the domain-modeling workflow.

## ADR conflicts

If a proposed change conflicts with an existing ADR, identify the conflict explicitly instead of silently overriding the decision.
