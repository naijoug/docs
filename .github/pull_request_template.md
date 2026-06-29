## AI-assisted change snapshot

- Related issue / sample request:
- Agent or human driver:
- Changed area:
- Intended outcome:

## Ownership and boundaries

Before asking for review, record the starting state and what must not be mixed into this PR.

- Starting `git status --short` summary:
- Pre-existing dirty paths to avoid:
- Files intentionally changed in this PR:
- Files generated or ignored:
- Do-not-touch paths / secrets / production data:

## Verification ladder

List the cheapest command that proves the change, then the next stronger checks. Mark skipped checks explicitly.

| Level | Command / check | Result | Evidence |
| --- | --- | --- | --- |
| Minimal |  |  |  |
| Focused |  |  |  |
| Build / smoke |  |  |  |

Skipped or unavailable checks:

- 

## AI coding audit handoff

If this PR came from an AI-assisted workflow, make the next reviewer’s first action obvious.

- Main risk found while using the agent:
- Evidence supporting that risk:
- Next safe command for reviewer:
- Unverified items:
- Continue / Narrow / Stop recommendation:

## Reviewer checklist

- [ ] The PR separates this change from pre-existing dirty workspace state.
- [ ] The final report names concrete commands instead of saying only “tested”.
- [ ] Generated files, lockfiles, screenshots, and build outputs have a stated reason.
- [ ] Unverified items are explicit and have a next owner action.
- [ ] The next reviewer can reproduce the first validation step without extra context.
