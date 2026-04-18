# Redesigning the ENMAX Design System for the Age of AI

**Role:** UX Design Co-op Student
**Company:** ENMAX - Calgary, Alberta
**Term:** January 2026 – August 2026 *(ongoing)*
**Scope:** Design system architecture, component rebuilds, AI workflow integration, documentation strategy

---

## Background

ENMAX is a Calgary-based utility company serving both regulated and competitive energy markets. As a UX Design Co-op Student, I was brought on for an 8-month term with two mandates: fill the existing gaps in ENMAX's design system, and get it ready for the integration of AI design tools - specifically Figma's MCP server and GitHub Copilot.

What started as a scoping exercise quickly became one of the most comprehensive and forward-thinking projects I've had the opportunity to lead. This is the story of how I took a fragmented, pre-AI design system and rebuilt it into a scalable, AI-digestible foundation - and where it's still going.

---

## The Starting Point

Before I could build anything new, I had to understand what already existed.

I began with research - not just into ENMAX's system specifically, but into what truly makes a design system work at an enterprise scale. I needed to understand best practices, common failure points, and what it means to design a system that can outlive the tools and workflows of today.

My first iteration was straightforward: a single-tiered variable system. Values mapped directly to outputs. It worked, in the way that a rough draft works - it proved the concept, but it wasn't going to scale.

The more I learned, the more I understood why.

---

## Phase 1 - Building the Foundation: A Three-Tier Token Architecture

The turning point came when I shifted my mental model from *values* to *tokens* - and more specifically, to the relationships between them.

After deep research and consulting with industry experts, I made the decision to restructure ENMAX's variable system around a three-tiered architecture:

- **Primitive tokens** - raw values. The source of truth for color, spacing, and typography at their most foundational level.
- **Global tokens** - named aliases that give primitives meaning without yet assigning intent.
- **Semantic tokens** - context-aware tokens that map directly to UI decisions (e.g., `color.background.primary`, `color.feedback.error`).

This wasn't just a naming exercise. This restructuring gave the design system flexibility, scalability, and consistency across naming conventions, use cases, and categories. It also became the scaffolding that everything else would be built on top of.

And critically - every single token was validated for **WCAG contrast and accessibility compliance**. For a utility company with a broad and diverse user base, accessibility isn't a nice-to-have. It's a responsibility baked into every decision.

---

## Phase 2 - Auditing the Components: What Existed, What Didn't, and What Needed to Change

With the token architecture in place, the next step was understanding the component landscape.

I worked closely with my leaders to audit everything. We identified what had been deprecated, what lived only in Figma versus what had been built in code, and which components were actively in use. From that audit, we established a core component set to focus on.

Then I started mapping the token architecture to those components - and that's where things got interesting.

When the ENMAX design system was originally built, Figma didn't have variables yet. As a result, the components had been constructed without token connections - everything was hardcoded. I had to map each component manually.

But while I was doing that, I noticed something beyond the missing tokens. Some components weren't just missing token connections - they were built below their potential. Auto-layout was inconsistently applied. Component properties weren't properly configured. The structure was functional, but it wasn't future-ready.

So I made a call: don't just map the tokens. Rebuild the components properly.

With the support and guidance of my leaders and colleagues, I rebuilt each component to follow auto-layout best practices, assigned proper component properties, and ensured the system stayed human-first while becoming AI-digestible. It was a significant body of work - but it was the right one to do.

---

## Phase 3 - Enter Slots: Doing More With Less

Midway through the component rebuild, Figma dropped something the design systems community had been anticipating for a long time: **Slots**.

Slots are flexible "drop zones" inside components that allow designers to add, customize, and arrange content directly within an instance - without ever needing to detach it. The concept mirrors how components actually behave in code (particularly in React), which makes designs easier for both developers and AI tools to interpret. Fewer workarounds. Less detaching. Cleaner, more intentional structure.

For ENMAX, this was a pivotal moment. Rather than treating it as a disruption mid-rebuild, I absorbed it into my process and used it to push the system further.

By leveraging slots alongside booleans - and using variants only where they were genuinely warranted - I was able to **reduce the total number of component variants by over 40%**, while simultaneously *increasing* the actual variation capability of those components. The system became leaner, more expressive, and significantly easier for designers to use correctly.

