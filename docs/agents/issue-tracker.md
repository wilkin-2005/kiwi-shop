# Issue tracker: GitHub

Issues and specifications for this repository live as GitHub Issues. Use the `gh` CLI for issue-tracker operations.

## Conventions

- Create an issue with `gh issue create`.
- Read an issue and its comments with `gh issue view <number> --comments`.
- List issues with `gh issue list`, filtering by state and label when appropriate.
- Add comments with `gh issue comment <number>`.
- Apply or remove labels with `gh issue edit <number>`.
- Close an issue with `gh issue close <number>`.

Infer the repository from the GitHub remote when running inside this clone.

## Pull requests as a triage surface

**PRs as a request surface: no.**

## Skill conventions

When a skill says "publish to the issue tracker", create a GitHub issue. When it says "fetch the relevant ticket", run `gh issue view <number> --comments`.
