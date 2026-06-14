# CLAUDE.md

### Project: mohamadawada.ca Redesign
This is a full visual redesign and structural audit of the portfolio site (React/Vite/TypeScript on Vercel), driven by a Figma MCP to code pipeline. Keep the existing React structure and conventions. This is a redesign, not a rebuild or framework migration.

### Workflow
- Pages are delivered one at a time, in phases. Implement only the page/stage given. Do not jump ahead, refactor unrelated files, or "improve" anything outside the current scope.
- After each stage, summarize what changed and flag anything that needs review before moving on.
- Never commit or push unless explicitly told to. Pushing cadence (per-phase or all at once) is the user's call.

### Source of truth: Figma
- The Figma designs always win. Match them strictly: spacing, type, color tokens, layout, component states, breakpoints.
- If something in the design looks wrong, inconsistent, or technically problematic (accessibility, responsiveness, performance), call it out clearly. Do NOT change or "fix" it without explicit approval. Flag first, wait for the go-ahead.
- If Figma data from MCP is ambiguous or incomplete (missing states, unclear responsive behavior, etc.), ask instead of guessing.

### Audit expectations
While working on each page, note (don't auto-fix):
- Dead/orphaned components, unused assets, or routes that should be deprecated
- Inconsistencies with the rest of the codebase or design tokens
- Quick wins for accessibility and performance