---

## Phase 4 - The Documentation Challenge & a New AI-Assisted Workflow

Toward the end of the component rebuild phase, Figma began rolling out deeper AI integrations through what they call **Skills** - connective tools that let AI agents interact directly with Figma's canvas and data. One in particular changed everything for me: `use_figma`.

`use_figma` allowed GitHub Copilot to write directly to Figma's canvas. The impact was immediate. What had been a slow, manual documentation process - consulting with leadership, mapping token-to-component relationships, maintaining consistency across a growing system - became dramatically more efficient.

But the real breakthrough wasn't just the speed. It was the workflow I discovered around it.

I developed a process where GitHub Copilot could simultaneously:
1. Write variable descriptions and component configurations directly into the Figma file, and
2. Capture that same information into a set of parallel markdown files - one for tokens, one for components.

This wasn't accidental redundancy. It was intentional future-proofing.

In an industry where the tooling landscape can shift overnight, I wasn't going to let the system's knowledge become trapped inside a proprietary file format. The markdown files were portable, versionable, and ready to be consumed by any AI toolchain - now or in the future.

Because I was already thinking about what came next.

---

## Phase 5 - The North Star: An ENMAX Design System Skill

Everything I had done - the token architecture, the component rebuilds, the documentation strategy - was pointing toward one thing: the **ENMAX Design System Skill**.

The vision is straightforward but significant. A custom AI skill, built on the design system's documented knowledge, that allows AI agents to:

- Generate high-fidelity, ENMAX-true UI directly in Figma, ready for designers to refine
- Scaffold production-ready React components for developers, using the actual ENMAX component library

The goal isn't to replace the designer - it's to give them back their time. When the heavy lifting of UI construction can be handled by an AI working from an accurate, well-documented design system, designers are free to focus on what they do best: strategy, user empathy, and the decisions that no tool can make for them.

To test this, I put what existed to work. Using Figma's MCP server and the rules and documentation I had authored, I ran multiple rounds of testing and iteration - carefully reviewing whether the generated UI actually reflected ENMAX's design specifications, and correcting wherever it didn't. The results were genuinely exciting. The system was producing ENMAX-accurate UI.

But there was still a gap.

---

## The Missing Piece: Figma Code Connect

For all the progress made, one thing remained unresolved: the generated UI was visually accurate, but disconnected from living code.

Through deeper research, I identified the missing link: **Figma Code Connect**.

Code Connect bridges the design system in Figma to the actual production components in the codebase. Once connected, every component in Figma carries real code context - not just a visual approximation. That means AI agents generating UI from the skill wouldn't just be producing something that *looks* like ENMAX. They'd be producing something that *is* ENMAX, in real, shippable code.

Code Connect is the final step toward a fully closed design-to-code ecosystem. It's something I'm actively advocating for as my work at ENMAX continues.

---

## What This All Adds Up To

Stepping back, what this project represents is more than a design system refresh. It's a rethinking of what a design system is *for* in an era where AI is becoming a collaborator.

The work spans:

- A **three-tier token architecture** that gives the system flexibility and semantic clarity
- **Rebuilt components** that meet modern standards for auto-layout, properties, and token mapping
- **WCAG-compliant accessibility** built in at every level
- A **40%+ reduction in component variants** through intelligent use of slots and booleans
- A **novel AI-assisted documentation workflow** that keeps the design file and markdown in sync
- A **custom AI skill** in progress, capable of generating ENMAX-true UI across design and code
- A planned **design system website** to serve as a single source of truth for the entire organization
- An active push for **Figma Code Connect** to close the final loop between design and production

---

## What's Next

This case study captures the work to date - but the journey isn't over.

Code Connect is the immediate next frontier. Beyond that, the design system website will bring everything into a single, accessible reference point for designers, developers, and stakeholders across ENMAX. And as the skill matures and the codebase connection is established, the ambition is a fully AI-augmented design workflow - one that's grounded in ENMAX's own standards, maintained by real people, and built to evolve.

The system isn't finished. But that's kind of the point.

---

*This case study is part of an ongoing body of work completed during an 8-month UX Design Co-op term at ENMAX (January – August 2026).*
